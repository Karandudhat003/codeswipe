import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';
import { saveNewsletterToFile, getNewslettersFromFile } from '@/lib/storage';

export async function GET() {
  try {
    let dbSubs: any[] = [];
    try {
      await connectToDatabase();
      dbSubs = await Newsletter.find({}).sort({ createdAt: -1 }).lean();
    } catch (e) {
      console.warn('MongoDB query failed for newsletter, returning file subscribers:', e);
    }
    const fileSubs = getNewslettersFromFile();

    // Merge & deduplicate by email
    const combined = [...dbSubs, ...fileSubs];
    const unique = Array.from(
      new Map(combined.map((item) => [item.email?.toLowerCase(), item])).values()
    );

    return NextResponse.json({ success: true, data: unique });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Always save to file storage first (fallback)
    const fileRecord = saveNewsletterToFile(cleanEmail);

    // Attempt MongoDB save if available
    let dbRecord = null;
    try {
      await connectToDatabase();
      dbRecord = await Newsletter.findOneAndUpdate(
        { email: cleanEmail },
        { email: cleanEmail, createdAt: new Date() },
        { upsert: true, new: true }
      );
    } catch (dbErr: any) {
      console.warn('MongoDB save failed for newsletter, stored in file fallback:', dbErr.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing to our newsletter!',
        data: dbRecord || fileRecord,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Newsletter submission error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to subscribe' },
      { status: 500 }
    );
  }
}

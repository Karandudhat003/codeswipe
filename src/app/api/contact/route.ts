import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { saveContactToFile, getContactsFromFile } from '@/lib/storage';

export async function GET() {
  try {
    let dbContacts: any[] = [];
    try {
      await connectToDatabase();
      dbContacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    } catch (e) {
      console.warn('MongoDB query failed, using local file storage:', e);
    }
    const fileContacts = getContactsFromFile();

    // Merge & deduplicate by email + createdAt
    const combined = [...dbContacts, ...fileContacts];
    const unique = Array.from(
      new Map(combined.map((item) => [item._id?.toString() || item.email + item.createdAt, item])).values()
    );

    return NextResponse.json({ success: true, data: unique });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const normalizedData = {
      name: body.name || body.fullName || 'Anonymous',
      email: body.email || '',
      company: body.company || '',
      phone: body.phone || '',
      building: Array.isArray(body.building)
        ? body.building
        : body.services
        ? Array.isArray(body.services)
          ? body.services
          : [body.services]
        : body.building
        ? [body.building]
        : [],
      projectDetails: body.projectDetails || body.message || 'No project details specified',
      createdAt: new Date().toISOString(),
    };

    if (!normalizedData.email) {
      return NextResponse.json({ success: false, error: 'Email is required.' }, { status: 400 });
    }

    let savedRecord = null;

    // Save to local file storage first as fallback
    const fileRecord = saveContactToFile(normalizedData);
    savedRecord = fileRecord;

    // Attempt MongoDB save if available
    try {
      await connectToDatabase();
      const dbRecord = await Contact.create(normalizedData);
      savedRecord = dbRecord;
    } catch (dbErr: any) {
      console.warn('MongoDB save failed, stored in file fallback instead:', dbErr.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been received.',
        data: savedRecord,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server error occurred' },
      { status: 500 }
    );
  }
}

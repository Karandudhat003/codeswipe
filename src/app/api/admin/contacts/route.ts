import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';
import Newsletter from '@/models/Newsletter';
import { getContactsFromFile, getNewslettersFromFile } from '@/lib/storage';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    let dbContacts: any[] = [];
    let dbNewsletters: any[] = [];

    try {
      await connectToDatabase();
      dbContacts = await Contact.find().sort({ createdAt: -1 }).lean();
      dbNewsletters = await Newsletter.find().sort({ createdAt: -1 }).lean();
    } catch (e) {
      console.warn('MongoDB query failed for admin, using local storage fallback:', e);
    }

    const fileContacts = getContactsFromFile();
    const fileNewsletters = getNewslettersFromFile();

    // Combine contacts
    const combinedContacts = [...dbContacts, ...fileContacts];
    const contactsMap = new Map();
    combinedContacts.forEach((item) => {
      const key = item._id?.toString() || `${item.email}_${item.createdAt}`;
      if (!contactsMap.has(key)) {
        contactsMap.set(key, item);
      }
    });
    const contacts = Array.from(contactsMap.values());

    // Combine newsletters
    const combinedNewsletters = [...dbNewsletters, ...fileNewsletters];
    const newslettersMap = new Map();
    combinedNewsletters.forEach((item) => {
      const key = item._id?.toString() || item.email;
      if (!newslettersMap.has(key)) {
        newslettersMap.set(key, item);
      }
    });
    const newsletters = Array.from(newslettersMap.values());

    return NextResponse.json({
      success: true,
      data: contacts,
      newsletters: newsletters,
    });
  } catch (error: any) {
    console.error('Failed to fetch admin data', error);
    // Even if error occurs, return file fallback
    const contacts = getContactsFromFile();
    const newsletters = getNewslettersFromFile();
    return NextResponse.json({ success: true, data: contacts, newsletters: newsletters });
  }
}

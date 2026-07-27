import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const NEWSLETTERS_FILE = path.join(DATA_DIR, 'newsletters.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function saveContactToFile(contact: any) {
  try {
    ensureDataDir();
    let contacts: any[] = [];
    if (fs.existsSync(CONTACTS_FILE)) {
      const content = fs.readFileSync(CONTACTS_FILE, 'utf-8');
      contacts = JSON.parse(content || '[]');
    }
    const record = {
      _id: Date.now().toString(),
      ...contact,
      createdAt: contact.createdAt || new Date().toISOString(),
    };
    contacts.unshift(record);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
    return record;
  } catch (err) {
    console.error('Failed to write contact to file fallback', err);
    return contact;
  }
}

export function getContactsFromFile() {
  try {
    ensureDataDir();
    if (fs.existsSync(CONTACTS_FILE)) {
      const content = fs.readFileSync(CONTACTS_FILE, 'utf-8');
      return JSON.parse(content || '[]');
    }
  } catch (err) {
    console.error('Failed to read contacts file', err);
  }
  return [];
}

export function saveNewsletterToFile(email: string) {
  try {
    ensureDataDir();
    let newsletters: any[] = [];
    if (fs.existsSync(NEWSLETTERS_FILE)) {
      const content = fs.readFileSync(NEWSLETTERS_FILE, 'utf-8');
      newsletters = JSON.parse(content || '[]');
    }
    // Prevent duplicate emails in file
    if (!newsletters.some((item) => item.email?.toLowerCase() === email.toLowerCase())) {
      const record = {
        _id: Date.now().toString(),
        email: email.toLowerCase(),
        createdAt: new Date().toISOString(),
      };
      newsletters.unshift(record);
      fs.writeFileSync(NEWSLETTERS_FILE, JSON.stringify(newsletters, null, 2), 'utf-8');
      return record;
    }
    return newsletters.find((item) => item.email?.toLowerCase() === email.toLowerCase());
  } catch (err) {
    console.error('Failed to write newsletter to file fallback', err);
    return { email, createdAt: new Date().toISOString() };
  }
}

export function getNewslettersFromFile() {
  try {
    ensureDataDir();
    if (fs.existsSync(NEWSLETTERS_FILE)) {
      const content = fs.readFileSync(NEWSLETTERS_FILE, 'utf-8');
      return JSON.parse(content || '[]');
    }
  } catch (err) {
    console.error('Failed to read newsletters file', err);
  }
  return [];
}

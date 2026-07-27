// Central place to update your contact details.
export const CONTACT = {
  whatsapp: "917265025017", // +91 72650 25017 — digits only with country code
  phone1: "+91 90545 12976",
  phone2: "+91 72650 25017",
  phone: "+91 90545 12976 / +91 72650 25017",
  email: "contact.codeswipe@gmail.com",
};

export const WA_MESSAGE = "Hi CodeSwipe! I'm looking for a reliable IT company to build my project. Can we discuss the details?";

export const waLink = (message?: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message ?? WA_MESSAGE)}`;

export const mailLink = (subject: string, body: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

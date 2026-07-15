// Central place to update your contact details.
export const CONTACT = {
  whatsapp: "919999999999", // digits only, with country code — update to your real number
  email: "hello@codeswipe.in",
  phone: "+91 99999 99999",
};

export const waLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailLink = (subject: string, body: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

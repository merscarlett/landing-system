import { Mail, Phone, MapPin, Instagram } from "lucide-react";

import Footer from "../../../core/components/Footer";
import contactsData from "../data/contacts.json";

const icons = {
  Email: <Mail />,
  Телефон: <Phone />,
  Instagram: <Instagram />,
  Адреса: <MapPin />,
} as const;

function FooterSection() {
  const contacts = contactsData.map((item) => ({
    ...item,
    icon: icons[item.label as keyof typeof icons],
  }));

  return (
    <section id="contacts" className="bg-stone-900 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-7">
        <Footer
          contacts={contacts}
          className="flex flex-col items-center gap-8 sm:gap-10"
          listClassName="flex flex-wrap justify-center gap-x-12 gap-y-6"
          itemClassName="flex items-center gap-3 text-base font-sans transition-colors hover:text-yellow-400"
          iconWrapperClassName="flex items-center justify-center text-yellow-400"
          copyrightClassName="mt-3 text-sm text-gray-500"
          copyright="© 2025 Books for Soldiers. Усі права захищені."
        />
      </div>
    </section>
  );
}

export default FooterSection;

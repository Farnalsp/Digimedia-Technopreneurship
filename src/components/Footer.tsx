import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const partnershipLinks = [
    { name: "Wonderful Indonesia", href: "https://wonderfulimages.kemenparekraf.go.id/" },
    { name: "Kemenparekraf", href: "https://kemenpar.go.id/" },
  ];

  const teamMembers = [
    { name: "Rizal Wira Pambudi", role: "Hustler" },
    { name: "Farhan Alam Saputra", role: "Hacker" },
    { name: "Musyaffa Zuhdi", role: "Hipster" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">DigiMedia</span>
                <span className="text-sm font-medium text-primary-400 leading-tight">Reality</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{t("footerDescription")}</p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                info@digimediareality.com
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                +62 21 1234 5678
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Jakarta, Indonesia
              </div>
            </div>
          </div>

          {/* Partnership Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kerja Sama DigiMedia Reality</h3>
            <ul className="space-y-2">
              {partnershipLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("socialMedia")}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tim Kami</h3>
            <div className="space-y-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-sm">
                  <p className="text-white font-medium">{member.name}</p>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">© 2025 DigiMedia Reality. Seluruh hak cipta dilindungi.</p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Syarat Layanan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

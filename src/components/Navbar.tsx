import React, { useState } from "react";
import { Menu, X, Sun, Moon, User, Globe } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";
import { AuthModal } from "./AuthModal";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const t = (key: keyof typeof translations) => translations[key][language];

  const languages = [
    { code: "id" as const, name: "Bahasa Indonesia", flag: "🇮🇩" },
    { code: "en" as const, name: "English", flag: "🇺🇸" },
  ];

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "destinations", href: "#destinations" },
    { key: "features", href: "#features" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-0">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-white font-bold text-sm sm:text-lg">D</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white leading-tight whitespace-nowrap">DigiMedia</span>
                  <span className="text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400 leading-tight whitespace-nowrap">Reality</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a key={item.key} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                    {t(item.key as keyof typeof translations)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0 mr-1 md:mr-0">
              {/* Theme Toggle */}
              <button onClick={toggleTheme} className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Toggle theme">
                {theme === "light" ? <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" /> : <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-1 sm:space-x-2"
                  aria-label="Select language"
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">{language.toUpperCase()}</span>
                </button>

                {showLanguages && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguages(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3 ${
                          language === lang.code ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400" : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* User Icon - Hidden on mobile */}
              <button onClick={() => setIsAuthOpen(true)} className="hidden md:flex p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="User account">
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Toggle menu">
                  <div className="w-4 h-4 relative">
                    <Menu className={`w-4 h-4 absolute transition-all duration-300 text-gray-700 dark:text-white ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
                    <X className={`w-4 h-4 absolute transition-all duration-300 text-gray-700 dark:text-white ${isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key as keyof typeof translations)}
              </a>
            ))}

            {/* Mobile User Login */}
            <button
              onClick={() => {
                setIsAuthOpen(true);
                setIsOpen(false);
              }}
              className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200 flex items-center space-x-3"
            >
              <User className="w-5 h-5" />
              <span>Login / Register</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

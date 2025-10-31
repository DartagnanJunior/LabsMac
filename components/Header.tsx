"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre Nós", href: "/about" },
    { name: "Equipe", href: "/team" },
    { name: "Serviços", href: "/services" },
    { name: "Artigos", href: "/articles" },
    { name: "Contato", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Logo width={150} height={54} />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-2">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Button
                  key={link.name}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={`transition-all duration-200 ${
                    isActive 
                      ? "" 
                      : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </Button>
              );
            })}
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Button
                    key={link.name}
                    asChild
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start transition-all duration-200 ${
                      isActive 
                        ? "" 
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

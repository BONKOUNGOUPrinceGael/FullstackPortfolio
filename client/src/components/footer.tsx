import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/BONKOUNGOUPrinceGael", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/prince-bonkoungou/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:princegaelb@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Portfolio. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Conçu et développé avec passion
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover-elevate active-elevate-2 transition-all"
                aria-label={link.label}
                data-testid={`link-social-${index}`}
              >
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

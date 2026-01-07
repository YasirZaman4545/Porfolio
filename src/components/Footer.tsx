import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/YasirZaman4545/YasirZaman4545", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:yasirzaman@email.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2026 Yasir Zaman. Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-current" />
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

import { FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";

function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/javed-khan-659a1440b/",
      icon: <FiLinkedin />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/javed.wdevlabs/",
      icon: <FiInstagram />,
    },
    {
      name: "GitHub",
      href: "https://github.com/javedwdevlabs",
      icon: <FiGithub />,
    },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto max-w-6xl px-6">

        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          {/* Copyright */}
          <p className="text-sm text-[var(--color-text-secondary)]">
            © 2026 Javed Khan. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-lg
                  border border-[var(--color-border)]
                  text-[var(--color-text-secondary)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-primary)]
                  hover:bg-[var(--color-primary)]
                  hover:text-white
                "
              >
                <span className="text-lg">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
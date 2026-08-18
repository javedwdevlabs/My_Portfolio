import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      to: "/",
    },
    // {
    //   name: "MyResume",
    //   to: "/myresume",
    // },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Skills",
      to: "/skills",
    },
    {
      name: "Projects",
      to: "/projects",
    },
    // {
    //   name: "Blog",
    //   to: "/blog",
    // },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur">

      <div className="mx-auto max-w-6xl px-6">

        <div className="flex items-center justify-between py-4">

          {/* =========================
              Logo
          ========================= */}

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-[var(--color-text-primary)]"
          >
            Javed Khan
          </Link>


          {/* =========================
              Desktop Navigation
          ========================= */}

          <div className="hidden items-center gap-8 md:flex">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="
                  text-sm
                  text-[var(--color-text-secondary)]
                  transition-colors
                  hover:text-[var(--color-primary)]
                "
              >
                {link.name}
              </Link>
            ))}

          </div>


          {/* =========================
              Mobile Menu Button
          ========================= */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--color-text-primary)] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* =========================
            Mobile Navigation
        ========================= */}

        <AnimatePresence>

          {isOpen && (

            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="overflow-hidden md:hidden"
            >

              <div className="flex flex-col border-t border-[var(--color-border)] py-4">

                {navLinks.map((link) => (

                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="
                      py-3
                      text-sm
                      text-[var(--color-text-secondary)]
                      transition-colors
                      hover:text-[var(--color-primary)]
                    "
                  >
                    {link.name}
                  </Link>

                ))}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </nav>
  );
}

export default Navbar;
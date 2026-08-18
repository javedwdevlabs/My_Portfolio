import { motion } from "motion/react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div className="mx-auto w-full max-w-[900px] px-6 sm:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
            Let’s build something
            <span className="text-[var(--color-primary)]">
              {" "}meaningful.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            I’m always open to discussing data science projects, learning
            opportunities, collaborations, or interesting ideas. If you
            have something worth talking about, feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >

          {/* Email Card */}
          <motion.a
            href="mailto:javed.wdevlabs@gmail.com"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-xl hover:shadow-blue-500/5 sm:p-7"
          >
            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                  Email
                </p>

                <h3 className="mt-3 text-lg font-semibold text-[var(--color-text-primary)]">
                  Let’s talk
                </h3>

                <p className="mt-2 break-all text-sm text-[var(--color-text-secondary)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  javed.wdevlabs@gmail.com
                </p>
              </div>

              <span className="text-xl text-[var(--color-text-secondary)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-primary)]">
                ↗
              </span>

            </div>
          </motion.a>

          {/* Social Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-xl hover:shadow-blue-500/5 sm:p-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
              Find Me Online
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/javed-khan-659a1440b/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
              >
                LinkedIn ↗
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/javed.wdevlabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
              >
                Instagram ↗
              </a>

            </div>
          </motion.div>

        </motion.div>

      

      </div>
    </section>
  );
}

export default Contact;
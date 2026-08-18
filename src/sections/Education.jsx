import { motion } from "motion/react";

function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-primary)]">
            Education
          </p>

          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Education & Learning
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
        >
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
            Data Science
          </h3>

          <p className="mt-2 text-[var(--color-primary)]">
            Machine Learning & Data Analysis
          </p>

          <p className="mt-4 leading-7 text-[var(--color-text-secondary)]">
            Building a strong foundation in Python, statistics, data
            analysis, machine learning, and practical data science through
            continuous learning and projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
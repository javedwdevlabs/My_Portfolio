import { motion } from "motion/react";

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-primary)]">
            Experience
          </p>

          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Professional Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 border-l border-[var(--color-border)] pl-6"
        >
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
            Data Science / Machine Learning
          </h3>

          <p className="mt-2 text-sm text-[var(--color-primary)]">
            Learning & Project Experience
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-[var(--color-text-secondary)]">
            Developing practical experience in data analysis, statistics,
            machine learning and building data-driven projects using Python
            and its data science ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
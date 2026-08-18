import { motion } from "motion/react";

function Skills() {
  const skills = [
    {
      title: "Programming",
      description: "Python",
    },
    {
      title: "Data Analysis",
      description: "NumPy · Pandas · Matplotlib · Seaborn",
    },
    {
      title: "Machine Learning",
      description: "Scikit-learn · Regression · Classification · Clustering",
    },
    {
      title: "Statistics & Mathematics",
      description: "Statistics · Probability · Linear Algebra",
    },
    {
      title: "Data Visualization",
      description: "Matplotlib · Seaborn · Plotly",
    },
    {
      title: "Tools",
      description: "Jupyter · Git · GitHub",
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-primary)]">
            Skills
          </p>

          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            My Technical Skills
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors duration-300 hover:border-[var(--color-primary)]"
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                {skill.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
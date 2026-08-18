import { motion } from "motion/react";

function Projects() {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description:
        "A machine learning project focused on predicting customer churn using data preprocessing, exploratory data analysis and classification techniques.",
      technologies: "Python · Pandas · Scikit-learn",
    },
    {
      title: "House Price Prediction",
      description:
        "A regression project that uses data analysis and machine learning to predict house prices from relevant features.",
      technologies: "Python · NumPy · Pandas · Scikit-learn",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-primary)]">
            Projects
          </p>

          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors duration-300 hover:border-[var(--color-primary)]"
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--color-text-secondary)]">
                {project.description}
              </p>

              <p className="mt-5 text-sm text-[var(--color-primary)]">
                {project.technologies}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.a
          href="/all-projects"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:bg-[var(--color-primary-hover)] hover:shadow-blue-500/20"
        >
          View All Projects
          <span className="text-lg leading-none">→</span>
        </motion.a>

      </div>
    </section>
  );
}

export default Projects;
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function MLAll() {
const projects = [
  {
    title: "Mental Wellness Assessment",

    description:
      "Discover how your lifestyle, digital habits, sleep, physical activity and stress patterns influence your predicted mental health score.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "FastAPI",
      "Pydantic"
    ],

    type: "Machine Learning",
    version:'1.0',

    path: "/mental_health_score_explain",
  },
];

  return (
    <section className="min-h-screen py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Model Building
          </p>

          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] sm:text-5xl">
            Machine Learning Projects
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[var(--color-text-secondary)]">
        Explore my machine learning projects where I use real-world datasets to build models,
         make predictions, and solve practical problems with data.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="
                flex h-full flex-col
                rounded-xl
                border border-[var(--color-border)]
                bg-[var(--color-card)]
                p-6
                transition-all duration-300
                hover:border-[var(--color-primary)]
                hover:shadow-lg
                hover:shadow-blue-500/5
              "
            >
              {/* Project Type */}
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-primary)]">
                {project.type}
              </p>

              {/* Title */}
              <h2 className="mt-3 text-xl font-semibold text-[var(--color-text-primary)]">
                {project.title}
              </h2>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-text-secondary)]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border border-[var(--color-border)]
                      px-3 py-1
                      text-xs
                      text-[var(--color-text-secondary)]
                      transition-all duration-300
                      hover:border-[var(--color-primary)]
                      hover:text-[var(--color-primary)]
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* View Project */}
            
  <div className="flex items-center justify-between">
     <Link
                to={project.path}
                className="
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-lg
                  border border-[var(--color-border)]
                  bg-[var(--color-card)]
                  px-4 py-2.5
                  text-sm font-medium
                  text-[var(--color-text-primary)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-[var(--color-primary)]
                  hover:bg-[var(--color-primary)]
                  hover:text-white
                "
              >
                View Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <p  className="
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-lg
                  border border-[var(--color-border)]
                  bg-[var(--color-card)]
                  px-4 py-2.5
                  text-sm font-medium
                  text-[var(--color-text-primary)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-[var(--color-primary)]
                  hover:bg-[var(--color-primary)]
                  hover:text-white
                ">Version {project.version}</p>
  </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MLAll;
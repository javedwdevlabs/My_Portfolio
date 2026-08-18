import { motion } from "motion/react";
import { Link } from "react-router-dom";
function AllProjects() {
  return (
    <section className="min-h-screen bg-[var(--color-bg)] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1000px] px-6 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl">
            All Projects
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            Explore my work across data analysis, machine learning,
            and practical data science projects.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
       <Link
  to="/eda-all-projects"
  className="
    inline-block w-full rounded-xl
    bg-[var(--color-primary)]
    px-7 py-3.5
    text-center font-medium text-white
    transition-all duration-300
    hover:-translate-y-1
    hover:bg-[var(--color-primary-hover)]
    sm:w-auto
  "
>
  Analysis Projects
</Link>


          <Link to='/ml-all-projects'
            className="
              w-full rounded-xl
              border border-[var(--color-border)]
              px-7 py-3.5
              font-medium text-[var(--color-text-primary)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[var(--color-primary)]
              hover:text-[var(--color-primary)]
              sm:w-auto
            "
          >
            ML + AI Projects
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default AllProjects;
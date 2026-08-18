import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function About() {
  const skills = [
    "Python",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Statistics",
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div className="mx-auto w-full max-w-[900px] px-6 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
            About Me
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:text-5xl">
            I work with data to find
            <span className="text-[var(--color-primary)]">
              {" "}patterns, insights, and solutions.
            </span>
          </h2>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mx-auto mt-12 max-w-[760px] border-y border-[var(--color-border)] py-10 sm:mt-14 sm:py-12"
        >
          <div className="text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">

            {/* Paragraph 1 */}
            <p>
              I’m a Data Science enthusiast with a strong foundation in
              Python, data analysis, statistics, and machine learning. I enjoy
              working with real datasets, cleaning and exploring them, finding
              patterns, and understanding what the data is actually telling us.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-6">
              I use Python and its data science ecosystem to analyse data,
              create visualisations, and build machine learning solutions.
              I focus on learning through practical projects and improving
              how I turn raw data into useful insights and decisions.
            </p>

          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mt-12"
        >
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Technologies I Work With
          </p>

          {/* Skills Carousel */}
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={4500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={12}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="skills-swiper"
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill}>
                <div
                  className="
                    flex h-11 items-center justify-center
                    rounded-full
                    border border-[var(--color-border)]
                    bg-[var(--color-card)]
                    px-4
                    text-sm font-medium
                    text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--color-primary)]
                    hover:bg-[var(--color-primary)]/10
                    hover:text-[var(--color-primary)]
                    hover:shadow-lg
                    hover:shadow-blue-500/10
                  "
                >
                  {skill}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
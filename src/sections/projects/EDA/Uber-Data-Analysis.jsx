import { motion } from "motion/react";
import { Link } from "react-router-dom";

function UBER_EDA() {
  return (
    <section className="min-h-screen py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="border-b border-[var(--color-border)] pb-12"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Data Analysis · EDA
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl">
            Uber Data Analysis
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            An exploratory data analysis project focused on understanding
            Uber trip patterns, customer behavior, booking categories,
            peak hours, and other operational insights from real-world
            ride data.
          </p>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Python",
              "Pandas",
              "NumPy",
              "Matplotlib",
              "Seaborn",
              "EDA",
              "Feature Engineering",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border border-[var(--color-border)]
                  px-4 py-2
                  text-sm
                  text-[var(--color-text-secondary)]
                "
              >
                {tech}
              </span>
            ))}
          </div>
             <br/>
          <h2 className="text-red-500 pb-2">Update</h2>
          <p>

  This is just the beginning. I'll continue improving this project with
  deeper analysis, new ideas, and additional techniques as I learn and grow.
  Follow me on LinkedIn and Instagram to stay connected and see what I build
  next.
</p>
        </motion.div>

        {/* ================= PROJECT OVERVIEW ================= */}
        <ProjectSection
          number="01"
          title="Project Overview"
        >
          <p>
            This project focuses on analysing real-world Uber trip data to
            uncover useful patterns, customer behaviour, and operational
            insights. The main goal was to understand what is happening
            in the data and answer practical business questions through
            Exploratory Data Analysis.
          </p>

          <p>
            The analysis covers data cleaning, preprocessing, feature
            engineering, exploratory analysis, and visualization to turn
            raw trip records into meaningful insights.
          </p>
        </ProjectSection>

        {/* ================= BUSINESS OBJECTIVES ================= */}
        <ProjectSection
          number="02"
          title="Key Business Objectives"
        >
          <p>
            The analysis was performed around a set of practical questions
            that can help understand Uber's booking behaviour and demand
            patterns.
          </p>

          <div className="mt-6 space-y-4">
            <Question
              number="01"
              title="Top Booking Category"
              text="In which category do people book the most Uber rides — Business or Personal?"
            />

            <Question
              number="02"
              title="Primary Purpose"
              text="For which purpose do people book Uber rides the most?"
            />

            <Question
              number="03"
              title="Peak Hours"
              text="At what time do people book Uber rides the most?"
            />

            <Question
              number="04"
              title="Low-Demand Months"
              text="In which months do people book Uber rides less frequently?"
            />

            <Question
              number="05"
              title="Peak Days"
              text="On which days of the week do people book Uber rides the most?"
            />

            <Question
              number="06"
              title="Average Trip Distance"
              text="How many miles do people usually book an Uber ride for?"
            />
          </div>
        </ProjectSection>

        {/* ================= IMPORT LIBRARIES ================= */}
        <ProjectSection
          number="03"
          title="Import Libraries"
        >
          <p>
            Python libraries were used throughout the project for data
            manipulation, numerical operations, analysis, and visualization.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoCard
              title="Pandas"
              description="Used for loading, cleaning, transforming, and analysing tabular data."
            />

            <InfoCard
              title="NumPy"
              description="Used for numerical operations and working with data efficiently."
            />

            <InfoCard
              title="Matplotlib"
              description="Used for creating different types of data visualizations."
            />

            <InfoCard
              title="Seaborn"
              description="Used to create statistical and analytical visualizations."
            />
          </div>
        </ProjectSection>

        {/* ================= DATA PREPROCESSING ================= */}
        <ProjectSection
          number="04"
          title="Data Preprocessing"
        >
          <p>
            Before starting the analysis, the dataset was inspected and
            prepared so that the data could be used reliably for further
            analysis.
          </p>

          <ul className="mt-6 space-y-3">
            <Bullet text="Inspected the dataset structure and data types." />
            <Bullet text="Checked for missing values and handled them appropriately." />
            <Bullet text="Identified duplicate or inconsistent records." />
            <Bullet text="Converted columns into appropriate data types." />
            <Bullet text="Checked the data for possible outliers and unusual values." />
          </ul>
        </ProjectSection>

        {/* ================= FEATURE ENGINEERING ================= */}
        <ProjectSection
          number="05"
          title="Feature Engineering"
        >
          <p>
            The original dataset contained date and time information that
            could be transformed into more useful features for analysis.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoCard
              title="Date-Time Extraction"
              description="Extracted useful information such as hour, day, month, and day of the week from date-time values."
            />

            <InfoCard
              title="Trip Distance"
              description="Analysed mileage information to understand typical and unusual trip distances."
            />

            <InfoCard
              title="Booking Category"
              description="Compared Business and Personal booking patterns."
            />

            <InfoCard
              title="Purpose"
              description="Used trip purpose information to understand why customers book rides."
            />
          </div>
        </ProjectSection>

        {/* ================= DATA VISUALIZATION ================= */}
        <ProjectSection
          number="06"
          title="Data Visualization & Analysis"
        >
          <p>
            Different visualizations were used to understand relationships,
            distributions, and trends within the Uber trip data.
          </p>

          <div className="mt-8 space-y-5">
            <AnalysisPoint
              title="Booking Category"
              text="Compared the number of rides across different booking categories to understand the dominant booking type."
            />

            <AnalysisPoint
              title="Ride Purpose"
              text="Analysed trip purposes to identify the most common reasons behind Uber bookings."
            />

            <AnalysisPoint
              title="Peak Hours"
              text="Examined booking times to identify the hours when Uber demand is highest."
            />

            <AnalysisPoint
              title="Monthly Trends"
              text="Compared monthly booking activity to identify periods of higher and lower demand."
            />

            <AnalysisPoint
              title="Weekly Trends"
              text="Analysed booking activity across different days of the week."
            />

            <AnalysisPoint
              title="Trip Distance"
              text="Studied trip mileage to understand how far customers typically travel."
            />
          </div>
        </ProjectSection>

        {/* ================= FINAL CONCLUSION ================= */}
        <ProjectSection
          number="07"
          title="Final Project Conclusion"
        >
          <p>
            The analysis helped convert raw Uber trip records into a clearer
            picture of customer behaviour and ride demand. By combining data
            preprocessing, feature engineering, and visualization, different
            patterns could be identified across time, booking categories,
            purposes, and trip distances.
          </p>

          <p>
            The project also helped demonstrate how exploratory data analysis
            can be used to answer practical business questions before moving
            towards more advanced analytics or machine learning solutions.
          </p>
       
        </ProjectSection>

        {/* ================= SKILLS ================= */}
        <ProjectSection
          number="08"
          title="Skills Demonstrated"
        >
          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "Pandas",
              "NumPy",
              "Data Cleaning",
              "Exploratory Data Analysis",
              "Feature Engineering",
              "Data Visualization",
              "Matplotlib",
              "Seaborn",
              "Business Analysis",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border border-[var(--color-border)]
                  bg-[var(--color-card)]
                  px-4 py-2
                  text-sm
                  text-[var(--color-text-secondary)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[var(--color-primary)]
                  hover:text-[var(--color-primary)]
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </ProjectSection>

        {/* ================= GITHUB ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="
            mt-16
            rounded-2xl
            border border-[var(--color-border)]
            bg-[var(--color-card)]
            p-8
            text-center
            sm:p-10
          "
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Source Code
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[var(--color-text-primary)]">
            Explore the complete project
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-[var(--color-text-secondary)]">
            View the complete notebook, analysis, visualizations, and
            implementation on GitHub.
          </p>

          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[var(--color-primary)]
              px-7 py-3.5
              font-medium
              text-white
              transition-colors duration-300
              hover:bg-[var(--color-primary-hover)]
            "
          >
<a href="https://github.com/javedwdevlabs/EDA-Analysis/tree/main/UBER" target="_blank" rel="noopener noreferrer">
  View on GitHub
</a>            <span>↗</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}


/* =====================================================
   Reusable Section
===================================================== */

function ProjectSection({ number, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="border-b border-[var(--color-border)] py-12 sm:py-16"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">

        {/* Number */}
        <div className="shrink-0">
          <span className="text-sm font-medium text-[var(--color-primary)]">
            {number}
          </span>
        </div>

        {/* Content */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
            {title}
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            {children}
          </div>
        </div>

      </div>
    </motion.div>
  );
}


/* =====================================================
   Question
===================================================== */

function Question({ number, title, text }) {
  return (
    <div
      className="
        rounded-xl
        border border-[var(--color-border)]
        bg-[var(--color-card)]
        p-5
        transition-all duration-300
        hover:border-[var(--color-primary)]
      "
    >
      <div className="flex gap-4">

        <span className="shrink-0 text-sm font-medium text-[var(--color-primary)]">
          {number}
        </span>

        <div>
          <h3 className="font-semibold text-[var(--color-text-primary)]">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
            {text}
          </p>
        </div>

      </div>
    </div>
  );
}


/* =====================================================
   Info Card
===================================================== */

function InfoCard({ title, description }) {
  return (
    <div
      className="
        rounded-xl
        border border-[var(--color-border)]
        bg-[var(--color-card)]
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--color-primary)]
      "
    >
      <h3 className="font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
        {description}
      </p>
    </div>
  );
}


/* =====================================================
   Bullet
===================================================== */

function Bullet({ text }) {
  return (
    <li className="flex gap-3">
      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />

      <span>{text}</span>
    </li>
  );
}


/* =====================================================
   Analysis Point
===================================================== */

function AnalysisPoint({ title, text }) {
  return (
    <div className="border-l-2 border-[var(--color-primary)] pl-5">
      <h3 className="font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
        {text}
      </p>
    </div>
  );
}

export default UBER_EDA;
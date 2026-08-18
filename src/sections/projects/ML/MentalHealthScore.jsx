import { motion } from "motion/react";

function MentalHealthScore() {
  return (
    <section className="min-h-screen py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Machine Learning · Regression
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl">
            Mental Wellness Assessment
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
            A machine learning project that predicts a student's mental health
            score using social media habits, lifestyle patterns, study time,
            sleep, physical activity, and stress level.
          </p>
        </motion.div>


        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 border-y border-[var(--color-border)] py-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-primary)]">
            Project Overview
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
            What does this project do?
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[var(--color-text-secondary)]">
            The project uses student lifestyle and digital behaviour data to
            estimate a continuous Mental Health Score. Since the target is a
            numerical value, the problem is treated as a regression task.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-[var(--color-text-secondary)]">
            The goal is not to diagnose mental health conditions, but to
            understand how different behavioural and lifestyle factors relate
            to the predicted score.
          </p>
        </motion.div>


        {/* Dataset */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-primary)]">
            Dataset
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
            What data was used?
          </h2>

          <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
            The dataset contains around 5,000 student records with information
            about demographics, digital usage, study habits, sleep, physical
            activity, and stress.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Age",
              "Gender",
              "Country",
              "Daily Usage",
              "Daily Unlocks",
              "Study Hours",
              "Sleep Hours",
              "Physical Activity",
              "Stress Level",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border border-[var(--color-border)]
                  bg-[var(--color-card)]
                  px-4 py-2
                  text-sm
                  text-[var(--color-text-secondary)]
                  transition-all duration-300
                  hover:border-[var(--color-primary)]
                  hover:text-[var(--color-primary)]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>


        {/* Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="border-y border-[var(--color-border)] py-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-primary)]">
            Machine Learning
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
            Building the prediction model
          </h2>

          <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
            After preprocessing the data and preparing the relevant features,
            different modelling and optimization steps were explored to find
            a reliable model for predicting the Mental Health Score.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="border border-[var(--color-border)] bg-[var(--color-card)] p-5">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Problem
              </p>
              <h3 className="mt-2 font-semibold text-[var(--color-text-primary)]">
                Regression
              </h3>
            </div>

            <div className="border border-[var(--color-border)] bg-[var(--color-card)] p-5">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Target
              </p>
              <h3 className="mt-2 font-semibold text-[var(--color-text-primary)]">
                Mental Health Score
              </h3>
            </div>

            <div className="border border-[var(--color-border)] bg-[var(--color-card)] p-5">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Final Model
              </p>
              <h3 className="mt-2 font-semibold text-[var(--color-text-primary)]">
                Random Forest
              </h3>
            </div>
          </div>
        </motion.div>


        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-primary)]">
            Model Result
          </p>

          <div className="mt-5 flex flex-col gap-6 border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">
                Strong predictive performance
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-[var(--color-text-secondary)]">
                The final Random Forest model achieved an R² score of around
                87%, making it the most reliable model obtained during the
                project.
              </p>
            </div>

            <div className="shrink-0">
              <p className="text-4xl font-bold text-[var(--color-primary)]">
                ~87%
              </p>

              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                R² Score
              </p>
            </div>
          </div>
        </motion.div>


        {/* Diagnostics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="border-y border-[var(--color-border)] py-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-primary)]">
            Model Validation
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
            Understanding the model beyond the score
          </h2>

          <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
            The model was also checked using residual analysis, actual-vs-
            predicted comparisons, train-test performance, feature importance,
            VIF analysis, and manual inspection of prediction errors.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">

            <div className="border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-[var(--color-text-primary)]">
                Cross-Validation
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                Checked whether the model remained stable across different
                data splits.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-[var(--color-text-primary)]">
                Error Analysis
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                Examined the predictions with the largest errors to understand
                where the model struggled.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-[var(--color-text-primary)]">
                Outlier Analysis
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                Statistical checks showed very few unusual observations in
                the important numerical features.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-[var(--color-text-primary)]">
                Feature Analysis
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                Feature importance and multicollinearity checks were used to
                understand the information available to the model.
              </p>
            </div>

          </div>
        </motion.div>


        {/* Why 87% */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-primary)]">
            Key Finding
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
            Why didn't the score improve further?
          </h2>

          <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
            Several experiments were performed, including outlier removal and
            changes to less important features. However, these changes reduced
            the testing performance instead of improving it.
          </p>

          <p className="mt-4 leading-8 text-[var(--color-text-secondary)]">
            The main limitation appears to be the information available in the
            dataset. Mental health is influenced by many factors that are not
            captured here, such as medical history, personal circumstances,
            financial pressure, diet, and social relationships.
          </p>

          <p className="mt-4 leading-8 text-[var(--color-text-secondary)]">
            Because those factors are missing, different students can have
            similar lifestyle patterns but very different reported scores.
            This creates a natural limit on how accurately the model can
            predict the target.
          </p>
        </motion.div>


        {/* Final Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="border-t border-[var(--color-border)] py-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-primary)]">
            Final Conclusion
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
            What this project demonstrates
          </h2>

          <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
            This project shows how real-world behavioural data can be used to
            build a regression model, evaluate its performance, investigate
            prediction errors, and understand the limitations of the data
            itself.
          </p>

          <p className="mt-4 leading-8 text-[var(--color-text-secondary)]">
            The Random Forest model with an R² of around 87% remains the final
            model because further modifications did not produce better results.
          </p>
        </motion.div>


        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 flex justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex items-center gap-2
              rounded-lg
              bg-[var(--color-primary)]
              px-7 py-3.5
              font-medium text-white
              transition-all duration-300
              hover:bg-[var(--color-primary-hover)]
            "
          >
            View Project on GitHub
            <span>→</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default MentalHealthScore;
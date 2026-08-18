import { useEffect, useState } from "react";
import { motion } from "motion/react";
import profileImage from "../assets/hero/profile.png";
import { Link } from "react-router-dom";

function Hero() {
  const words = [
    "Python",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
  ];

const [wordIndex, setWordIndex] = useState(0);
const [displayText, setDisplayText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentWord = words[wordIndex];

  let timeout;

  if (!isDeleting && displayText.length < currentWord.length) {
    // Typing: one character at a time
    timeout = setTimeout(() => {
      setDisplayText(currentWord.slice(0, displayText.length + 1));
    }, 120);
  } else if (!isDeleting && displayText === currentWord) {
    // Pause after completing the word
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, 1500);
  } else if (isDeleting && displayText.length > 0) {
    // Deleting: one character at a time
    timeout = setTimeout(() => {
      setDisplayText(currentWord.slice(0, displayText.length - 1));
    }, 70);
  } else if (isDeleting && displayText === "") {
    // Move to next word
    setIsDeleting(false);
    setWordIndex((prev) => (prev + 1) % words.length);
  }

  return () => clearTimeout(timeout);
}, [displayText, isDeleting, wordIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl order-2 lg:order-1"
          >
            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 flex min-h-7 items-center text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]"
            >
              <span>{displayText}</span>

              <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-[var(--color-primary)]" />
            </motion.div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-6xl md:text-7xl">
              Turning Data Into

              <span className="block text-[var(--color-primary)]">
                Meaningful Insights.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] md:text-lg">
              I'm Javed Khan, a Data Scientist focused on data analysis,
              statistics, and machine learning. I enjoy transforming raw data
              into insights and building practical solutions for real-world
              problems.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-[var(--color-primary-hover)]"
              >
              <Link to={'/all-projects'}>  View Projects</Link>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg border border-[var(--color-border)] px-6 py-3 font-medium text-[var(--color-text-primary)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto flex w-full max-w-md justify-center order-1 lg:order-2"
          >
            {/* Background Circle */}
            <div className="absolute h-72 w-72 rounded-full bg-[var(--color-primary)]/10 blur-3xl md:h-96 md:w-96" />

            {/* Profile Image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="h-64 w-64 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-card)] p-2 shadow-2xl shadow-blue-500/10 sm:h-72 sm:w-72 md:h-80 md:w-80">
                <img
                  src={profileImage}
                  alt="Javed Khan"
                  className="h-full w-full rounded-full object-cover object-[center_20%]"
                />
              </div>
            </motion.div>

            {/* ML / DL Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute right-0 top-8 z-20 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 shadow-lg shadow-blue-500/5"
            >
              <p className="text-xs text-[var(--color-text-secondary)]">
                Focus
              </p>

              <p className="mt-1 font-semibold text-[var(--color-primary)]">
                ML / DL
              </p>
            </motion.div>

            {/* Data Science / AI Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="absolute bottom-8 left-0 z-20 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 shadow-lg shadow-blue-500/5"
            >
              <p className="text-xs text-[var(--color-text-secondary)]">
                Exploring
              </p>

              <p className="mt-1 font-semibold text-[var(--color-primary)]">
                Data Science · AI
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
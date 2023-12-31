import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import style from "./styles/about.module.css";
import { textVariant, slideIn } from "../utils/motion";
import mypicture from "../assets/mypicture.jpg";

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      Who am I?
    </motion.h1>
    <div className={style.content}>
      <motion.div variants={slideIn("left", "", 0, 1)} className={style.para}>
        <p className={style.text}>
          My name is{" "}
          <a
            href="https://www.linkedin.com/in/ronny-power-fullstack/"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            Ronny PowWWWers
          </a>{" "}
          and I am a passionate software engineer specializing in delivering
          state-of-the-art software solutions in JavaScript, C#, PHP, WordPress,
          Drupal, etc. I love Math, Coding and Swimming.
        </p>
        <p className={style.text}>
          I&apos;m a proud graduate of Boston University, where I&apos;ve been
          working as a full-stack developer. My journey here in Abilene
          wasn&apos;t straightforward - the challenges of COVID-19 and our
          political landscape redirected me toward my true passion.
        </p>
        <p className={style.text}>
          As a fluent English speaker, my communication skills are impeccable,
          enabling effective collaboration and seamless teamwork. With an
          unwavering commitment to integrity, I consistently uphold the highest
          standards of professionalism.
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("bottom", "", 0, 1)}
        className={style.img_container}
      >
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Ronny Powers" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, "about", "");

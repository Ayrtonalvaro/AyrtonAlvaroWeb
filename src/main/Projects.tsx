import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react'
import {
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiJavascript,
} from 'react-icons/si';
import TitleSection from '../components/TitleSection';
import React from 'react';
const GridProjects = React.lazy(() => import('../components/GridProjects'))

const Projects = () => {
  const show = {
    opacity: 1,
    display: 'block',
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      id="proyects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="mt-5 container mx-auto">
        <TitleSection titleSection={'Proyectos'} />
        <div className="flex justify-center mt-5">
          {isVisible && (
            <motion.button
              className="text-2xl dark:text-white   dark:from-cyan-100 dark:to-cyan-200 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 shadow-lg shadow-slate-500/50 dark:shadow-cyan-400 rounded-md w-24"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVisible(!isVisible)}
            >
              Ocultar
            </motion.button>
          )}
          {!isVisible && (
            <motion.button
              className="text-2xl dark:text-white   dark:from-cyan-100 dark:to-cyan-200 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 shadow-lg shadow-slate-500/50 dark:shadow-cyan-400 rounded-md w-24"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVisible(!isVisible)}
            >
              Mostrar
            </motion.button>
          )}
        </div>
        <motion.div animate={isVisible ? show : hide}>
          <Suspense fallback={<div />}>
            <div className="max-2xl:flex 2xl:flex 2xl:justify-center  max-2xl:justify-center gap-5 mt-5 dark:text-slate-300 ">
              <SiReact className="max-sm:text-4xl text-5xl" />
              <SiJavascript className="max-sm:text-4xl text-5xl " />
              <SiTailwindcss className="max-sm:text-4xl text-5xl " />
              <SiTypescript className="max-sm:text-4xl text-5xl " />
            </div>
            <GridProjects />
          </Suspense>
        </motion.div>
      </div>
    </motion.div>
  )
};

export default Projects;

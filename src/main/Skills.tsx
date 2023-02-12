
import { motion } from 'framer-motion';
import SkillsGrid from '../components/SkillsGrid';

const Skills = () => {
  return (
    <div className="2xl:absolute 2xl:top-0 2xl:right-72">
      <h2 className="dark:text-cyan-500 text-blue-600 text-center max-sm:text-5xl text-6xl   pt-10 2xl:hidden z-1">
        Skills
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <SkillsGrid />
      </motion.div>
    </div>
  )
};

export default Skills;

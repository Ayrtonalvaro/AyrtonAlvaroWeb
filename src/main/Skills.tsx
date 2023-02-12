
import { motion } from 'framer-motion';
import SkillsGrid from '../components/SkillsGrid';

const Skills = () => {
  return (
    <div className="2xl:absolute 2xl:top-0 2xl:right-72">
      <motion.div
        className="z-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="dark:text-cyan-500 text-blue-600 text-center max-sm:text-5xl text-6xl   pt-10 2xl:hidden ">
          Skills
        </h2>
        <SkillsGrid />
      </motion.div>
    </div>
  );
};

export default Skills;

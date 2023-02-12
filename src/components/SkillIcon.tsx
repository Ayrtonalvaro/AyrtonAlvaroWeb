import { motion } from 'framer-motion';

const SkillIcon = ({
  linkSkill,
  scrSkill,
}: {
  linkSkill: string;
  scrSkill: string;
}) => {
  return (
    <div className="flex justify-center ">
      <motion.a
        whileHover={{ scale: 1.2 }}
        href={linkSkill}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="max-sm:w-16 md:w-20  lg:w-28 2xl:w-24  "
          src={scrSkill}
          alt="Skill image icon"
        />
      </motion.a>
    </div>
  );
};

export default SkillIcon;

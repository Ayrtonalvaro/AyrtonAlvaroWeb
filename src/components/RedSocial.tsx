import { motion } from 'framer-motion';

const RedSocial = ({
  redSocial,
  redSocialLink,
}: {
  redSocial: string;
  redSocialLink: string;
}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      href={`${redSocialLink}`}
      target="_blank"
      rel="noreferrer"
    >
      <i
        className={`fa-brands ${redSocial} text-4xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-slate-500 dark:to-cyan-500 text-blue-600   transition ease-in-out delay-100  `}
      ></i>
    </motion.a>
  );
};

export default RedSocial;

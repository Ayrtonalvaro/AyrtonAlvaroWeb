import { useState } from 'react';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import RedSocial from '../components/RedSocial';
import { user } from '../data.json';
import { Person } from '../interface/Person';

const AbouteMe = () => {
  const [userData] = useState<Person[]>(user);
  const [value] = useState<number>(0);
  const { name, profession, linksSocial, description } = userData[value];
  const gitHub: string = 'fa-github';
  const linkedIn: string = 'fa-linkedin-in';
  const instagram: string = 'fa-instagram';

  return (
    <div
      className="container mx-auto 2xl:pt-36 max-sm:pt-28 md:pt-28 "
      id="sobremi"
    >
      <motion.div
        className="z-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="text-start  ">
          <h4 className="text-3xl max-sm:text-2xl md:text-center 2xl:text-start font-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-slate-50 dark:to-slate-400  max-sm:text-center  ">
            Bienvenido a mi portfolio
          </h4>
          <h1 className="max-sm:text-5xl md:text-center 2xl:text-start max-sm:text-center text-7xl font-black mt-2 dark:text-white">
            Mi nombre es{' '}
            <Typed
              className="dark:text-cyan-400 text-blue-600 max-sm:text-5xl"
              strings={[name]}
              typeSpeed={120}
            />
          </h1>
          <p className="max-sm:text-xl  md:text-center max-sm:mt-2 2xl:text-start max-sm:text-center text-4xl mt-5 dark:text-slate-300  font-semibold ">
            {profession}
          </p>
          <div className="flex md:justify-center max-sm:justify-center max-sm:gap-5 max-sm:mt-4 2xl:justify-start gap-5 mt-5">
            <RedSocial redSocial={gitHub} redSocialLink={linksSocial.gitHub} />
            <RedSocial
              redSocial={linkedIn}
              redSocialLink={linksSocial.linkedIn}
            />
            <RedSocial
              redSocial={instagram}
              redSocialLink={linksSocial.instagram}
            />
          </div>
        </div>
        <div className="md:justify-center md:flex 2xl:justify-start">
          <p className="mt-5 max-sm:p-2 max-sm:text-center max-sm:text-lg  md:w-[600px] text-xl dark:text-slate-300 ">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AbouteMe;

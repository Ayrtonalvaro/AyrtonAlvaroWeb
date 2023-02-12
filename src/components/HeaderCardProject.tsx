import { SiGithub } from 'react-icons/si';
import { MdOutlineOpenInNew } from 'react-icons/md';

const HeaderCardProject = ({
  titleProject,
  linkGitHub,
  linkDeploy,
}: {
  titleProject:string;
  linkGitHub:string;
  linkDeploy:string;
}) => {
  return (
    <div className="flex item-center justify-around mt-5 ">
      <h2 className="text-4xl mb-5  dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-cyan-50 hover:text-blue-600 dark:to-cyan-300 font-medium cursor-pointer ">
        {titleProject}
      </h2>
      <div className="flex gap-5">
        {!linkGitHub && (
          <SiGithub className=" text-4xl cursor-pointer text-white hover:text-dark   hover:duration-600" />
        )}
        {linkGitHub && (
          <a href={linkGitHub} target="_blank" rel="noreferrer">
            <SiGithub className=" text-4xl cursor-pointer dark:text-white hover:dark:text-cyan-400 hover:text-black hover:duration-50" />
          </a>
        )}
        {linkDeploy && (
          <a href={linkDeploy} target="_blank" rel="noreferrer">
            <MdOutlineOpenInNew className=" text-4xl cursor-pointer dark:text-white hover:text-black dark:hover:text-cyan-400 hover:duration-600" />
          </a>
        )}
      </div>
    </div>
  );
};

export default HeaderCardProject;

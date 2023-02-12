import React from 'react';
import Carousell from './Carousell';
import HeaderCardProject from './HeaderCardProject';
import { imageProject } from '../interface/ImageProject';

const ProjectCard = ({
  titleProject,
  imagesProject,
  linkGitHub,
  linkDeploy,
}: {
  titleProject: string;
  imagesProject: imageProject[];
  linkDeploy: string;
  linkGitHub: string;
}) => {

  return (
    <div>
      <div className="    lg:dark:grayscale lg:dark:hover:grayscale-0 duration-500 hover:text-blue-600">
        <HeaderCardProject
          titleProject={titleProject}
          linkGitHub={linkGitHub}
          linkDeploy={linkDeploy}
        />
        <Carousell imagesProject={imagesProject} />
      </div>
    </div>
  );
};

export default ProjectCard;

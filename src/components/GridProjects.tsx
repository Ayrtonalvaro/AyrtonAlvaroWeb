import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data.json'
import { imageProject } from '../interface/ImageProject'
import img1Divifilms from '../assets/Projects/Divifilms/tinyimg1-diviFilms.jpg'
import img2Divifilms from '../assets/Projects/Divifilms/tinyimg2-diviFilms.jpg'
import img3Divifilms from '../assets/Projects/Divifilms/tinyimg3-diviFilms.jpg'
import img4Divifilms from '../assets/Projects/Divifilms/tinyimg4-diviFilms.jpg'

import img1EccomerceSneakers from '../assets/Projects/Eccomerce-product/tinyimg1-sneakers.jpg'
import img2EccomerceSneakers from '../assets/Projects/Eccomerce-product/tinyimg2-sneakers.jpg'

import img1Eshop from '../assets/Projects/Eshop/tinyimg1-eshop.jpg'
import img2Eshop from '../assets/Projects/Eshop/tinyimg2-eshop.jpg'
import img3Eshop from '../assets/Projects/Eshop/tinyimg3-eshop.jpg'
import img4Eshop from '../assets/Projects/Eshop/tinyimg4-eshop.jpg'

import img1RickAndMorty from '../assets/Projects/Rick and morty/tinyimg1-rickandmorty.jpg'
import img2RickAndMorty from '../assets/Projects/Rick and morty/tinyimg2-rickandmorty.jpg'
import img3RickAndMorty from '../assets/Projects/Rick and morty/tinyimg3-rickandmorty.jpg'

import img1SpaceTourims from '../assets/Projects/Space tourims/tinyimg1.jpg'
import img2SpaceTourims from '../assets/Projects/Space tourims/tinyimg2.jpg'
import img3SpaceTourims from '../assets/Projects/Space tourims/tinyimg3.jpg'

import img1SupermarkList from '../assets/Projects/SupermarList/tinyimg1-supermark.jpg'
import img3SupermarkList from '../assets/Projects/SupermarList/tinyimg3-supermark.jpg'
import img4SupermarkList from '../assets/Projects/SupermarList/tinyimg4-supermark.jpg'

const GridProjects = () => {
  const [projectDiviFilm] = useState(projects[0])
  const [projectSpaceTourism] = useState(projects[1])
  const [projectEShop] = useState(projects[2])
  const [projectSupermarkList] = useState(projects[3])
  const [projectRickAndMorty] = useState(projects[4])
  const [projectSnkearsEccomerce] = useState(projects[5])

  const imagenesDiviFilms: imageProject[] = [
    { id: 1, src: img1Divifilms },
    { id: 2, src: img2Divifilms },
    { id: 3, src: img3Divifilms },
    { id: 4, src: img4Divifilms }
  ]

  const imagenesSpacetourism: imageProject[] = [
    { id: 1, src: img1SpaceTourims },
    { id: 2, src: img2SpaceTourims },
    { id: 3, src: img3SpaceTourims }
  ]

  const imagenesSupermarklist: imageProject[] = [
    { id: 1, src: img1SupermarkList },
    { id: 3, src: img3SupermarkList },
    { id: 4, src: img4SupermarkList }
  ]

  const imagenesEccomerece: imageProject[] = [
    { id: 1, src: img1Eshop },
    { id: 2, src: img2Eshop },
    { id: 3, src: img3Eshop },
    { id: 4, src: img4Eshop }
  ]

  const imagenesRickAndMorty: imageProject[] = [
    { id: 1, src: img1RickAndMorty },
    { id: 2, src: img2RickAndMorty },
    { id: 3, src: img3RickAndMorty }
  ]

  const imagenesEccomerceSneakers: imageProject[] = [
    { id: 1, src: img1EccomerceSneakers },
    { id: 2, src: img2EccomerceSneakers }
  ]
  return (
    <div>
      <div className="xl:grid xl:grid-cols-2 xl:gap-5 xl:p-10">
        <ProjectCard
          titleProject={projectDiviFilm.nameProject}
          linkGitHub={projectDiviFilm.linkGitHub}
          linkDeploy={projectDiviFilm.linkDeploy}
          imagesProject={imagenesDiviFilms}
        />
        <ProjectCard
          titleProject={projectSpaceTourism.nameProject}
          linkGitHub={projectSpaceTourism.linkGitHub}
          linkDeploy={projectSpaceTourism.linkDeploy}
          imagesProject={imagenesSpacetourism}
        />
        <ProjectCard
          titleProject={projectSupermarkList.nameProject}
          linkGitHub={projectSupermarkList.linkGitHub}
          linkDeploy={projectSupermarkList.linkDeploy}
          imagesProject={imagenesSupermarklist}
        />
        <ProjectCard
          titleProject={projectEShop.nameProject}
          linkGitHub={projectEShop.linkGitHub}
          linkDeploy={projectEShop.linkDeploy}
          imagesProject={imagenesEccomerece}
        />
        <ProjectCard
          titleProject={projectRickAndMorty.nameProject}
          linkGitHub={projectRickAndMorty.linkGitHub}
          linkDeploy={projectRickAndMorty.linkDeploy}
          imagesProject={imagenesRickAndMorty}
        />
        <ProjectCard
          titleProject={projectSnkearsEccomerce.nameProject}
          linkGitHub={projectSnkearsEccomerce.linkGitHub}
          linkDeploy={projectSnkearsEccomerce.linkDeploy}
          imagesProject={imagenesEccomerceSneakers}
        />
      </div>
    </div>
  )
}

export default GridProjects

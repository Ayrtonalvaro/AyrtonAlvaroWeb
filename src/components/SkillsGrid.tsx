import SkillIcon from './SkillIcon'
import bootstrap from '../assets/SkillsIcon/tinybootsratp.png'
import css from '../assets/SkillsIcon/tinycss.png'
import java from '../assets/SkillsIcon/tinyjava.png'
import javascript from '../assets/SkillsIcon/tinyjavascript.png'
import react from '../assets/SkillsIcon/tinyreact.png'
import spring from '../assets/SkillsIcon/tinyspring.png'
import ts from '../assets/SkillsIcon/tinyts.png'
import tailwind from '../assets/SkillsIcon/tinytailwind.png'

const SkillsGrid = () => {
  return (
    <div>
      <div className="mt-5 md:mt-10 2xl:mt-36">
        <div className="max-xl:flex  max-xl:items-center max-xl:justify-center max-xl:gap-5 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-5">
          <SkillIcon scrSkill={tailwind} linkSkill="https://tailwindcss.com/" />
        </div>
        <div className="max-2xl:flex xl:gap-10 max-2xl:items-center max-2xl:justify-center max-xl:gap-5 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-5">
          <SkillIcon
            scrSkill={bootstrap}
            linkSkill="https://getbootstrap.com/"
          />
          <SkillIcon
            scrSkill={css}
            linkSkill="https://developer.mozilla.org/es/docs/Web/CSS"
          />
          <SkillIcon
            scrSkill={ts}
            linkSkill="https://www.typescriptlang.org/"
          />
        </div>
        <div className="max-xl:flex xl:flex xl:items-center xl:justify-center xl:gap-10 max-xl:items-center max-xl:justify-center max-xl:gap-5 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-5">
          <SkillIcon scrSkill={java} linkSkill="https://www.java.com/es/" />
          <SkillIcon
            scrSkill={javascript}
            linkSkill="https://www.javascript.com/"
          />
          <SkillIcon scrSkill={react} linkSkill="https://es.reactjs.org/" />
        </div>
        <div className="max-xl:flex  max-xl:items-center max-xl:justify-center 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-5">
          <SkillIcon scrSkill={spring} linkSkill="https://spring.io/" />
        </div>
      </div>
    </div>
  )
}

export default SkillsGrid

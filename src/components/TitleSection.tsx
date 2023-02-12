import React from 'react'

const TitleSection = ({ titleSection }: { titleSection: string }) => {
  return (
    <div>
      <h2 className="dark:text-cyan-400 text-blue-600 mt-5  text-center font-semibold max-sm:text-5xl text-6xl   ">
        {titleSection}
      </h2>
    </div>
  )
}

export default TitleSection

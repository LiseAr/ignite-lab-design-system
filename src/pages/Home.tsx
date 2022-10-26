import React from 'react'
import { SceneBg } from '../svgs/SceneBg'
import { UniverseBg } from '../svgs/UniverseBg'

const Home = () => {
  return (
    <div className="bg-gray-900 w-full h-full">
      {/* <div className="flex align-center justify-center"> */}
        <UniverseBg />
      {/* </div> */}

      <div className="absolute bottom-[30%] right-[5%]">
        <SceneBg />
      </div>
    </div>
  )
}

export { Home }

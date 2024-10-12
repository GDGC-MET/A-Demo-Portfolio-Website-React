import React from 'react'
import {ABOUT} from "../constants"
const About = () => {
  return (
    <div className="container mx-auto" id="about">
      <h2 className='mt-20 text-center text-4xl font-semibold text-slate-100'>About</h2>
      <h3 className='p-4 m-24 text-6xl uppercase lg:text-[12rem] text-slate-100'>{ABOUT.text1}</h3>
      <p className='m-24 pl-4 text-lg leading-loose text-slate-100'>{ABOUT.text2}</p>
    </div>
  )
}

export default About

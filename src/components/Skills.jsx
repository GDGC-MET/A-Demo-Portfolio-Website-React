import React from 'react'
import { SKILLS } from '../constants'

export default function Skills() {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className='mt-20 text-center text-4xl font-semibold text-slate-100'>Skills</h2>
      <div className='grid grid-cols-2 gap-8 m-24 md:grid-cols-3 lg:grid-cols-3'>
        {SKILLS.map((skill, index) => (
          <div key={index} className='flex flex-col items-center p-6 bg-black bg-opacity-50 rounded-lg'>
            <div className='mb-4'>
              {skill.icon}
            </div>
            <h3 className='text-xl font-semibold text-slate-100'>{skill.name}</h3>
            <p className='mt-2 text-sm text-slate-300'>{skill.experience}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
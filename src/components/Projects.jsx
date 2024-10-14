import React from 'react'
import { PROJECTS } from '../constants'

export default function Projects() {
  return (
    <div className="container mx-auto" id="projects">
      <h2 className='mt-20 mb-12 text-center text-4xl font-semibold text-slate-100'>Projects</h2>
      <div className='grid grid-cols-1 gap-8 mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='flex flex-col bg-black bg-opacity-50 rounded-lg overflow-hidden'>
            <div className='h-48 overflow-hidden'>
              <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-slate-100 mb-2'>{project.title}</h3>
              <p className='text-sm text-slate-300'>{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
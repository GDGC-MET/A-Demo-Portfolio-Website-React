import React from 'react'
import { ACHIEVEMENT } from '../constants'

export default function Awards() {
  return (
    <div className="container mx-auto" id="award">
      <h2 className='mt-20 mb-12 text-center text-4xl font-semibold text-slate-100'>Award</h2>
      <div className='grid grid-cols-1 gap-8 mx-4'>
        <div className='flex flex-col bg-black bg-opacity-50 rounded-lg overflow-hidden'>
          <div className='p-6'>
            <h3 className='text-2xl font-semibold text-slate-100 mb-2'>{ACHIEVEMENT.title}</h3>
            <h4 className='text-xl font-medium text-slate-200 mb-4'>{ACHIEVEMENT.award}</h4>
            <p className='text-sm text-slate-300'>{ACHIEVEMENT.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
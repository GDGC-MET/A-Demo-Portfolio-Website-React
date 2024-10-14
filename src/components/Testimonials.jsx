import React from 'react'
import { TESTIMONIALS } from '../constants'

export default function Testimonials() {
  return (
    <div className="container mx-auto" id="testimonials">
      <h2 className='mt-20 mb-12 text-center text-4xl font-semibold text-slate-100'>Testimonials</h2>
      <div className='grid grid-cols-1 gap-8 mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className='flex flex-col bg-black bg-opacity-50 rounded-lg overflow-hidden'>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className='w-12 h-12 rounded-full mr-4 object-cover'
                />
                <div>
                  <h3 className='text-lg font-semibold text-slate-100'>{testimonial.name}</h3>
                  <p className='text-sm text-slate-300'>{testimonial.title}</p>
                </div>
              </div>
              <p className='text-sm text-slate-300 italic'>&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
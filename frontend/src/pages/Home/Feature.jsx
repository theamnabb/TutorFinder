import React from 'react'
import {clipboard, Clock, clock,users } from "lucide-react";

const Feature = () => {
  return (
    <>
    <section className='mx-auto max-w-[1140px] px-6 lg:px-12 relative bottom-12'>
        <div className='flex flex-wrap gap-x-4 bg-white rounded-3xl p-8'>
            <div className=' flex flex-col gap-y-2 p-4 rounded-xl max-w-[233px]'>
                <Clock className='text-xl mb-2'/>
                <h5 className='text-sm md:text-sm mb-2 font-bold'>Qualied Instructiors</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Feature
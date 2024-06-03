'use client';

import { signIn } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <>
    Not signed in <br />
    <button className='bg-orange-500 px-3 py-1 m-4 rounded' onClick={()=>signIn()}>Sign in</button>
    </>
  )
}

export default page
import Head from 'next/head'
import { BeakerIcon } from '@heroicons/react/24/solid'

import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Fakebook</title>
      </Head>
      
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
        <h1 className='text-3xl font-bold'>
          Home
        </h1>
      </main>
    </div>
  )
}

export default HomePage
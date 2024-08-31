import { Banner } from '@/components/Banner'
import { FloatingNav } from '@/components/FloatingNav'
import Navbar from '@/components/Navbar'
import MyProjects from '@/components/MyProjects'
import SocialMedia from '@/components/SocialMedia '
import Welcome from '@/components/Welcome'
import { navItems } from '@/data'
import React from 'react'
import Languages from '@/components/Languages'
import Achievement from '@/components/Achievement'
import Works from '@/components/Works'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function page() {
  return (
    <main className='relative bg-black-100 flex-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
        <div className='max-w-7xl w-full'>
          {/* <TracingBeam> */}
          {/* <Navbar/> */}
          {/* <FloatingNav navItems={navItems}/> */}
          {/* <Navbar/> */}
          <SocialMedia/>
          <Welcome/>
          <MyProjects/>
          <Languages/>
          <Works/>
          {/* <Contact/> */}
          <Footer/>
          {/* </TracingBeam> */}
        {/* <Banner/> */}

        </div>
    </main>
  )
}

export default page
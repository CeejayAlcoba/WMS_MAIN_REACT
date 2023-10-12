import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginIndex from './projects/pages/login/pages'
import Navbar from './projects/layouts/navbar/Navbar'
import { BiMenu  } from 'react-icons/bi';
import ResponsiveDrawer from './projects/layouts/sidebar/Sidebar'
import PageLayout from './projects/layouts/PageLayout/PageLayout'

function App() {

  return (
    <>
    
    <PageLayout/>
    {/* <LoginIndex/> */}
    </>
  )
}

export default App

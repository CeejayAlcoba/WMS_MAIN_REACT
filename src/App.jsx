import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginIndex from './projects/pages/login/pages'
import Navbar from './projects/layouts/navbar/Navbar'
import { BiMenu  } from 'react-icons/bi';

function App() {

  return (
    <>
    <Navbar menuIcon={<BiMenu />} title={"Test"}/>
    {/* <LoginIndex/> */}
    </>
  )
}

export default App

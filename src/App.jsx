import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftSidebar from './components/LeftSideBar/LeftSideBar.jsx'
import TopNavBar from "./components/TopNavBar/TopNavBar.jsx";
function App() {

  return (
    <>
        <TopNavBar/>
        <main>
            <section>
                <LeftSidebar/>
            </section>
        </main>
    </>
  )
}

export default App
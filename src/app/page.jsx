'use client'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './styles/style.css'
import './styles/custom.css'

export default function Home() {
  const [activePage, setActivePage] = useState('about')

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        <About isActive={activePage === 'about'} />
        <Skills isActive={activePage === 'skills'} />
        <Resume isActive={activePage === 'resume'} />
        <Portfolio isActive={activePage === 'portfolio'} />
        <Contact isActive={activePage === 'contact'} />
      </div>
    </main>
  )
} 
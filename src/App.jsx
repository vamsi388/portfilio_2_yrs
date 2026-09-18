import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar onContactClick={() => setModalOpen(true)} />
      <main className="wrap">
        <Hero onContactClick={() => setModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Footer />
      </main>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default App
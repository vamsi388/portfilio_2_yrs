import { useRef } from 'react'

function Navbar({ onContactClick }) {
  const navLinksRef = useRef(null)
  const highlightRef = useRef(null)
  const ctaRef = useRef(null)

  function handleLinkEnter(e) {
    const link = e.currentTarget
    const rect = link.getBoundingClientRect()
    const parentRect = navLinksRef.current.getBoundingClientRect()
    highlightRef.current.style.left = rect.left - parentRect.left - 8 + 'px'
    highlightRef.current.style.width = rect.width + 16 + 'px'
    navLinksRef.current.classList.add('active')
  }

  function handleNavLeave() {
    navLinksRef.current.classList.remove('active')
  }

  function handleTilt(e) {
    const el = ctaRef.current
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = ((y / rect.height) - 0.5) * -12
    const ry = ((x / rect.width) - 0.5) * 12
    el.style.transform = `perspective(300px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`
  }

  function resetTilt() {
    ctaRef.current.style.transform = ''
  }

  return (
    <header className="nav">
      <div className="nav-row">
        <div className="nav-mark">
          <span className="chip" aria-hidden="true">
            <span className="chip-face top"></span>
            <span className="chip-face front"></span>
            <span className="chip-face side"></span>
          </span>
          GV / SAP&nbsp;BTP
        </div>
        <ul className="nav-links" ref={navLinksRef} onMouseLeave={handleNavLeave}>
          <span className="nav-highlight" ref={highlightRef}></span>
          <li><a href="#about" onMouseEnter={handleLinkEnter}>About</a></li>
          <li><a href="#skills" onMouseEnter={handleLinkEnter}>Skills</a></li>
          <li><a href="#work" onMouseEnter={handleLinkEnter}>Work</a></li>
          <li><a href="#education" onMouseEnter={handleLinkEnter}>Education</a></li>
        </ul>
        <button
          className="nav-cta"
          type="button"
          ref={ctaRef}
          onClick={onContactClick}
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          Get in touch
        </button>
      </div>
    </header>
  )
}

export default Navbar
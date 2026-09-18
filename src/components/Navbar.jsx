function Navbar({ onContactClick }) {
  return (
    <header className="nav">
      <div className="nav-row">
        <div className="nav-mark">GV / SAP&nbsp;BTP</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
        <button className="nav-cta" type="button" onClick={onContactClick}>
          Get in touch
        </button>
      </div>
    </header>
  )
}

export default Navbar
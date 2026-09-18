import photo from '../assets/photo.png'

function Hero({ onContactClick }) {
  return (
    <section className="hero" id="top" style={{ borderTop: 'none', paddingTop: '88px' }}>
      <div className="hero-top">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="dot"></span>AVAILABLE FOR NEW PROJECTS</div>
          <h1 className="hero-title">
            Gundlapalle Vamsi
            <span className="sub">SAP BTP Full-Stack Developer — CAPM (Node.js) &amp; UI5/Fiori</span>
          </h1>
          <p className="hero-desc">
            Two years building cloud-native extensions on SAP BTP — from CDS data models and
            Node.js event handlers on the backend, to responsive Fiori Elements screens on the
            front end, wired into live S/4HANA systems.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" type="button" onClick={onContactClick}>
              Share a role with me
            </button>
            <a className="btn-ghost" href="tel:+918688342583">+91 86883 42583</a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img className="hero-photo" src={photo} alt="Gundlapalle Vamsi" />
          <div className="hero-photo-tag">
            GUNDLAPALLE VAMSI<span>SAP BTP Developer</span>
          </div>
        </div>
      </div>

      <div className="diagram-panel">
        <div className="diagram-label">
          // typical extension pattern — S/4HANA to Fiori, as shipped in production
        </div>
        <svg className="diagram-svg" viewBox="0 0 920 210" xmlns="http://www.w3.org/2000/svg">
          <rect className="node-box" x="10" y="70" width="150" height="66" rx="4" />
          <text className="diagram-node-label" x="30" y="98">S/4HANA</text>
          <text className="diagram-node-sub" x="30" y="115">On-Premise</text>

          <path className="flow-line d1" d="M160,103 H230" />
          <rect className="node-box" x="230" y="70" width="150" height="66" rx="4" />
          <text className="diagram-node-label" x="250" y="93">Cloud Connector</text>
          <text className="diagram-node-sub" x="250" y="110">+ Destination Svc</text>

          <path className="flow-line d2" d="M380,103 H450" />
          <rect className="node-box accent" x="450" y="55" width="170" height="100" rx="4" />
          <text className="diagram-node-label" x="470" y="83">SAP BTP · CAP</text>
          <text className="diagram-node-sub" x="470" y="100">Node.js event handlers</text>
          <text className="diagram-node-sub" x="470" y="115">XSUAA · Job Scheduler</text>
          <text className="diagram-node-sub" x="470" y="130">Application Logging</text>

          <path className="flow-line d3" d="M620,103 H690" />
          <rect className="node-box" x="690" y="70" width="110" height="66" rx="4" />
          <text className="diagram-node-label" x="708" y="98">OData V4</text>
          <text className="diagram-node-sub" x="708" y="115">REST layer</text>
        </svg>
        <svg className="diagram-svg" viewBox="0 0 920 60" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-6px' }}>
          <text className="diagram-node-sub" x="10" y="20">
            ... consumed by Fiori Elements / freestyle SAPUI5 apps, rendered to the end user
          </text>
        </svg>
      </div>
    </section>
  )
}

export default Hero
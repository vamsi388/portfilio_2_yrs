function About() {
  return (
    <section id="about">
      <div className="section-head">
        <span className="section-num">01</span>
        <h2 className="section-title">About</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            <strong>2 years</strong> of experience as an SAP BTP Full Stack Developer, working across{' '}
            <strong>SAP BTP CAPM (Node.js)</strong> on the backend and <strong>SAP UI5/Fiori</strong> on
            the frontend — building responsive freestyle and Fiori Elements applications that
            consume OData V2/V4 services with smart controls.
          </p>
          <p>
            Comfortable across the full extensibility story: developing OData V4 services with the
            CAP framework, connecting on-premise S/4HANA systems via Cloud Connector and
            Destination Service, and securing everything with XSUAA authentication and
            role-based authorization.
          </p>
          <p>
            Deploys and runs applications on <strong>SAP BTP Cloud Foundry</strong>, working day to
            day in SAP Business Application Studio with Git-based version control in an Agile
            delivery model.
          </p>
        </div>
        <div className="stat-list">
          <div className="stat">
            <div className="stat-value">2 yrs</div>
            <div className="stat-label">SAP BTP full-stack development</div>
          </div>
          <div className="stat">
            <div className="stat-value">2</div>
            <div className="stat-label">Production extensibility projects</div>
          </div>
          <div className="stat">
            <div className="stat-value">V2 / V4</div>
            <div className="stat-label">OData services, both sides of the wire</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
const skillGroups = [
  { title: 'SAP BTP & CAP', items: ['SAP BTP', 'CAP Model', 'Cloud Foundry', 'XSUAA', 'Build Process Automation', 'Business Application Studio'] },
  { title: 'Backend development', items: ['Node.js', 'Express.js', 'JavaScript', 'NPM', 'Event Handlers', 'Actions & Functions'] },
  { title: 'API & integration', items: ['OData V2/V4', 'REST APIs', 'S/4HANA Integration', 'Destination Service', 'SAP APIs'] },
  { title: 'Data & modelling', items: ['SAP CDS Models', 'SAP HANA Cloud', 'Entity Modelling', 'CRUD Operations'] },
  { title: 'Frontend development', items: ['SAP UI5', 'SAP Fiori', 'Fiori Elements', 'HTML5', 'CSS3', 'Responsive UI'] },
  { title: 'Tooling & practice', items: ['BAS', 'VS Code', 'Git / GitHub', 'Unit & API Testing', 'Production Support', 'Agile/Scrum'] },
]

function Skills() {
  return (
    <section id="skills">
      <div className="section-head">
        <span className="section-num">02</span>
        <h2 className="section-title">Skills &amp; technology</h2>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div className="skill-cell" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
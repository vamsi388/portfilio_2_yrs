const projects = [
  {
    name: 'Spare Parts Inventory & Procurement Management',
    type: 'Development',
    context: 'A centralized, cloud-native application on SAP BTP for Mobis, digitizing spare parts procurement, warehouse operations, and inventory tracking across multiple warehouses and service centers, integrated with SAP S/4HANA master data.',
    bullets: [
      'Built the core service layer — designed SAP CDS data models and exposed OData V4 / REST APIs covering inventory transactions, purchase requisitions, purchase orders, goods receipts, warehouse operations, and supplier data.',
      'Wrote the business logic using CAP Before/On/After event handlers to block negative stock, enforce role-based approval rules, and keep inventory and order status in sync after every transaction.',
      'Shipped custom CAP Actions & Functions for stock receipts, issues, transfers, requisition approvals, PO generation, and goods receipt confirmations.',
      'Owned the Fiori/UI5 front end end-to-end — a KPI dashboard, PR/PO management screens, a full Object Page workflow (Draft → Submitted → Pending Approval → Approved/Rejected → Closed) with approval history and related-PO tracking, plus an analytics module for spend, supplier ratings, and status breakdowns.',
      'Solved a real race condition — implemented deferred OData V4 batch groups with CRUD-based item replacement so header and line-item updates on PRs commit atomically instead of colliding on table refresh.',
      'Connected the enterprise side — integrated S/4HANA with BTP via Destination Service for spare parts and supplier master data, and configured XSUAA roles for Warehouse Executives, Procurement Teams, Inventory Managers, and Admins.',
      'Closed the loop on visibility — wired up SAP Alert Notification Service for low-stock, delayed procurement, and failed-transaction alerts, surfaced in a dedicated Alerts dashboard by severity and status.',
      'Deployed to Cloud Foundry via MTA, source controlled with Git.',
    ],
    tech: ['SAP BTP', 'CAP · Node.js', 'HANA Cloud', 'OData V4', 'Fiori / UI5', 'Cloud Foundry', 'XSUAA', 'Alert Notification Service'],
  },
  {
    name: 'Colt Online',
    type: 'Enhancement & Support',
    context: 'An enterprise data-governance platform that manages the flow of data from many sources under one management layer, so it can be governed and reused consistently across applications.',
    bullets: [
      'Built a multi-source ingestion service in JavaScript, reading JSON and XML for a RESTful web service.',
      'Developed REST APIs on Node.js as the backend for the governance and integration platform.',
      'Built the data-source configuration and monitoring screens with HTML5, CSS, and JavaScript, and shipped UI enhancements in an Agile cycle with the client.',
      'Handled analysis, testing, and debugging across the ingestion and governance modules, plus API testing to validate releases quickly.',
      'Worked directly with customers to scope enhancement timelines, and kept architecture diagrams and API docs current.',
    ],
    tech: ['Node.js', 'HTML5', 'CSS', 'JavaScript', 'REST API'],
  },
]

function Experience() {
  return (
    <section id="work">
      <div className="section-head">
        <span className="section-num">03</span>
        <h2 className="section-title">Selected work</h2>
      </div>

      {projects.map((project) => (
        <div className="project" key={project.name}>
          <div className="project-head">
            <div className="project-name">{project.name}</div>
            <div className="project-type">{project.type}</div>
          </div>
          <p className="project-context">{project.context}</p>
          <ul className="project-list">
            {project.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          <div className="tech-row">
            {project.tech.map((tag) => (
              <span className="tech-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience
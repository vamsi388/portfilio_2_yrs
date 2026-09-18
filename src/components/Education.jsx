const education = [
  { degree: 'Master of Computer Application (MCA)', school: 'Rajeev Gandhi Memorial College of Engineering & Technology', date: 'Nov 2022 — May 2024' },
  { degree: 'Bachelor of Science (ECS)', school: 'Sri Ramakrishna Degree (Autonomous) College', date: 'June 2019 — August 2022' },
]

function Education() {
  return (
    <section id="education">
      <div className="section-head">
        <span className="section-num">04</span>
        <h2 className="section-title">Education</h2>
      </div>
      {education.map((edu) => (
        <div className="edu-row" key={edu.degree}>
          <div>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-school">{edu.school}</div>
          </div>
          <div className="edu-date">{edu.date}</div>
        </div>
      ))}
    </section>
  )
}

export default Education
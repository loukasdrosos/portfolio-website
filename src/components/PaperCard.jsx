import "./PaperCard.css"

function PaperCard({ paper }) {
  return (
    <article className="paper-card">
      <div className="paper-icon">
        <span>PDF</span>
      </div>

      <div className="paper-content">
        <p className="paper-date">{paper.date}</p>

        <h3>{paper.title}</h3>

        <p className="paper-summary">
          {paper.summary}
        </p>

        <div className="paper-meta">
          <span>{paper.field}</span>
          <span>{paper.pages}</span>
        </div>

      <a href={paper.link} download>
        Download PDF
      </a>
      </div>
    </article>
  )
}

export default PaperCard
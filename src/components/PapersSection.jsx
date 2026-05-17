import { papers } from "../data/portfolioData"
import PaperCard from "./PaperCard"
import "./PapersSection.css"

function PapersSection() {
  return (
    <section id="papers" className="papers-section">
      <div className="papers-header">
        <p className="section-label">Scientific Papers</p>

        <div>
          <h2>Research and academic work</h2>
          <p>
            A selection of scientific papers and research work that reflect my
            academic background, analytical thinking and interest in technical
            problem solving.
          </p>
        </div>
      </div>

      <div className="papers-list">
        {papers.map((paper) => (
          <PaperCard key={paper.title} paper={paper} />
        ))}
      </div>
    </section>
  )
}

export default PapersSection
import { projects } from '../data/projects.js'
import GhostHeading from './GhostHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Portfolio() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <GhostHeading id="work-title" className="work-ghost">Latest Portfolio</GhostHeading>
      <ul className="tiles">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </ul>
    </section>
  )
}

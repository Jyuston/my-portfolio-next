import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Project } from "contentlayer/generated";

const ProjectCard: React.FC<Project> = (project) => (
  <div className="mb-6">
    <time dateTime={project.date} className="block text-sm text-slate-600">
      {format(parseISO(project.date), "LLLL d, yyyy")}
    </time>
    <h2 className="text-lg">
      <Link href={project.url}>
        <a className="text-blue-700 hover:text-blue-900">{project.title}</a>
      </Link>
    </h2>
  </div>
);

export default ProjectCard;

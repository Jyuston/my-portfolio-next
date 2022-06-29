import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Project } from "contentlayer/generated";

const ProjectCard: React.FC<Project> = (project) => (
  <div className="mb-6">
    <time dateTime={project.date} className="block text-sm text-slate-600">
      {format(parseISO(project.date), "LLLL d, yyyy")}
    </time>

    <div className="flex flex-col items-center">
      <h2 className="text-lg">
        <Link href={project.url}>
          <a className="text-blue-700 hover:text-blue-900">{project.title}</a>
        </Link>
      </h2>

      <div className="flex flex-row">
        {project.tags.map((tag) => (
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;

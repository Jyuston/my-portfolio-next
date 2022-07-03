import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Project } from "contentlayer/generated";
import Tag from "./Tag";

const ProjectCard: React.FC<Project> = ({
  title,
  url,
  description,
  tags,
  links,
  date,
  coverImage,
}) => (
  <Link href={url}>
    <div className="flex flex-col items-start border-2 border-gray-750 rounded-md hover:cursor-pointer p-3">
      <div className="flex">
        <div className="flex flex-col items-start">
          <h2 className="text-md">
            <a>{title}</a>
          </h2>
          <time dateTime={date} className="block text-xs text-slate-600">
            {format(parseISO(date), "LLLL, yyyy")}
          </time>
          <div className="flex flex-row">
            {tags.map((tag) => (
              <Tag key={tag._id} tag={tag} />
            ))}
          </div>
        </div>
      </div>

      <h2>{description}</h2>
    </div>
  </Link>
);

export default ProjectCard;

import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Project } from "contentlayer/generated";
import Tag from "./Tag";

const ProjectCard: React.FC<Project> = ({
  title,
  url,
  description,
  tags,
  date,
  coverImage,
}) => (
  <Link href={url}>
    <div className="flex flex-col items-start border-2 bg-slate-50 rounded-md hover:cursor-pointer p-4">
      <div className="flex flex-col items-start">
        <h2 className="text-md font-medium text-lg">{title}</h2>
        <time dateTime={date} className="block text-xs text-slate-600 pb-2">
          {format(parseISO(date), "LLLL, yyyy")}
        </time>
        <div className="flex flex-row gap-2 my-2 flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag._id} tag={tag} />
          ))}
        </div>
      </div>

      <h2 className="my-4 flex-wrap  ">
        {description}djefchwouiefhewu fhewufh euwifhewi ufhweiufhiu
      </h2>
    </div>
  </Link>
);

export default ProjectCard;

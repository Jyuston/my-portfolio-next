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
    <div className="flex flex-col items-start rounded-md border-2 bg-gradient-to-tr from-violet-500/70 to-fuchsia-500/20 p-4 hover:cursor-pointer">
      <div className="container flex justify-between">
        <div className="container">
          <div className="flex flex-col items-start">
            <h2 className="text-md text-lg font-medium">{title}</h2>
            <time dateTime={date} className="block pb-2 text-sm text-slate-600">
              {format(parseISO(date), "LLLL, yyyy")}
            </time>
            <div className="my-2 flex flex-row flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag._id} tag={tag} />
              ))}
            </div>
          </div>

          <h2 className="my-4 flex-wrap truncate">{description}</h2>
        </div>

        <div className="h-full w-3/4 bg-[url('https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')] object-fill "></div>
      </div>
    </div>
  </Link>
);

export default ProjectCard;

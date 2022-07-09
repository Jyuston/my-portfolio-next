import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Project } from "contentlayer/generated";
import Tag from "./Tag";
import { Transition } from "@headlessui/react";

type ProjectCardProps<Project> = Project & { appear: boolean };

const ProjectCard: React.FC<ProjectCardProps<Project>> = ({
  title,
  url,
  description,
  tags,
  date,
  coverImage,
  appear,
}) => (
  <Transition
    show={true}
    appear={true}
    enter="transition duration-500"
    enterFrom="translate-y-5 opacity-0"
    enterTo="opacity-100"
  >
    <Link href={url}>
      <div className="relative flex h-60 flex-col items-start rounded-md bg-gradient-to-tr from-violet-500 to-fuchsia-500/70 p-4 transition duration-300 hover:-translate-y-2 hover:cursor-pointer hover:drop-shadow-xl">
        <div className="container">
          <div className="flex flex-col items-start">
            <h2 className="text-md text-xl font-medium text-slate-700">
              {title}
            </h2>
            <time dateTime={date} className="text-md block pb-2 text-slate-800">
              {format(parseISO(date), "LLLL, yyyy")}
            </time>
            <div className="my-2 flex flex-row flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag._id} tag={tag} />
              ))}
            </div>
          </div>

          <h2 className="my-4 flex-wrap truncate font-medium text-slate-700">
            {description}
          </h2>
        </div>
        <div className="container absolute left-0 top-0 flex h-full w-1/2 justify-between rounded-l-md bg-white transition hover:w-3/4 hover:duration-500"></div>
      </div>
    </Link>
  </Transition>
);

export default ProjectCard;

{
  /* <div className="h-full w-3/4 bg-[url('https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')] object-fill "></div> */
}

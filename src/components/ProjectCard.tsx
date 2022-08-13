import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Project } from "contentlayer/generated";
import Tag from "./Tag";
import Image from "next/image";
import kayne from "../../public/kanyee.png";

const ProjectCard: React.FC<Project> = ({
  title,
  url,
  description,
  tags,
  date,
  coverImage,
  images,
}) => (
  <Link href={url}>
    <div className="flex flex-col overflow-hidden rounded-md transition duration-200 hover:-translate-y-2 hover:cursor-pointer hover:drop-shadow-xl md:h-60 md:flex-row">
      <div className="aspect-video h-full bg-gradient-to-tr from-violet-500 to-fuchsia-500/70 md:aspect-square">
        <Image
          objectFit="cover"
          width="100%"
          height="100%"
          layout="responsive"
          src={images?.[0]?.src || kayne}
        />
      </div>

      <div className="grow bg-white/70 p-5 md:overflow-hidden">
        <div className="flex flex-col items-start">
          <h2 className="text-md text-xl font-medium text-slate-700">
            {title}
          </h2>
          <time
            dateTime={date}
            className="text-md pb-2 font-mono text-slate-800"
          >
            {format(parseISO(date), "LLLL yyyy")}
          </time>
          <div className="my-2 flex flex-row flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag.name} tag={tag} />
            ))}
          </div>
        </div>
        <h2 className="my-4 truncate font-medium text-slate-700">
          {description}
        </h2>
      </div>
    </div>
  </Link>
);

export default ProjectCard;

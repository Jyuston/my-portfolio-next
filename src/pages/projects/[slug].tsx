import { Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { allProjects, Project } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import LinkComponent from "src/components/Link";
import Link from "next/link";
import Carousel from "src/components/Carousel/Carousel";
import Tag from "src/components/Tag";
import classNames from "src/utils/classNames";

type ProjectPageProps = {
  project: Project;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map((project) => ({
    params: { slug: project._raw.flattenedPath },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = ({
  params,
}) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params!.slug
  );

  if (!project || !project.images) {
    return { notFound: true };
  }

  return {
    props: {
      key: project._id,
      project,
    },
  };
};

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <div className="relative flex flex-col items-center gap-4 py-12">
      <Head>
        <title>Justin Yuen - Projects</title>
      </Head>

      <div className="xl:w-10/12">
        {project.images && project.images.length > 0 && (
          <Carousel images={project.images} />
        )}
      </div>

      <div className="flex flex-col gap-3 rounded-lg bg-slate-50/80 p-10 drop-shadow-xl transition duration-300 marker:mb-6 dark:bg-slate-800/70 md:px-8 xl:w-10/12">
        <Transition
          show={true}
          appear={true}
          enter="transition duration-500"
          enterFrom="translate-y-5 opacity-0"
          enterTo="opacity-100"
        >
          <div className="ml-2 md:ml-4">
            <div>
              <h1 className="mb-4 text-4xl font-bold dark:text-gray-300 md:text-5xl">
                {project.title}
              </h1>
              <time
                dateTime={project.date}
                className="text-md my-8 font-medium text-slate-600 dark:text-gray-300"
              >
                {format(parseISO(project.date), "LLLL d, yyyy")}
              </time>
            </div>

            <div className="my-5 mt-8 flex flex-row flex-wrap gap-2 md:w-3/4">
              {project.tags.map((tag) => (
                <Tag key={tag.name} tag={tag} />
              ))}
            </div>

            <div className="my-5 flex flex-row flex-wrap gap-4 md:w-3/4">
              {project.links.map((link) => (
                <LinkComponent link={link} key={link.url} />
              ))}
            </div>
          </div>
          <article>
            <div
              className="prose mt-16 mb-16 dark:prose-invert md:ml-8 lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: project.body.html }}
            />
          </article>
        </Transition>
      </div>

      <ProjectSelector selectedProject={project}></ProjectSelector>

      {/* Little Menu of all Projects in tablets to pick from each slug route */}
    </div>
  );
};

type ProjectSelectorProps = {
  selectedProject: Project;
};

const ProjectSelector: React.FC<ProjectSelectorProps> = ({
  selectedProject,
}) => {
  return (
    <div
      aria-label="Sidebar"
      className=" absolute top-[58rem] right-44 hidden flex-col  border-l-2 border-indigo-700 px-2 text-center xl:-translate-x-1/3 2xl:flex"
    >
      {allProjects.map((project) => {
        return (
          <Link href={project.url} key={project._id} scroll={false}>
            <a
              key={project._id}
              className={classNames(
                project._id === selectedProject._id
                  ? " text-indigo-700 dark:text-indigo-400"
                  : "text-gray-600 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-indigo-400",
                "flex items-center rounded-md py-2 text-lg font-medium"
              )}
            >
              <ChevronRightIcon
                className={classNames(
                  project._id === selectedProject._id ? "visible" : "invisible",
                  "h-5 w-5"
                )}
              />
              <span className="truncate pl-2">{project.title}</span>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectPage;

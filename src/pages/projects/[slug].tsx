import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Transition } from "@headlessui/react";
import Carousel from "src/components/Carousel/Carousel";
import CarouselItem from "src/components/Carousel/CarouselItem";
import classNames from "src/utils/classNames";
import { ChevronRightIcon } from "@heroicons/react/solid";

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

  if (!project) {
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
    <div className=" flex flex-col justify-center gap-4 py-12">
      <Head>
        <title>Justin Yuen - Projects</title>
      </Head>

      <Link href="/">
        <a className="text-md font-bold uppercase text-gray-500 hover:cursor-pointer hover:text-gray-700">
          Home
        </a>
      </Link>

      <Transition
        show={true}
        appear={true}
        enter="transition duration-500"
        enterFrom="translate-y-5 opacity-0"
        enterTo="opacity-100"
      >
        <div className="flex flex-col gap-3 rounded-lg bg-slate-50/80 p-8 text-start marker:mb-6 md:px-8 xl:w-3/4">
          <article>
            <div className="mb-4">
              <h1 className="mb-2 text-3xl font-bold">{project.title}</h1>
              <time dateTime={project.date} className="text-md text-slate-600">
                {format(parseISO(project.date), "LLLL d, yyyy")}
              </time>
            </div>

            <div
              className="prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: project.body.html }}
            />
          </article>
        </div>
      </Transition>

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
      className=" top-2/5 absolute right-0 hidden flex-col  border-l-2 border-cyan-700 px-2 text-center xl:flex xl:-translate-x-1/3"
    >
      {allProjects.map((project) => {
        return (
          <Link href={project.url} key={project._id}>
            <a
              key={project._id}
              className={classNames(
                project._id === selectedProject._id
                  ? " text-cyan-700"
                  : "text-gray-600 hover:text-cyan-700",
                "flex items-center rounded-md px-3 py-2 text-lg font-medium"
              )}
            >
              <ChevronRightIcon
                className={classNames(
                  project._id === selectedProject._id ? "visible" : "invisible",
                  "h-5 w-5"
                )}
              />
              <span className="truncate">{project.title}</span>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectPage;

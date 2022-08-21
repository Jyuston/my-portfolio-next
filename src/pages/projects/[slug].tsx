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

      <Link href="/">
        <a className="text-md text-left font-bold uppercase text-gray-500 hover:cursor-pointer hover:text-gray-700">
          Home
        </a>
      </Link>

      <div className="flex flex-col gap-3 rounded-lg bg-slate-50/80 p-8 marker:mb-6 md:px-8 xl:w-10/12">
        <Transition
          show={true}
          appear={true}
          enter="transition duration-500"
          enterFrom="translate-y-5 opacity-0"
          enterTo="opacity-100"
        >
          <article>
            <div className="mb-4">
              <h1 className="mb-2 text-3xl font-bold">{project.title}</h1>
              <time dateTime={project.date} className="text-md text-slate-600">
                {format(parseISO(project.date), "LLLL d, yyyy")}
              </time>
            </div>

            <div className="my-5 flex flex-row flex-wrap gap-2 md:w-3/4">
              {project.tags.map((tag) => (
                <Tag key={tag.name} tag={tag} />
              ))}
            </div>

            <div className="my-5 flex flex-row flex-wrap gap-4 md:w-3/4">
              {project.links.map((link) => (
                <LinkComponent link={link} key={link.url} />
              ))}
            </div>

            <div
              className="prose mb-16 lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: project.body.html }}
            />
          </article>

          {project.images && project.images.length > 0 && (
            <Carousel images={project.images} />
          )}
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
      className=" absolute top-80 right-44 hidden flex-col  border-l-2 border-indigo-700 px-2 text-center xl:-translate-x-1/3 2xl:flex"
    >
      {allProjects.map((project) => {
        return (
          <Link href={project.url} key={project._id}>
            <a
              key={project._id}
              className={classNames(
                project._id === selectedProject._id
                  ? " text-indigo-700"
                  : "text-gray-600 hover:text-indigo-700",
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

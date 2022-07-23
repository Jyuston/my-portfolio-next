import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import kayne from "../../../public/kanyee.png";
import Carousel from "src/components/Carousel/Carousel";
import CarouselItem from "src/components/Carousel/CarouselItem";

type Props = {
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

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
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

const ProjectPage: NextPage<Props> = ({ project }) => {
  return (
    <div className="mx-48 py-16">
      <Head>
        <title>Justin Yuen - {project.title}</title>
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
        <div className="flex flex-col gap-3 rounded-lg bg-slate-50/80 p-5 text-start marker:mb-6">
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

          <Carousel>
            <CarouselItem className="bg-yellow-300">Hey1</CarouselItem>
            <CarouselItem className="bg-red-300">Hey2</CarouselItem>
            <CarouselItem className="bg-blue-300">Hey3</CarouselItem>
          </Carousel>
        </div>
      </Transition>
    </div>
  );
};

export default ProjectPage;

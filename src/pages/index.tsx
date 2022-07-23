import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { compareDesc } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import ProjectCard from "src/components/ProjectCard";
import { Transition } from "@headlessui/react";
import GithubIcon from "src/components/Icons/GithubIcon";
import LinkedInIcon from "src/components/Icons/LinkedInIcon";

type Props = {
  projects: Project[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { projects } };
};

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Justin Yuen - Home</title>
      </Head>
      <div className="mx-32 my-16 selection:bg-indigo-500 selection:text-white">
        <div>
          <h1 className="my-5 text-4xl font-medium text-slate-700">
            Welcome 🤗
          </h1>
          <h2 className=" text-3xl font-medium text-gray-500 ">
            My name is Justin Yuen.
          </h2>

          <h3 className="mb-7 text-3xl font-medium text-gray-500">
            I'm a
            <div className="mx-2 inline-block -skew-y-1 bg-gradient-to-r from-pink-500 to-yellow-500 p-1 text-slate-800">
              <span className="inline-block skew-y-1">
                QA & DevOps Engineer
              </span>
            </div>
            from Sydney, Australia.
          </h3>

          <div className="mb-7 flex justify-start rounded-md">
            <GithubIcon />
            <LinkedInIcon />
          </div>
        </div>

        <h2 className="mb-5 flex  font-mono text-xl font-bold text-indigo-500">
          Projects
        </h2>

        <Transition
          show={true}
          appear={true}
          enter="transition duration-500"
          enterFrom="translate-y-5 opacity-0"
          enterTo="opacity-100"
        >
          <div className="mb-7 grid gap-5 pt-4 lg:max-h-fit lg:grid-cols-1 2xl:grid-cols-2">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Home;

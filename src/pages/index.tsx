import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { compareDesc } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import ProjectCard from "src/components/ProjectCard";
import { Transition } from "@headlessui/react";

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
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              className="mr-3 transform fill-slate-700/80 text-opacity-50 transition duration-200 hover:cursor-pointer hover:fill-purple-500 "
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              className="mr-3 transform fill-slate-700/80 text-opacity-50 transition duration-200 hover:cursor-pointer hover:fill-blue-500"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
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
          <div className="mb-7 grid gap-5 pt-4 lg:max-h-fit lg:grid-cols-1 lg:overflow-y-scroll 2xl:grid-cols-2">
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

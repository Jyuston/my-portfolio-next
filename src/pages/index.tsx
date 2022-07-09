import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { compareDesc } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import ProjectCard from "src/components/ProjectCard";
import { useState } from "react";

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
        <title>Justin Yuen - Portfolio</title>
      </Head>
      <div className="mx-32 my-16">
        <div className="my-4">
          <h1 className="my-5 text-4xl font-medium text-slate-700">
            Ligmatosis 🤗
          </h1>

          <h2 className="mb-5 text-2xl font-medium text-gray-500">
            My name is Justin Yuen,
          </h2>

          <h3 className="text-lg font-medium text-gray-500">
            I'm a
            <div className="mx-2 inline-block -skew-y-2 bg-gradient-to-r from-pink-500 to-yellow-500 p-1 text-slate-800">
              <span className="inline-block skew-y-1">
                QA & DevOps Engineer
              </span>
            </div>
            from Sydney, Australia.
            <br />I have an interest for Web Applications / DevOps / Software
            Development
            <br />
            Feel free to look around and learn about me!
          </h3>
        </div>

        <div>
          <h2 className="my-5 flex justify-center font-mono text-2xl font-semibold text-gray-500">
            PAST PROJECTS
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} appear={true} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

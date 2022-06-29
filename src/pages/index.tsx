import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { compareDesc } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import ProjectCard from "src/components/ProjectCard";

type Props = {
  projects: Project[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { projects } };
};

const Home: NextPage<Props> = ({ projects }) => (
  <div className="mx-auto max-w-2xl py-16 text-center">
    <Head>
      <title>Justin Yuen - Portfolio</title>
    </Head>

    <h1 className="mb-8 text-3xl font-bold">Welcome Home</h1>

    {projects.map((project, idx) => (
      <ProjectCard key={idx} {...project} />
    ))}
  </div>
);

export default Home;

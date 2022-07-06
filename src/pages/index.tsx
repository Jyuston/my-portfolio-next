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
  <>
    <Head>
      <title>Justin Yuen - Portfolio</title>
    </Head>
    <div className="mx-32 my-16">
      <div>
        <h1 className="text-4xl font-medium">Welcome. 🙋‍♂️</h1>
        <h2 className="text-2xl font-medium">
          My name is Justin Yuen. A University Graduate from Sydney, Australia.
        </h2>
        <h2 className="text-2xl font-medium">
          I have a passion for web applications / devops / software development
        </h2>
        <h2 className="text-2xl font-medium">
          Feel free to look around and learn about me!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  </>
);

export default Home;

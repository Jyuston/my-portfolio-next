import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";

type Props = {
  projects: Project[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return { props: { projects } };
};

const PostCard: React.FC<Project> = (project) => (
  <div className="mb-6">
    <time dateTime={project.date} className="block text-sm text-slate-600">
      {format(parseISO(project.date), "LLLL d, yyyy")}
    </time>
    <h2 className="text-lg">
      <Link href={project.url}>
        <a className="text-blue-700 hover:text-blue-900">{project.title}</a>
      </Link>
    </h2>
  </div>
);

const Home: NextPage<Props> = ({ projects }) => (
  <div className="mx-auto max-w-2xl py-16 text-center">
    <Head>
      <title>Justin Yuen - Portfolio</title>
    </Head>

    <h1 className="mb-8 text-3xl font-bold">Welcome Home</h1>

    {projects.map((project, idx) => (
      <PostCard key={idx} {...project} />
    ))}
  </div>
);

export default Home;

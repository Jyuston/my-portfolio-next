import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
  project: Project | undefined;
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
  return {
    props: {
      project,
    },
  };
};

const ProjectPage: NextPage<Props> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project!.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold uppercase text-blue-700">
              Home
            </a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{project!.title}</h1>
          <time dateTime={project!.date} className="text-sm text-slate-600">
            {format(parseISO(project!.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div
          className="cl-post-body"
          dangerouslySetInnerHTML={{ __html: project!.body.html }}
        />
      </article>
    </>
  );
};

export default ProjectPage;

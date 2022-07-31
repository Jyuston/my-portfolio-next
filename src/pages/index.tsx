import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { compareDesc } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import ProjectCard from "src/components/ProjectCard";
import { Transition } from "@headlessui/react";
import GithubIcon from "src/components/Icons/GithubIcon";
import LinkedInIcon from "src/components/Icons/LinkedInIcon";

import CSRLogo from "../../public/images/icons/csr-logo.jpg";
import UTSLogo from "../../public/images/icons/uts-logo.jpg";

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
      <div className="my-12 selection:bg-indigo-500 selection:text-white md:mx-8">
        <div>
          <h1 className="my-5 text-4xl font-medium text-slate-700">
            Welcome ✨
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

          <div className="mb-7 inline-flex flex-col justify-start gap-4 rounded-md sm:flex-row">
            <GithubIcon />
            <LinkedInIcon />
          </div>

          <h2 className="mb-2 flex  font-mono text-xl text-indigo-500">
            About
          </h2>

          <h2 className="prose prose-xl pb-3 text-gray-500">
            I'm a highly motivated engineer with a passion for learning and
            understanding. I enjoy working out, travelling and spending time
            amongst friends and family.
          </h2>
          <div className="mb-4 text-lg  text-gray-500">
            I have an interest in{" "}
            <span className="font-bold text-gray-600">Web Applications</span>,{" "}
            <span className="font-bold text-gray-600">DevOps</span> &{" "}
            <span className="font-bold text-gray-600">
              Software Development 💖.
            </span>
          </div>

          <div className="space flex flex-col gap-4 xl:my-8 xl:flex-row xl:gap-10">
            <div>
              <h2 className="mb-2 flex  font-mono text-xl text-indigo-500">
                Occupation
              </h2>
              <div className="flex flex-row  gap-4">
                <Image
                  src={CSRLogo}
                  priority
                  layout="fixed"
                  height={60}
                  width={60}
                />
                <div>
                  <div className=" text-lg  text-gray-500">
                    Quality Assurance & DevOps Engineer
                  </div>
                  <div className="text-md font-bold text-rose-700/80">
                    CSR Limited - Customer Digital
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-2 flex font-mono text-xl text-indigo-500">
                Education
              </h2>
              <div className="flex flex-row gap-4">
                <Image
                  src={UTSLogo}
                  priority
                  layout="fixed"
                  width={60}
                  height={60}
                />
                <div>
                  <div className=" text-lg text-gray-500">
                    Bachelors of Information Technology Scholar
                  </div>
                  <div className="text-md font-medium text-blue-700">
                    Univeristy of Technology Sydney
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mb-5 flex  font-mono text-xl  text-indigo-500">
          Projects
        </h2>

        <Transition
          show={true}
          appear={true}
          enter="transition duration-500"
          enterFrom="translate-y-5 opacity-0"
          enterTo="opacity-100"
        >
          <div className="mb-7 grid gap-5 pt-2 xl:grid-cols-2">
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

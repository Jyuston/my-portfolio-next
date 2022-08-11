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
import Laptop from "../../public/images/Laptop2x.png";

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
        <div className="flex h-[60vh] gap-36 md:pt-24">
          <Transition
            show={true}
            appear={true}
            enter="transition duration-500"
            enterFrom="translate-y-5 opacity-0"
            enterTo="opacity-100"
          >
            <div>
              <h1 className="my-5 font-mono text-5xl font-bold text-indigo-500">
                Welcome
              </h1>
              <h2 className=" mb-4 text-5xl font-medium text-gray-500">
                My name is Justin Yuen.
              </h2>

              <h3 className="mb-7 text-5xl font-medium text-gray-500">
                I'm a
                <div className="mx-4 inline-block -skew-y-1 bg-gradient-to-r from-pink-500 to-yellow-500 p-1 text-slate-800">
                  <span className="inline-block skew-y-1">
                    QA & DevOps Engineer
                  </span>
                </div>
                <br />
                from Sydney, Australia.
              </h3>

              <div className="mb-7 inline-flex flex-col justify-start gap-4 rounded-md sm:flex-row">
                <GithubIcon />
                <LinkedInIcon />
              </div>
            </div>
          </Transition>
          <div>
            <Image
              className=" aspect-square"
              priority
              src={Laptop}
              layout="fixed"
              height={400}
              width={400}
            />
          </div>
        </div>

        <div className="flex md:h-[30vh]">
          <div>
            <h2 className="mb-2 flex  font-mono text-5xl font-bold text-indigo-500">
              About
            </h2>

            <h2 className="prose prose-2xl mb-3 text-gray-500">
              I'm a highly motivated engineer with a passion for learning and
              understanding new concepts. I enjoy working out, travelling and
              spending time amongst friends and family.
            </h2>
            <div className="prose prose-2xl  text-gray-500">
              Career wise, I have an interest in{" "}
              <span className="font-bold text-gray-600">Web Applications</span>,{" "}
              <span className="font-bold text-gray-600">DevOps</span> &{" "}
              <span className="font-bold text-gray-600">
                Software Development 💖💻.
              </span>
            </div>
          </div>
        </div>

        <div className="my-4 flex w-11/12 flex-col gap-8 md:h-[50vh] xl:my-8  xl:h-[20vh] xl:flex-row xl:justify-between">
          <div>
            <h2 className="mb-6 font-mono text-4xl font-bold text-indigo-500">
              Occupation
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div>
                <Image
                  className="aspect-square"
                  src={CSRLogo}
                  priority
                  layout="fixed"
                  height={100}
                  width={100}
                />
              </div>

              <div>
                <div className="text-xl  font-medium text-gray-500">
                  Quality Assurance & DevOps Engineer
                </div>
                <div className="text-lg font-bold text-rose-700/80">
                  CSR Limited
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-mono text-4xl font-bold text-indigo-500">
              Education
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div>
                <Image
                  src={UTSLogo}
                  priority
                  layout="fixed"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <div className=" text-xl font-medium text-gray-500">
                  Bachelors of Information Technology Scholar
                </div>
                <div className="text-lg font-bold text-blue-700">
                  Univeristy of Technology Sydney
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mb-6 flex font-mono text-5xl font-bold text-indigo-500">
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

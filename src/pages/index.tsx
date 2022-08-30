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
import Laptop from "../../public/images/Laptop.png";

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

      <div className="my-1 sm:mx-8 md:mt-24">
        <div className="flex flex-col-reverse justify-between xl:flex-row">
          <Transition
            show={true}
            appear={true}
            enter="transition duration-500"
            enterFrom="translate-y-5 opacity-0"
            enterTo="opacity-100"
          >
            <div className="m-auto xl:text-left">
              <h1 className="my-5 font-mono text-5xl font-bold text-indigo-500 ">
                Welcome
              </h1>
              <h2 className=" mb-4 text-3xl font-medium text-gray-500 md:text-5xl">
                My name is Justin Yuen.
              </h2>

              <h3 className=" mb-7 text-3xl font-medium text-gray-500 md:text-5xl">
                I&apos;m a
                <div className="mx-4 inline-block -skew-y-1 bg-gradient-to-r from-pink-500 to-yellow-500 px-[1px] text-3xl text-slate-800 md:p-1 md:text-5xl">
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

          <div className="m-auto w-60 md:m-0 md:w-72 xl:mr-40 xl:w-auto">
            <Image
              alt="Picture of Justin Memoji"
              className=" aspect-square"
              priority
              src={Laptop}
              layout="intrinsic"
              height={400}
              width={400}
            />
          </div>
        </div>

        <div>
          <div className="my-16 flex flex-col md:my-48">
            <h2 className="mb-2 flex  font-mono text-5xl font-bold text-indigo-500">
              About
            </h2>

            <h2 className="prose prose-xl mb-3 text-gray-500 xl:prose-2xl">
              I&apos;m a highly motivated engineer with a passion for learning
              and understanding new concepts. I enjoy working out, travelling
              and spending time amongst friends and family.
            </h2>
            <div className="prose prose-xl  text-gray-500 xl:prose-2xl">
              Career wise, I have an interest in{" "}
              <span className="font-bold text-gray-600">Web Applications</span>,{" "}
              <span className="font-bold text-gray-600">DevOps</span> &{" "}
              <span className="font-bold text-gray-600">
                Software Development 💖💻.
              </span>
            </div>
          </div>
        </div>

        <div className="my-48 flex w-11/12 flex-col gap-8 xl:flex-row xl:gap-32">
          <div>
            <h2 className="mb-6 font-mono text-4xl font-bold text-indigo-500">
              Occupation
            </h2>
            <div className="flex items-center gap-4">
              <div>
                <Image
                  alt="Company Logo"
                  className="aspect-square rounded-sm"
                  src={CSRLogo}
                  priority
                  layout="intrinsic"
                  height={150}
                  width={150}
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
            <div className="flex items-center gap-4">
              <div>
                <Image
                  alt="University Logo"
                  className="aspect-square rounded-sm"
                  src={UTSLogo}
                  priority
                  layout="intrinsic"
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <div className=" text-xl font-medium text-gray-500">
                  Bachelors of Information Technology
                </div>
                <div className="text-lg font-bold text-blue-700">
                  Univeristy of Technology Sydney
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mb-6 flex font-mono text-4xl font-bold text-indigo-500">
          Projects
        </h2>

        <Transition
          show={true}
          appear={true}
          enter="transition duration-500"
          enterFrom="translate-y-5 opacity-0"
          enterTo="opacity-100"
        >
          <div className="mb-36 grid gap-5 pt-2 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project._id} {...project} />
            ))}
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Home;

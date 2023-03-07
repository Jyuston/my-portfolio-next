import { Transition } from "@headlessui/react";
import { allProjects, Project } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GithubIcon from "src/components/Icons/GithubIcon";
import LinkedInIcon from "src/components/Icons/LinkedInIcon";
import ProjectCard from "src/components/ProjectCard";

import { useState } from "react";
import CSRLogo from "../../public/images/icons/csr-logo.jpg";
import UTSLogo from "../../public/images/icons/uts-logo.jpg";
import WestpacLogo from "../../public/images/icons/westpac-logo.png";
import Laptop from "../../public/images/Laptop.png";
import Peace from "../../public/images/PeaceCropped.png";
import ResumeIcon from "src/components/Icons/ResumeIcon";

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
  let [alternateImage, setAlternateImage] = useState(false);
  let [isShowing, setIsShowing] = useState(true);

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
              <h1 className="my-5 font-mono text-4xl font-bold text-indigo-500 dark:text-indigo-400 md:text-5xl ">
                Welcome
              </h1>
              <h2 className=" mb-4 text-3xl font-medium text-gray-500 dark:text-gray-100 md:text-5xl">
                My name is Justin Yuen.
              </h2>

              <h3 className="mb-8 text-3xl font-medium text-gray-500 dark:text-gray-300 md:mb-10 md:text-5xl">
                I&apos;m a
                <div className="mx-4 inline-block -skew-y-1 bg-gradient-to-r from-pink-500 to-yellow-500 px-[1px] text-3xl text-slate-800 md:p-1 md:text-5xl">
                  <span className="inline-block skew-y-1">
                    Junior Software Developer
                  </span>
                </div>
                <br />
                from Sydney, Australia.
              </h3>

              <div className="inline-flex flex-col justify-start gap-2 rounded-md sm:flex-row md:mb-7">
                <div className="flex flex-row gap-2">
                  <GithubIcon />
                  <LinkedInIcon />
                </div>
                <div className="inline-flex">
                  <ResumeIcon />
                </div>
              </div>
            </div>
          </Transition>

          <div className="m-auto min-h-[300px] w-60 drop-shadow-md hover:cursor-pointer md:m-0 md:min-h-[400px] md:w-72 xl:mr-40 xl:w-auto">
            <Transition
              show={isShowing}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-50"
              afterLeave={() => {
                setAlternateImage((altImage) => !altImage);
                setIsShowing(true);
              }}
              unmount={false}
              appear={true}
            >
              <Image
                alt="Picture of Justin Memoji"
                className="aspect-square transition duration-300 ease-in-out will-change-transform hover:scale-110"
                priority
                src={alternateImage ? Peace : Laptop}
                layout="intrinsic"
                height={400}
                width={400}
                onClick={() => {
                  setIsShowing(false);
                }}
              />
            </Transition>
          </div>
        </div>

        <div>
          <div className="my-16 flex flex-col md:my-48 md:max-w-2xl">
            <h2 className="my-5 flex  font-mono text-3xl font-bold text-indigo-500 dark:text-indigo-400   md:text-5xl">
              About
            </h2>

            <h2 className="prose prose-xl mb-3 text-gray-500 dark:text-gray-300 xl:prose-2xl">
              I&apos;m a highly motivated engineer with a passion for learning
              and understanding new concepts. I enjoy working out, travelling
              and spending time amongst friends and family.
            </h2>
            <div className="dark-text-gray-300 prose  prose-xl text-gray-500 dark:text-gray-300 xl:prose-2xl">
              Career wise, I have an interest in{" "}
              <span className="font-bold text-gray-600 dark:text-gray-300">
                Web Applications
              </span>
              ,{" "}
              <span className="font-bold text-gray-600 dark:text-gray-300">
                DevOps
              </span>{" "}
              &{" "}
              <span className="font-bold text-gray-600 dark:text-gray-300">
                Software Development 💖💻.
              </span>
            </div>
          </div>
        </div>

        <div className="my-48 flex w-11/12 flex-col gap-8 xl:flex-row xl:gap-32">
          <div className="flex flex-col gap-6">
            <h2 className="my-5 font-mono text-3xl font-bold text-indigo-500 dark:text-indigo-400 md:mb-8 md:text-4xl">
              Occupation
            </h2>

            <div className="flex items-center gap-4">
              <div>
                <Image
                  alt="Company Logo"
                  className="aspect-square rounded-sm"
                  src={WestpacLogo}
                  priority
                  layout="intrinsic"
                  height={150}
                  width={150}
                />
              </div>

              <div>
                <div className="text-lg font-medium text-gray-500 dark:text-gray-300 md:text-xl">
                  Junior Full-Stack Software Engineer
                </div>
                <div className="text-lg font-bold text-rose-700/80 text-rose-500">
                  Westpac Group
                </div>
                <div className="text-lg text-gray-500 dark:text-gray-300">
                  2023 - Present
                </div>
              </div>
            </div>

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
                <div className="text-lg font-medium text-gray-500 dark:text-gray-300 md:text-xl">
                  Quality Assurance & DevOps Engineer
                </div>
                <div className="text-lg font-bold text-rose-700/80 text-rose-500">
                  CSR Limited
                </div>
                <div className="text-lg text-gray-500 dark:text-gray-300">
                  2021 - 2023
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="my-5 font-mono text-3xl font-bold text-indigo-500 dark:text-indigo-400 md:mb-8 md:text-4xl">
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
                <div className=" text-lg font-medium text-gray-500 dark:text-gray-300 md:text-xl">
                  Bachelors of Information Technology
                </div>
                <div className="text-lg font-bold text-blue-700 dark:text-blue-500">
                  Univeristy of Technology Sydney
                </div>
                <div className="text-lg text-gray-500 dark:text-gray-300">
                  2019 - 2021
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="my-6 flex font-mono text-4xl font-bold text-indigo-500 dark:text-indigo-400 md:text-5xl">
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

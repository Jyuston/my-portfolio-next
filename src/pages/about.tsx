import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import kayne from "../../public/kanyee.png";

const About: NextPage = () => (
  <>
    <Head>
      <title>Justin Yuen - About</title>
    </Head>
    <div className="my-12 flex flex-col md:mx-8">
      <h1 className="mb-5 text-4xl font-medium text-slate-700">About 🤠</h1>
      <h2 className="max-w-3/4 pb-7 text-3xl font-medium text-gray-500">
        I'm a highly motivated engineer with a passion for learning and
        understanding. I enjoy working out, travelling and spending time amongst
        friends and family.
      </h2>
      <div className="flex flex-col rounded-md bg-slate-200 p-8 md:flex-row">
        <div>
          <div className="mb-8 text-lg font-medium text-gray-500">
            I have an interest in{" "}
            <span className="font-bold text-gray-600">Web Applications</span> ,{" "}
            <span className="font-bold text-gray-600">DevOps</span> &{" "}
            <span className="font-bold text-gray-600">
              Software Development.
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-2  text-xl font-medium text-gray-700 ">
                Education
              </h3>
              <div className=" text-lg font-medium text-gray-500">
                Bachelors of Information Technology Scholar
              </div>
              <div className="text-md font-medium text-blue-700">
                Univeristy of Technology Sydney
              </div>
            </div>

            <div>
              <h3 className="mb-2  text-xl font-medium text-gray-700 ">
                Occupation
              </h3>
              <div className=" text-lg font-medium text-gray-500">
                Quality Assurance & DevOps Engineer
              </div>
              <div className="text-md font-medium text-rose-600">
                CSR Limited - Customer Digital
              </div>
            </div>

            <div>
              <h3 className="mb-2  text-xl font-medium text-gray-700 ">
                Hobbies and Interests
              </h3>
              <div className=" text-lg font-medium text-gray-500">
                Travelling
              </div>
              <div className=" text-lg font-medium text-gray-500">
                Travelling
              </div>
              <div className=" text-lg font-medium text-gray-500">
                Travelling
              </div>
            </div>
          </div>
        </div>

        <Image className="aspect-[4:3]" src={kayne} placeholder="blur" />
      </div>
    </div>
  </>
);

export default About;

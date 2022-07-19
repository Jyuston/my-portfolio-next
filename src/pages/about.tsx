import { NextPage } from "next";
import Image from "next/image";
import kayne from "../../public/kanyee.png";

const About: NextPage = () => (
  <div className="mx-32 my-16 flex flex-row items-center">
    <div>
      <h1 className="my-5 text-4xl font-medium text-slate-700">About Me 🤠</h1>
      <h2 className="relative mb-8 border-b-2 border-gray-500 pb-8 text-2xl font-medium text-gray-500">
        I'm a highly motivated engineer with a passion for learning and
        understanding. I enjoy working out, travelling and spending time with
        friends and family.
      </h2>

      <div className="mb-8 text-lg font-medium text-gray-500">
        I have an interest in{" "}
        <span className="font-bold text-gray-600">Web Applications</span> ,{" "}
        <span className="font-bold text-gray-600">DevOps</span> &{" "}
        <span className="font-bold text-gray-600">Software Development.</span>
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
          <div className=" text-lg font-medium text-gray-500">Travelling</div>
          <div className=" text-lg font-medium text-gray-500">Travelling</div>
          <div className=" text-lg font-medium text-gray-500">Travelling</div>
        </div>
      </div>
    </div>
    <Image className="aspect-[4:3] w-full" src={kayne} placeholder="blur" />
  </div>
);

export default About;

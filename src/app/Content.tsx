"use client";

import Image from "next/image";
import firstImage from "../../public/content.jpg"; // replace with the correct path
import secondImage from "../../public/p2.jpg"; // replace with the correct path
import thirdImage from "../../public/p1.jpg"; // replace with the correct path
import fourthImage from "../../public/p3.jpg"; // replace with the correct path

const ContentSection = () => {
  return (
    <section className="contentSection py-20 bg-slate-50">
      <div className="container mx-auto">
        {/* First Content Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2 pl-16 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-9">
              Chats for your distributed teams
            </h2>
            <p className="mt-4 text-1xl text-gray-700 mb-9 font-semibold">
              Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
            </p>
            <a
              href="#"
              className="mt-4 text-1xl inline-block text-blue-600 hover:underline font-semibold"
            >
              Learn more →
            </a>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <Image
              src={firstImage}
              alt="Feature Image"
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Second Content Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2 pl-16 mb-8 lg:mb-0 order-2 lg:order-1">
            <Image
              src={secondImage}
              alt="Feature Image"
              className="mx-auto lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-9 pl-5">
              Chats for your distributed teams
            </h2>
            <p className="mt-4 text-1xl text-gray-700 mb-9 font-semibold pl-5">
              Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
            </p>
            <a
              href="#"
              className="mt-4 text-1xl inline-block text-blue-600 hover:underline font-semibold pl-5"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Third Content Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2 pl-16 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-9 pr-24">
              Choose how you want to work
            </h2>
            <p className="mt-4 text-1xl text-gray-700 mb-9 font-semibold pr-36">
              In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
            </p>
            <a
              href="#"
              className="mt-4 text-1xl inline-block text-blue-600 hover:underline font-semibold"
            >
              Learn more →
            </a>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <Image
              src={thirdImage}
              alt="Feature Image"
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Fourth Content Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2 pl-16 mb-8 lg:mb-0 order-2 lg:order-1">
            <Image
              src={fourthImage}
              alt="Feature Image"
              className="mx-auto lg:mx-0"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-9 pl-5">
              Move faster with your Team tools
            </h2>
            <p className="mt-4 text-1xl text-gray-700 mb-9 font-semibold pl-5">
              With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.
            </p>
            <a
              href="#"
              className="mt-4 text-1xl inline-block text-blue-600 hover:underline font-semibold pl-5"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

import Email from "../assets/image/mail.png";
import Linkin from "../assets/image/linkin.png";
import Flutter from "../assets/image/Flutter.png";
import Intagram from "../assets/image/instagram.png";
import Github from "../assets/image/github.png";
import Html from "../assets/image/HTML.png";
import Js from "../assets/image/JS.png";
import Css from "../assets/image/CSS.png";
import React from "../assets/image/react.png";
import Python from "../assets/image/Python.png";
import Java from "../assets/image/Java.png";
import Npm from "../assets/image/npm.png";
import Vue from "../assets/image/vue.png";
import Ant from "../assets/image/Ant.png";
import Navive from "../assets/image/Naive.png";
import Next from "../assets/image/Next.png";
import Tailwind from "../assets/image/Tailwind.png";
import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/16/solid";
const skilsItem = [
  { img: Html, name: "HTML" },
  { img: Flutter, name: "Flutter" },
  { img: Js, name: "Java Script" },
  { img: React, name: "React" },
  { img: Css, name: "CSS" },
  { img: Python, name: "Python" },
  { img: Npm, name: "NPM" },
  { img: Vue, name: "Vue" },
  { img: Ant, name: "Ant Design" },
  { img: Navive, name: "Naive" },
  { img: Next, name: "Next" },
  { img: Tailwind, name: "Tailwind" },
];

const features = [
  {
    name: "Push to Deploy",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL Certificates",
    description:
      "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
    icon: LockClosedIcon,
  },
];
const AboutMe = () => {
  return (
    <section className="bg-white">
      <div className="pt-16 sm:py-16 px-10">
        <p className="text-black text-3xl font-bold sm:text-[3em] text-center">
          {" "}
          What I skills?
        </p>
        <p className="text-black text-2xl text-center mt-6 font-medium">
          Frontend Development
        </p>
        <div className="grid grid-cols-12 gap-y-10  md:gap-x-8 py-10 sm:py-20 sm:px-14 md:px-24 lg:px-24 xl:px-28">
          <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-4 sm:gap-4">
            {skilsItem.map((i) => (
              <div className="col-span-3 sm:col-span-3  xl:col-span-2">
                <div className=" w-full bg-gray-100 rounded-full p-3 sm:p-2 md:p-4 flex items-center justify-center">
                  <img className="rounded-full" src={i.img} />
                </div>
                {/* <p className="text-black font-semibold text-center text-lg mt-2">{i.name}</p> */}
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-5 grid grid-cols-12 gap-6">
            {features.map((feature) => (
              <div key={feature.name} className="col-span-12">
                <div className="rounded-lg bg-gray-100 px-4 pb-8">
                  <div className="pt-6">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-700 to-pink-800  outline-offset-2 transition-colors  p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="text-lg font-medium tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                    </div>

                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

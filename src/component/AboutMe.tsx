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
const skilsItem = [
  { img: Html,name: 'HTML' },
  { img: Flutter ,name: 'Flutter'},
  { img: Js ,name: "Java Script"},
  { img: React, name: "React" },
  { img: Css ,name: "CSS"},
  { img: Python, name: "Python" },
  { img: Java , name: "Java"},
  { img: Npm , name: "NPM"},
  { img: Vue, name: "Vue" },
];
const AboutMe = () => {
  return (
    <section className="bg-white">
      <div className="pt-20 sm:py-16 px-10">
        <p className="text-black text-3xl font-bold sm:text-[3em] text-center">
          {" "}
          What is skills
        </p>
        <div className="grid grid-cols-12  py-14 sm:py-20 sm:px-48">
          <div className="col-span-12 sm:col-span-6 grid grid-cols-12 gap-2 sm:gap-8">
            {skilsItem.map((i) => (
              <div className="col-span-3 sm:col-span-3">
                <div className=" w-full  rounded-full p-3 sm:p-8 flex items-center justify-center">
                <img src={i.img} />
              </div>
              {/* <p className="text-black font-semibold text-center text-lg mt-2">{i.name}</p> */}
              </div>

            ))}
          </div>
          <div className="col-span-6"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

// import { Popover, Transition } from "@headlessui/react";
import "./App.css";
import Hero from "./component/Hero";
import AboutMe from "./component/AboutMe"
// import {
//   ArrowPathIcon,
//   ArrowTopRightOnSquareIcon,
//   Bars3Icon,
//   CloudArrowUpIcon,
//   CogIcon,
//   LockClosedIcon,
//   ServerIcon,
//   ShieldCheckIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import { Fragment } from "react";
// import Email from "./assets/image/mail.png";
// import Linkin from "./assets/image/linkin.png";
// import Flutter from "./assets/image/Flutter.png";
// import Intagram from "./assets/image/instagram.png";
// import Profile from "./assets/image/profile.png";
// import Github from "./assets/image/github.png";
// import Html from "./assets/image/HTML.png";
// import Js from "./assets/image/JS.png";
// import Css from "./assets/image/CSS.png";
// import React from "./assets/image/react.png";
// import Python from "./assets/image/Python.png";
// import Java from "./assets/image/Java.png";
// import Npm from "./assets/image/npm.png";
// import Vue from "./assets/image/vue.png";
// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

// const features = [
//   {
//     name: "Push to Deploy",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: "SSL Certificates",
//     description:
//       "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
//     icon: LockClosedIcon,
//   },
//   {
//     name: "Simple Queues",
//     description:
//       "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
//     icon: ArrowPathIcon,
//   },
//   {
//     name: "Advanced Security",
//     description:
//       "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: "Powerful API",
//     description:
//       "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
//     icon: CogIcon,
//   },
//   {
//     name: "Database Backups",
//     description:
//       "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
//     icon: ServerIcon,
//   },
// ];
// const blogPosts = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { name: "Article", href: "#" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
//     author: {
//       name: "Roel Aufderehar",
//       imageUrl:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       href: "#",
//     },
//     readingLength: "6 min",
//   },
//   {
//     id: 2,
//     title: "How to use search engine optimization to drive sales",
//     href: "#",
//     date: "Mar 10, 2020",
//     datetime: "2020-03-10",
//     category: { name: "Video", href: "#" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
//     author: {
//       name: "Brenna Goyette",
//       imageUrl:
//         "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       href: "#",
//     },
//     readingLength: "4 min",
//   },
//   {
//     id: 3,
//     title: "Improve your customer experience",
//     href: "#",
//     date: "Feb 12, 2020",
//     datetime: "2020-02-12",
//     category: { name: "Case Study", href: "#" },
//     imageUrl:
//       "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//     preview:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
//     author: {
//       name: "Daniela Metz",
//       imageUrl:
//         "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       href: "#",
//     },
//     readingLength: "11 min",
//   },
// ];

function App() {
  return (
    <>
    
      <Hero/>

      <AboutMe/>
      {/* <div className="bg-white">
        <div className="relative overflow-hidden">
          <Popover as="header" className="relative">
            <div className="bg-gray-900 py-3">
              <nav
                className="relative mx-auto flex max-w-7xl items-center justify-between px-6"
                aria-label="Global"
              >
                <div className="flex flex-1 items-center">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=200&to-color=cyan&to-shade=400&toShade=400"
                        alt=""
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 md:ml-10 md:flex">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-white hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                  <a
                    href="#"
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    Log in
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
                  >
                    Start free trial
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pb-6 pt-5">
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-6 px-5">
                      <a
                        href="#"
                        className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-3 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                      >
                        Start free trial
                      </a>
                    </div>
                    <div className="mt-6 px-5">
                      <p className="text-center text-base font-medium text-gray-500">
                        Existing customer?{" "}
                        <a href="#" className="text-gray-900 hover:underline">
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <main>
            <div className="bg-gray-900 pt-2 sm:pt-16 lg:overflow-hidden  lg:pt-8">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md  sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                    <div className="lg:py-24">
                      <h1 className="mt-4 text-[2.4rem] font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text  text-transparent">
                          Teerasak Supawaha.
                        </span>
                      </h1>
                      <p className="text-lg text-gray-300 sm:text-2xl px-4">
                        I graduated from Suranaree University of Technology with
                        a degree in Computer Engeering. I'm eager to expand my
                        knowledge and skills and I'm currently working on
                        improving my English proficiency.
                      </p>
                      <div className="gap-5 sm:gap-6 flex justify-center sm:justify-start mt-6 sm:mt-7">
                        <a
                          href="https://github.com/CitSupawaha"
                          target="_blank"
                        >
                          <img
                            className="w-10  h-10 sm:h-14 sm:w-14 rounded-md"
                            src={Github}
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/citzzz_supawaha"
                          target="_blank"
                        >
                          <img
                            className="w-10  h-10 sm:h-14 sm:w-14 rounded-md"
                            src={Intagram}
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/cit-supavaha-641851142?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                          target="_blank"
                        >
                          <img
                            className="w-10  h-10 sm:h-14 sm:w-14 rounded-md"
                            src={Linkin}
                          />
                        </a>
                        <a href="mailto:asosid15@gmail.com" target="_blank">
                          <img
                            className="w-10  h-10 sm:h-14 sm:w-14 rounded-md"
                            src={Email}
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className=" mt-4 sm:-mb-48 lg:relative lg:m-0">
                    <div className="mx-auto max-w-md px-12 sm:max-w-2xl lg:max-w-none lg:px-0">
                      <img
                        className="w-full drop-shadow-[8px_2px_0px_rgba(255,255,255,255)] lg:absolute lg:inset-y-0 lg:left-24 lg:h-full lg:w-auto lg:max-w-none"
                        src={Profile}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-50 py-12 sm:py-20">
              <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <div>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    What I Skills?
                  </p>
                  <p className="mx-12 mt-5 max-w-prose text-3xl text-gray-500">
                    Frontend Development
                  </p>
                </div>
                <div className="mb-10 mt-12 grid sm:flex grid-cols-12  justify-center  gap-6 sm:gap-10  mx-10">
                  <img
                    className="col-span-3 sm:col-span-1 w-12 h-12 sm:w-[5rem] sm:h-[5rem]"
                    src={Html}
                  />
                  <img
                    className="col-span-3 sm:col-span-1 w-12 h-12 sm:w-[5rem] sm:h-[5rem]"
                    src={Css}
                  />
                  <img
                    className="col-span-3 sm:col-span-1 w-12 h-12 sm:w-[5rem] sm:h-[5rem]"
                    src={Js}
                  />
                  <img
                    className="col-span-3 sm:col-span-1 w-12 h-12 sm:w-[5rem] sm:h-[5rem]"
                    src={React}
                  />
                  <img
                    className="col-span-3 sm:col-span-1 w-12 h-12 sm:w-[5rem] sm:h-[5rem]"
                    src={Flutter}
                  />
                  <img
                    className="col-span-3 sm:col-span-1 w-12 h-12 sm:w-[5rem] sm:h-[5rem]"
                    src={Python}
                  />
                  <img
                    className="col-span-3 sm:col-span-1 w-12 h-12 sm:w-[5rem] sm:h-[5rem]"
                    src={Java}
                  />
                  <img
                    className="col-span-3 sm:col-span-1 w-12 h-12 sm:w-[5rem] sm:h-[5rem]"
                    src={Npm}
                  />
                  <img
                    className="col-span-3 sm:col-span-1 w-12 h-12 sm:w-[5rem] sm:h-[5rem]"
                    src={Vue}
                  />
                </div>
              </div>
            </div>
            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <h2 className="text-lg font-semibold text-cyan-600">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Everything you need to deploy your app
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                  Phasellus lorem quam molestie id quisque diam aenean nulla in.
                  Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                  condimentum id viverra nulla.
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                      <div key={feature.name} className="pt-6">
                        <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                                <feature.icon
                                  className="h-6 w-6 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                              {feature.name}
                            </h3>
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
            </div>
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
              <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                <div className="relative lg:-my-8">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                  />
                  <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                    <div className="aspect-h-6 aspect-w-10 overflow-hidden rounded-xl shadow-xl sm:aspect-h-7 sm:aspect-w-16 lg:aspect-none lg:h-full">
                      <img
                        className="object-cover lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                    <blockquote>
                      <div>
                        <svg
                          className="h-12 w-12 text-white opacity-25"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="mt-6 text-2xl font-medium text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed urna nulla vitae laoreet augue. Amet feugiat
                          est integer dolor auctor adipiscing nunc urna, sit.
                        </p>
                      </div>
                      <footer className="mt-6">
                        <p className="text-base font-medium text-white">
                          Judith Black
                        </p>
                        <p className="text-base font-medium text-cyan-100">
                          CEO at PureInsights
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
              <div className="relative">
                <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                  <h2 className="text-lg font-semibold text-cyan-600">Learn</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Helpful Resources
                  </p>
                  <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                    Phasellus lorem quam molestie id quisque diam aenean nulla
                    in. Accumsan in quis quis nunc, ullamcorper malesuada.
                    Eleifend condimentum id viverra nulla.
                  </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover"
                          src={post.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-cyan-600">
                            <a
                              href={post.category.href}
                              className="hover:underline"
                            >
                              {post.category.name}
                            </a>
                          </p>
                          <a href={post.href} className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">
                              {post.title}
                            </p>
                            <p className="mt-3 text-base text-gray-500">
                              {post.preview}
                            </p>
                          </a>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <a href={post.author.href}>
                              <img
                                className="h-10 w-10 rounded-full"
                                src={post.author.imageUrl}
                                alt={post.author.name}
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              <a
                                href={post.author.href}
                                className="hover:underline"
                              >
                                {post.author.name}
                              </a>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              <time dateTime={post.datetime}>{post.date}</time>
                              <span aria-hidden="true">&middot;</span>
                              <span>{post.readingLength} read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative bg-gray-900">
              <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                  alt=""
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
                />
              </div>
              <div className="relative mx-auto max-w-md px-6 py-12 sm:max-w-7xl sm:py-20 md:py-28 lg:px-8 lg:py-32">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                  <h2 className="text-lg font-semibold text-gray-300">
                    Award winning support
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    We’re here to help
                  </p>
                  <p className="mt-3 text-lg text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    egestas tempus tellus etiam sed. Quam a scelerisque amet
                    ullamcorper eu enim et fermentum, augue. Aliquet amet
                    volutpat quisque ut interdum tincidunt duis.
                  </p>
                  <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        Visit the help center
                        <ArrowTopRightOnSquareIcon
                          className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div> */}
    </>
  );
}

export default App;

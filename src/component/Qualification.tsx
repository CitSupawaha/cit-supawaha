import React from "react";

const Qualification = () => {
  const steps = [
    {
      name: "Suranaree University of Technology",
      description: "B. Eng in Computer Engineering.",
      year: "2018 - 2022",
      status: "upcoming",
    },
    {
      name: "Samrongthap Wittayakom School",
      description: "High School Diploma.",
      year: "2015 - 2018",
      status: "upcoming",
    },
  ];

  const experience = [
    {
      name: "Maximum Soft Co., Ltd.",
      description: "Frontend Developer",
      year: "APR 2023 - Present",
      status: "upcoming",
    },
    {
      name: "Y.I.M Coporations",
      description: "Frontend Developer and Mobile Developer",
      year: "NOV 2021 - MAR 2023",
      status: "upcoming",
    },
    {
      name: "Freelance",
      description: "Frontend Developer",
      year: "2023 - Present",
      status: "upcoming",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="bg-gray-200">
      <div className="py-16 px-8 sm:px-14 md:px-24 lg:px-24 xl:px-32">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 text-3xl font-bold sm:text-[3em] text-center">
          {" "}
          QUALIFICATION
        </h1>
        <h1 className="text-gray-500 text-2xl text-center mt-6 font-medium ">
          My personel journey
        </h1>
        <div className="grid grid-cols-12 gap-x-4 mt-8 gap-y-6">
          <div className="col-span-12 md:col-span-6 p-2 bg-gray-100 rounded-xl">
            <div className="">
              <nav aria-label="Progress">
                <ol role="list" className="overflow-hidden">
                  <div className="rounded-lg  pl-2 py-2 pb-2">
                    <div className="flex mb-6 items-center justify-start gap-x-4">
                      <span className="inline-flex items-center justify-center  rounded-xl bg-gradient-to-r from-purple-700 to-pink-800  outline-offset-2 transition-colors  p-3 shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="white"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                          />
                        </svg>
                      </span>
                      <h1 className="text-gray-500 font-semibold text-lg">
                        Educations
                      </h1>
                    </div>
                    {steps.map((step, index) => (
                      <li key={step.name} className={classNames("relative")}>
                        <>
                          {index === steps.length - 1 ? null : (
                            <div
                              className="absolute left-2 mt-4 -ml-px  h-full w-0.5 bg-gray-300"
                              aria-hidden="true"
                            />
                          )}
                          <a className="group relative flex items-start">
                            <span
                              className="flex h-10 items-start"
                              aria-hidden="true"
                            >
                              <span className="relative z-10 flex h-4 w-4 mt-1 items-center justify-center rounded-full border-2 border-none bg-gradient-to-r from-purple-700 to-pink-800">
                                <span className="h-2.5 w-2.5 rounded-full bg-transparent " />
                              </span>
                            </span>
                            <span className="ml-4 mb-4 flex min-w-0 flex-col">
                              <h1 className="text-base text-gray-500 font-semibold">
                                {step.name}
                              </h1>
                              <p className="text-sm mt-1 text-gray-500">
                                {step.description}
                              </p>
                              <div className="flex gap-2 mt-1 items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                    />
                                  </svg>

                                  <p className="text-sm mt-1 text-gray-500">
                                    {step.year}
                                  </p>
                                </div>
                            </span>
                          </a>
                        </>
                      </li>
                    ))}
                  </div>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 p-2 bg-gray-100 rounded-xl">
            <div className="col-span-12 md:col-span-6">
              <div className="">
                <nav aria-label="Progress">
                  <ol role="list" className="overflow-hidden">
                    <div className="rounded-lg  pl-2 py-2 pb-2">
                      <div className="flex mb-6 items-center justify-start gap-x-4">
                        <span className="inline-flex items-center justify-center  rounded-xl bg-gradient-to-r from-purple-700 to-pink-800  outline-offset-2 transition-colors  p-3 shadow-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                            />
                          </svg>
                        </span>
                        <h1 className="text-gray-500 font-semibold text-lg">
                          Experiendce
                        </h1>
                      </div>
                      {experience.map((step, index) => (
                        <li key={step.name} className={classNames("relative")}>
                          <>
                            {index === experience.length - 1 ? null : (
                              <div
                                className="absolute left-2 mt-4 -ml-px  h-full w-0.5 bg-gray-300"
                                aria-hidden="true"
                              />
                            )}
                            <a className="group relative flex items-start">
                              <span
                                className="flex h-10 items-start"
                                aria-hidden="true"
                              >
                                <span className="relative z-10 flex h-4 w-4 mt-1 items-center justify-center rounded-full border-2 border-none bg-gradient-to-r from-purple-700 to-pink-800 group-hover:border-gray-400">
                                  <span className="h-2.5 w-2.5 rounded-full bg-transparent " />
                                </span>
                              </span>
                              <span className="ml-4 mb-4 flex min-w-0 flex-col">
                                <h1 className="text-base text-gray-500 font-semibold">
                                  {step.name}
                                </h1>
                                <p className="text-sm mt-1 text-gray-500">
                                  {step.description}
                                </p>
                                <div className="flex gap-2 items-center mt-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                    />
                                  </svg>

                                  <p className="text-sm mt-1 text-gray-500">
                                    {step.year}
                                  </p>
                                </div>
                              </span>
                            </a>
                          </>
                        </li>
                      ))}
                    </div>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

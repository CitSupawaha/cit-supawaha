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
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="bg-gray-100">
      <div className="py-16 px-10 sm:px-14 md:px-24 lg:px-24 xl:px-32">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 text-3xl font-bold sm:text-[3em] text-center">
          {" "}
          QUALIFICATION
        </h1>
        <h1 className="text-gray-500 text-2xl text-center mt-6 font-medium ">
          My personel journey
        </h1>
        <div className="grid grid-cols-12 gap-4 mt-8">
          <div className="col-span-12 md:col-span-6">
            {/* <div className="flex  items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="gray"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>

              <p className="text-gray-500 font-bold text-xl">Education</p>
            </div> */}
            <div className="">
              <nav aria-label="Progress">
                <ol role="list" className="overflow-hidden">
                  <div className="rounded-lg  pl-4 py-4 pb-8">
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
                      <h1 className="text-gray-500 font-semibold text-lg">Educations</h1>
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
                              <span className="relative z-10 flex h-4 w-4 mt-1 items-center justify-center rounded-full border-2 border-none bg-gradient-to-r from-purple-700 to-pink-800 group-hover:border-gray-400">
                                <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                              </span>
                            </span>
                            <span className="ml-4 mb-4 flex min-w-0 flex-col">
                              <h1 className="text-base text-gray-500 font-semibold">
                                {step.name}
                              </h1>
                              <p className="text-sm mt-1 text-gray-500">
                                {step.description}
                              </p>
                              <p className="text-sm mt-1 text-gray-500">
                                {step.year}
                              </p>
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
          <div className="col-span-12 md:col-span-6">1</div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Qualification;

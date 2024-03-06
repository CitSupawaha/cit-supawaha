import { Popover } from "@headlessui/react";
import { Container } from "./Container";
import { Button } from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Logo } from "./Logo";
import { NavLinks } from "./Navlinks";
import Profile from "../assets/image/profile.png";
import Resume from "../assets/pdf/resume.pdf";
import { useState } from "react";

const Hero = () => {
  const navigation = [
    { name: "Skills", href: "#skills" },
    { name: "Quaifition", href: "#quaifition" },
    { name: "Project", href: "#" },
    { name: "Contace", href: "#" },
  ];
  const [loading, setLoading] = useState(false);

  function downloadPdf() {
    setLoading(true);
    setTimeout(() => {
      // Path to the PDF file
      const filePath = Resume;

      // Create a download link
      const link = document.createElement("a");
      link.href = filePath;
      link.download = "resume.pdf";

      // Append the link to the body
      document.body.appendChild(link);

      // Programmatically trigger the download
      link.click();

      // Clean up
      document.body.removeChild(link);
    }, 2000);
    setLoading(false);
  }

  function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M5 6h14M5 18h14M5 12h14"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function ChevronUpIcon(props: React.ComponentPropsWithoutRef<"svg">) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M17 14l-5-5-5 5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <section className="bg-[#050519]">
      <header>
        <nav>
          <Container className="relative z-50 flex justify-between py-6">
            <div className="relative z-10 flex items-center gap-16">
              <div className="flex items-center">
                <Logo className="h-10 w-auto" />
                <h1 className="font-bold text-lg -ml-12">PORTFOLIO</h1>
              </div>
              <div className="hidden lg:flex lg:gap-10">
                <NavLinks />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Popover className="lg:hidden">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2  active:stroke-gray-900 ui-not-focus-visible:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <MenuIcon className="h-6 w-6" />
                        )
                      }
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.4 },
                            }}
                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-[#050519] px-6 pb-6 pt-20 shadow-2xl shadow-gray-900/20"
                          >
                            {({ close }) => (
                              <div className="space-y-4">
                                {navigation.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="block text-base text-white"
                                    onClick={() => close()}
                                  >
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            )}

                            {/* <div className="mt-8 flex flex-col gap-4">
                              <Button>Log in</Button>
                              <Button>Download the app</Button>
                            </div> */}
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
            </div>
          </Container>
        </nav>
      </header>
      <div className="overflow-hidden pt-6 sm:pt-20">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <h1 className="text-4xl font-bold tracking-tight text-center  sm:text-start text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 ">
                <span className="text-white"> Hi, I'm</span>{" "}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Cit.",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Developer.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{ fontSize: "1.2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <motion.p
                className="mt-6 text-lg text-white text-center sm:text-start font-medium"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 0.7 }}
              >
                I graduated from Suranaree University of Technology with a
                degree in Computer Engeering. I'm eager to expand my knowledge
                and skills and I'm currently working on improving my English
                proficiency.
              </motion.p>
              <p className="mt-6 text-lg text-white text-center sm:text-start font-medium"></p>
              <div className="mt-8 flex justify-center sm:justify-start gap-x-6 gap-y-4">
                <Button
                  className="w-40 gap-2"
                  onClick={downloadPdf}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <p>Resume</p>
                </Button>
              </div>
            </div>

            <div className="mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <div className="h-full flex justify-center md:justify-end px-10">
                <img
                  className="h-full w-[17rem] drop-shadow-[8px_2px_0px_rgba(255,255,255,255)] sm:w-96"
                  src={Profile}
                ></img>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;

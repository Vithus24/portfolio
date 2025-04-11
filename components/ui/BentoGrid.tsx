import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const techStack = [
    "ReactJS",
    "NextJS",
    "PostgreSQL",
    "Java",
    "Spring Boot",
    "GraphQL",
  ];

  const [copied, setCopied] = useState(false);
  // Track hovered tech item for magic effect
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "vithus24082000@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 3 ? "justify-between" : ""
          )}
        >
          {/* Tech stack card specific layout */}
          {id === 3 ? (
            <>
              <div className="z-10">
                <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold mb-4">
                  {title}
                </div>
                <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3]">
                  {description}
                </div>
              </div>

              {/* Tech stack badges with magic button effect */}
              <div className="grid grid-cols-3 gap-3 mt-auto z-10">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredTech(index)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    {/* Magic button background effect */}
                    <div
                      className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                        hoveredTech === index
                          ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur opacity-70"
                          : "bg-[#10132E] blur-sm opacity-0"
                      }`}
                    ></div>

                    {/* Border animation */}
                    <div
                      className={`absolute inset-0 rounded-lg transition-all duration-700 ${
                        hoveredTech === index
                          ? "border border-white/30 scale-105"
                          : "border border-white/10"
                      }`}
                    ></div>

                    {/* Main content */}
                    <div
                      className={`relative bg-[#10132E] rounded-lg p-3 text-center flex items-center justify-center
                      transition-all duration-300 z-10 ${
                        hoveredTech === index ? "shadow-lg" : ""
                      }`}
                    >
                      <span
                        className={`lg:text-sm text-xs transition-all duration-300 ${
                          hoveredTech === index ? "scale-110 font-medium" : ""
                        }`}
                      >
                        {tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Regular cards layout */}
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
              </div>
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                {title}
              </div>

              {/* for the github 3d globe */}
              {id === 2 && <GridGlobe />}
            </>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
// import resumePDF from "../../assets/Resume.pdf";

const Hero = () => {
  return (
    <div id="home" className={`bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto h-[100vh] flex-col-reverse flex pt-0 ">
        <div className=" left mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2">
          <div className="info w-fit flex flex-col items-start justify-center gap-3">
            <h2 className=" text-5xl font-bold">Hello, I'm Jalpesh Patel</h2>
            <TypeAnimation
              sequence={["Web Developer", 2000, "ASP.Net WebAPI", 2000]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-300 text-4xl font-bold sm:text-3xl"
            />
          </div>
          <div className="buttons flex gap-5">
            <a
              href=""
              className=" bg-black text-[1rem] text-white px-10 py-2 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              // href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul className=" flex gap-5">
              <li>
                <a href="">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

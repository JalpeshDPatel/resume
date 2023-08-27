import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300"></span>
        </div>
        {/* content*/}
        <div className="flex">
          <div className="left flex-1 w-full">
            <p className=" text-gray-700 font-medium w-[100%]">
              Here are my skills.
            </p>
            {/* right box */}
            <div className="right relative flex-1 flex flex-col p-5 gap-10 items-center justify-center sm:w-full">
              <div className="flex gap-12">
                <SkillBox
                  logo={<IoLogoNodejs />}
                  black={"white"}
                  white={"black"}
                  skill={"Node Js"}
                />
                <SkillBox
                  logo={<SiMongodb />}
                  black={"white"}
                  white={"black"}
                  skill={"MongoDB"}
                />
                <SkillBox
                  logo={<SiExpress />}
                  black={"black"}
                  white={"white"}
                  skill={"Express Js"}
                />
                <SkillBox
                  className=""
                  logo={<GrCode />}
                  black={"black"}
                  white={"white"}
                  skill={"C++"}
                />
              </div>
              <div className="flex gap-12">
                <SkillBox
                  logo={<IoLogoNodejs />}
                  black={"white"}
                  white={"black"}
                  skill={"Node Js"}
                />
                <SkillBox
                  logo={<SiMongodb />}
                  black={"white"}
                  white={"black"}
                  skill={"MongoDB"}
                />
                <SkillBox
                  logo={<SiExpress />}
                  black={"black"}
                  white={"white"}
                  skill={"Express Js"}
                />
                <SkillBox
                  className=""
                  logo={<GrCode />}
                  black={"black"}
                  white={"white"}
                  skill={"C++"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

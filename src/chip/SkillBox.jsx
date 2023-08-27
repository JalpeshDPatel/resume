import React from "react";

const SkillBox = ({ logo, black, white, skill }) => {
  return (
    <div
      className={
        "box w-[11rem] h-[11rem] rounded-lg bg-" +
        black +
        " text-" +
        white +
        " shadow-2xl flex flex-col items-center justify-center gap-4 p-1 "
      }
    >
      <div
        className={
          "bg-" +
          white +
          " text-" +
          black +
          " w-12 h-12 p-2 rounded-full flex items-center justify-center text-4xl"
        }
      >
        {logo}
      </div>
      <p className="font-semibold ">{skill}</p>
    </div>
  );
};

export default SkillBox;

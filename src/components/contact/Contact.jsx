import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400">Contact</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[100%] mx-auto mt-5 flex items-center justify-center ">
        <div className="left w-[70%] flex-1 flex items-center justify-center">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col ">
            <div>
              <h1 className="text-5xl font-bold">You Need</h1>
              <h3 className="text-xl">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] ">
              <BsArrowRight className="" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            className="flex justify-center items-center flex-col gap-5 w-[70%] mx-auto"
            action="mailto:xyz@gmail.com"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="Email"
              name=""
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Name"
              name=""
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name=""
              id=""
            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

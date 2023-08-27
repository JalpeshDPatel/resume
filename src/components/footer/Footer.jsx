import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto mt-16 h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-7">
        <h2 className=" font-bold text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8">
          <a
            href=""
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a
            href=""
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a
            href=""
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
          <a
            href=""
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaFacebook className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Facebook</p>
          </a>
        </div>
        <div className="">
          | Copyright &copy; <span>2023 Dev </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;

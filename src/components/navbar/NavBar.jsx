import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full mx-auto fixed top-0 py-2 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between">
        <div className="logo">
          <p href="" className="text-3xl font-bold">
            Jalpesh Patel.
          </p>
        </div>
        <div className="nav-items flex items-center space-x-11">
          <ul className="flex items-center space-x-11 m-auto">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="m-5 flex gap-6 items-center justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-yellow-600 font-bold ${
                    item.name === activeIndex ? "text-yellow-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href=""
              className="bg-black text-[1rem] text-white py-2 rounded-lg font-bold hover:text-yellow-400 m-5 mx-auto w-fit px-3"
            >
              HIRE ME
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

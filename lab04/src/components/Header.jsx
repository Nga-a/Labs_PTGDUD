import React, { useRef, useCallback } from "react";
import logo from "../assets/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";

const navLinks = [
  { title: "What to cook", href: "#" },
  { title: "Recipes", href: "#" },
  { title: "Ingredients", href: "#" },
  { title: "Occasions", href: "#" },
  { title: "About us", href: "#" },
  { title: "Why", href: "#" },
];

const Header = () => {
  const searchRef = useRef();

  const handleSearch = useCallback(() => {
    console.log("Searching for:", searchRef.current.value);
  }, []);

  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <a href="#">
        <img className="h-10" src={logo} alt="Logo" />
      </a>

      <div className="flex items-center border rounded-md px-2">
        <FaMagnifyingGlass className="text-gray-500" />
        <input ref={searchRef} type="text" placeholder="Search..." className="p-2 outline-none" />
        <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white px-4 py-1 rounded-md">Go</button>
      </div>

      <nav>
        <ul className="flex space-x-4">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a className="text-gray-700 hover:text-blue-500" href={navLink.href}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
        <IoImageOutline className="mr-2" /> Your Recipe Box
      </button>
    </header>
  );
};

export default Header;

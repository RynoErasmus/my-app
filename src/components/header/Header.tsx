import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Qualifications", path: "/qualifications" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black border-b-4 border-white p-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-Orbitron underline ">
          Ryno's Portfolio
        </h1>

        <button
          className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-full bg-white transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <ul className="hidden md:flex gap-3 md:gap-4 lg:gap-8 items-center ml-auto mt-3 pt-0.5">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="no-underline!">
              <li className="bg-[#FF0000] text-[clamp(0.8rem,2vw,1.25rem)] text-white min-w-20 px-4 py-2 flex items-center justify-center text-center rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-2xl hover:bg-white hover:text-[#FF0000]! hover:shadow-lg hover:shadow-[#FF0000]  transition ">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 mt-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="no-underline!">
              <li className="bg-[#b31212] text-[clamp(0.8rem,2vw,1.25rem)] text-white min-w-20 px-4 py-2 flex items-center justify-center text-center rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-2xl hover:bg-white hover:text-[#b31212] transition">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;

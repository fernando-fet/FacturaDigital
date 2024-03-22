import React, { useState } from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center">
        <a className="flex items-center  font-bold space-x-3  p1 rtl:space-x-reverse text-5xl ">
          <img src="logo1.jpg" className=" size-40 h-30 pt-8 " />
          <span className="self-center text-2xl fo nt-semibold whitespace-nowrap  text-primary  dark:text-white"></span>
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        }  top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="#home" className="hover:text-primary text-lg">
          Home
        </a>
        <a href="#Quienes_Somos" className="hover:text-primary text-lg ">
          Quienes Somos
        </a>
        <a href="#Servicios" className="hover:text-primary text-lg ">
          Servicios
        </a>

        <a href="#Contactos" className="hover:text-primary text-lg">
          Contactanos
        </a>

        <a
          href="#login"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Ingresar
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { Link } from 'react-scroll';

import ButtonSwitch from '../components/ButtonSwitch';
import Logo from '../components/Logo';
import NavbarLinks from '../components/NavbarLinks';

const Navbar = () => {
  interface Link {
    name: string;
    to: string;
  }

  const links: Link[] = [
    { name: 'Sobre mi', to: 'sobremi' },
    { name: 'Proyectos', to: 'proyects' },
    { name: 'Contactos', to: 'contact' },
  ];

  const [open, setOpen] = useState<boolean>(false);

  const [navbarColor, setNavbarColor] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        navbarColor
          ? 'w-full fixed top-0 left-0 dark:bg-gradient-to-br dark:from-black dark:to-slate-900     bg-slate-200  z-50 '
          : 'w-full fixed top-0 left-0   z-50'
      }
    >
      <nav className="lg:flex lg:justify-around  ">
        <div className="cursor-pointer ">
          <Logo />
        </div>
        <div
          className="text-3xl absolute right-5 top-7 cursor-pointer lg:hidden"
          onClick={handleOpen}
        >
          {open && <i className="fa-solid fa-x dark:text-white"></i>}
          {!open && <i className="fa-solid fa-bars dark:text-white"></i>}
        </div>
        <ul
          className={` lg:flex lg:items-center lg:justify-center lg:gap-5 md:flex md:justify-center md:gap-5 max-sm:flex max-sm:flex-col max-sm:gap-3 text-xl lg:text-xl bg-trasnparte  transition-500 ease-in ${
            open
              ? 'top-20 md:bg-opacity-0 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 bg-slate-200 '
              : 'max-sm:hidden md:hidden'
          }`}
        >
          {links.map(link => {
            return (
              <div key={link.name}>
                  <a href={`#${link.to}`}>
                    <NavbarLinks name={link.name} />
                  </a>
              </div>
            );
          })}
          <ButtonSwitch />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

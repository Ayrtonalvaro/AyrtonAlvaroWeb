import React from 'react';

const NavbarLinks = ({ name }: {name: string}) => {
  return (
    <>
      <li className="dark:hover:text-cyan-600 dark:text-white hover:text-blue-600  duration-200  cursor-pointer z-50 ">
        {name}
      </li>
    </>
  );
};

export default NavbarLinks;

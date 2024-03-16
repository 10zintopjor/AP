// DesktopNavLinks.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './Mylinks';

const DesktopNav = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? '' : menuName);
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center group hover:text-gray-400"
              onClick={() => toggleMenu(link.name)}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {activeMenu === link.name ? '▲' : '▼'}
              </span>
              <span className="text-xl md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {activeMenu === link.name && link.submenu && (
              <div className="absolute top-20">
                <div className="bg-white p-5 grid grid-cols-2 gap-4">
                  {link.sublinks.map((mysublink, index) => (
                    <div key={mysublink.name} className="w-full" style={{ height: 'auto' }}>
                      <li
                        className="text-gray-600 transition duration-300 ease-in-out hover:text-gray-400"
                        style={{ maxWidth: '180px', fontSize: '14px', lineHeight: '1.5', marginBottom: '8px' }}
                      >
                        <Link
                          to={mysublink.link}
                          className="text-base leading-normal"
                        >
                          {mysublink.name}
                        </Link>
                      </li>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default DesktopNav;

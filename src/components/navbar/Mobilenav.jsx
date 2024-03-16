import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './Mylinks';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? '' : menuName);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <div className="flex flex-col items-center my-auto">
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-4 py-5 hover:text-primary" onClick={() => toggleMenu(link.name)}>
            {link.name}
          </div>
          <AnimatePresence>
            {activeMenu === link.name && link.submenu && (
              <motion.ul
                className="mt-2 space-y-2"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {link.sublinks.map((sublink) => (
                  <li key={sublink.name}>
                    <Link
                      to={sublink.link}
                      className="py-2 hover:text-primary text-sm flex flex-col items-center"
                    >
                      {sublink.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
      {/* Button should be rendered outside of the mapping function */}
      <button className="bg-red-700 text-white px-8 py-3 m-7 rounded-full text-xl">
        Get Quote
      </button>
    </div>
  );
};

export default MobileNav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          {/* Desktop Menu */}
          <div className="text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
              <span className="text-xl md:hidden inline">
                {heading === link.name ? "▲" : "▼"}
                </span>

              </span>
              <span className="text-xl md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="">
                  <div
                    className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45"
                  ></div>
                </div>
                <div className="bg-white p-5 grid grid-cols-3 gap-10">
                  {link.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head}>
                      <h1 className="text-lg font-semibold">
                        {mysublinks.Head}
                      </h1>
                      {mysublinks.sublink.map((slink) => (
                        <li key={slink.name} className="text-sm text-gray-600 my-2.5">
                          <Link
                            to={slink.link}
                            className="hover:text-primary"
                          >
                            {slink.name}
                          </Link>
                        </li>
                      ))}
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

export default NavLinks;

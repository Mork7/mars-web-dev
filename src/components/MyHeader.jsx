"use client";

import { Navbar } from "flowbite-react";
import { useState } from "react";

export default function MyHeader() {
  const [activePage, setActivePage] = useState("home");

  const activeStyles = "text-white";
  const inactiveStyles = "text-gray-400";
  const linkStyles =
    "hover:bg-zinc-700 hover:!text-primary border-b-primary border-b-2 text-center font-semibold";

  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    // 72px is the height of the navbar
    <Navbar fluid className="bg-black sticky top-0 w-full h-[4.5rem] z-50">
      <Navbar.Brand href="#top">
        <img src="/favicon.svg" className="mr-3 h-12" alt="Mars Logo" />
        <img src="/mars_words.png" className="mr-3 h-9" alt="Web Development" />
      </Navbar.Brand>
      <Navbar.Toggle className="hover:bg-zinc-800  text-primary" />
      <Navbar.Collapse>
        <Navbar.Link
          href="#top"
          onClick={() => handleSetActivePage("home")}
          className={`${
            activePage === "home" ? activeStyles : inactiveStyles
          } ${linkStyles} border-t-primary border-t-[2px]`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#services"
          onClick={() => handleSetActivePage("services")}
          className={`${
            activePage === "services" ? activeStyles : inactiveStyles
          } ${linkStyles}`}
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          href="#templates"
          onClick={() => handleSetActivePage("gallery")}
          className={`${
            activePage === "templates" ? activeStyles : inactiveStyles
          } ${linkStyles}`}
        >
          Templates
        </Navbar.Link>
        <Navbar.Link
          href="#contact"
          onClick={() => handleSetActivePage("contact")}
          className={`${
            activePage === "contact" ? activeStyles : inactiveStyles
          } ${linkStyles}`}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

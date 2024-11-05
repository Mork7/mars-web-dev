import { Navbar } from "flowbite-react";
import { useState } from "react";

export default function MyHeader() {
  const [activePage, setActivePage] = useState("home");

  const activeStyles = "text-white";
  const inactiveStyles = "text-gray-400";
  const linkStyles =
    "hover:bg-zinc-700 hover:!text-primary border-b-primary border-b-2 text-center font-semibold bg-black hover:cursor-pointer";

  const handleSetActivePage = (page) => {
    setActivePage(page);

    if (page === "home") {
      // Scroll to the very top of the page for Home
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to specific section
      const section = document.getElementById(page);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Navbar fluid className="bg-black sticky top-0 w-full h-[4.5rem] z-50">
      <Navbar.Brand
        onClick={() => handleSetActivePage("home")}
        className="hover:cursor-pointer"
      >
        <img src="/favicon.svg" className="mr-3 h-12" alt="Mars Logo" />
        <img src="/mars-logo.png" className="mr-3 h-9" alt="Web Development" />
      </Navbar.Brand>
      <Navbar.Toggle className="hover:bg-zinc-800 text-primary" />
      <Navbar.Collapse className="bg-black">
        <Navbar.Link
          onClick={() => handleSetActivePage("home")}
          className={`${
            activePage === "home" ? activeStyles : inactiveStyles
          } ${linkStyles} border-t-primary border-t-[2px]`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          onClick={() => handleSetActivePage("services")}
          className={`${
            activePage === "services" ? activeStyles : inactiveStyles
          } ${linkStyles}`}
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          onClick={() => handleSetActivePage("templates")}
          className={`${
            activePage === "templates" ? activeStyles : inactiveStyles
          } ${linkStyles}`}
        >
          Templates
        </Navbar.Link>
        <Navbar.Link
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

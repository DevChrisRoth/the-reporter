import { Link } from "gatsby";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-white h-20 p-2 flex items-center justify-center sticky top-0 border-b">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <Link to="/" title="Zurück zur Startseite ">
          <img
            src="/theReporterLogo.png"
            alt="logo"
            className="h-12 w-auto min-w-full"
          />
        </Link>
        <div className="">
          <Link to="/" className="pr-2">
            STARTSEITE
          </Link>
          <Link to="/kolumnen">KOLUMNEN</Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

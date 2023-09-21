import { Link } from "gatsby";
import React, { useEffect } from "react";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    if (isDarkMode) {
      localStorage.theme = "light";
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <nav className="bg-white h-20 p-2 flex items-center justify-center sticky top-0 border-b dark:bg-dark-200 dark:border-b-dark-200">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <Link to="/" title="Zurück zur Startseite ">
          <img
            src="https://github.com/DevChrisRoth/the-reporter/blob/ce2777ab5c70ceeffc9a6bebcde22ee64c8097a3/static/theReporterLogo-removebg-preview.png?raw=true"
            alt="logo"
            className="h-12 w-auto min-w-full"
          />
        </Link>
        <div>
          <Link to="/" className="pr-2" activeClassName="underline">
            STARTSEITE
          </Link>
          <Link to="/kolumnen" activeClassName="underline">
            KOLUMNEN
          </Link>
        </div>
        <div onClick={changeTheme} className="cursor-pointer">
          Darkmode: <span>{isDarkMode ? "An" : "Aus"}</span>
        </div>
      </div>
    </nav>
  );
};

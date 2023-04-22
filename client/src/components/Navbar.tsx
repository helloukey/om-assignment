import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// assets
import logo from "../assets/om-logo.png";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

type Props = {};

const Navbar = (props: Props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    // change data-theme attribute of html element
    localStorage.setItem("theme", theme!);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme!);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
      <Link to="/" className="flex-1">
        <img src={logo} alt="OM" className="btn btn-ghost p-0" />
        <h1 className="text-lg font-bold mx-4">Open Mentorship</h1>
      </Link>
      <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
    </div>
  );
};
export default Navbar;

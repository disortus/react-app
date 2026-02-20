import { NavLink } from "react-router-dom";
import logo from "/vite.svg";

function Header() {
  return (
    <header className="sticky top-0 z-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-8 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 mb-6 sm:mb-10">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-7 h-7 sm:w-8 sm:h-8" />
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Todo</h1>
      </div>
      <nav className="flex items-center gap-4 sm:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm sm:text-base transition-colors hover:text-blue-400 ${
              isActive ? "text-blue-500 font-bold" : "text-zinc-400"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `text-sm sm:text-base transition-colors hover:text-blue-400 ${
              isActive ? "text-blue-500 font-bold" : "text-zinc-400"
            }`
          }
        >
          Tasks
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
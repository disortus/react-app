import { NavLink } from "react-router-dom";
import logo from "/vite.svg";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-zinc-950 border-b border-zinc-800 mb-8">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold">Todo</h1>
      </div>
      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-400 transition-colors ${isActive ? "text-blue-500 font-semibold" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `hover:text-blue-400 transition-colors ${isActive ? "text-blue-500 font-semibold" : ""}`
          }
        >
          Tasks
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-around">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:underline"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/schedule"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:underline"
        }
      >
        Schedule
      </NavLink>
      <NavLink
        to="/expenses"
        className={({ isActive }) =>
          isActive ? "font-bold underline" : "hover:underline"
        }
      >
        Expenses
      </NavLink>
    </nav>
  );
}

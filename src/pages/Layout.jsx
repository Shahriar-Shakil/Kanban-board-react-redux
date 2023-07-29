/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Layout({ children, page }) {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
        <h3>Kanban App</h3>

        <div className="ml-10">
          <Link
            class={`mx-2 text-sm font-semibold ${
              pathname === "/" ? "text-indigo-700" : "text-gray-600"
            } `}
            to="/"
          >
            Projects
          </Link>
          <Link
            class={`mx-2 text-sm font-semibold ${
              pathname === "/users" ? "text-indigo-700" : "text-gray-600"
            } `}
            to="/users"
          >
            Users
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}

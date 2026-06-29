import { PanelLeftOpen, Moon, Sun, Search, PanelLeftClose } from "lucide-react";
import { useContext, useState } from "react";


const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
  

   

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {sidebarOpen ? (
              <PanelLeftClose size={22} />
            ) : (
              <PanelLeftOpen size={22} />
            )}
          </button>

          <h1 className="hidden sm:block text-lg md:text-xl font-bold text-gray-800 dark:text-white">
            Analytics Dashboard
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search */}
          {/* <div className="flex md:flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent outline-none text-sm w-full lg:w-60"
            />
          </div> */}

          {/* Theme Toggle */}
          <button
            // onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {/* {darkMode ? <Sun size={20} /> : <Moon size={20} />} */}
          </button>

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { LayoutDashboard, BarChart3, CircleUser,Users } from "lucide-react";
import Analytics_logo from "../../assets/Analytics_logo.png";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ sidebarOpen }) {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/",
    },
  
    {
      name: "Users",
      icon: <Users size={20}/>,
      path: "/users",
    },
    {
      name: "Profile",
      icon: <CircleUser size={20} />,
      path: "/profile",
    },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 z-40 h-screen
        bg-gray-900 text-white
        transition-all duration-300 ease-in-out

        ${
          sidebarOpen
            ? "translate-x-0 w-64"
            : "-translate-x-full md:translate-x-0 md:w-20"
        }
      `}
    >
      {/* Logo */}
      <div className="p-4 flex items-center gap-3 border-b border-gray-700">
        <img
          src={Analytics_logo}
          alt="logo"
          className="w-10 h-10 rounded-full object-cover"
        />

        {sidebarOpen && (
          <h2 className="font-bold text-lg whitespace-nowrap">Dashboard</h2>
        )}
      </div>

      {/* Menu */}
      <ul className="p-4 space-y-2">
        {menus.map((menu) => {
          const isActive = location.pathname === menu.path;

          return (
            <li key={menu.name}>
              <Link
                to={menu.path}
                className={`
                  flex items-center gap-3 p-3 rounded-xl
                  transition-all duration-300
                  ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-800"}
                `}
              >
                <span className="flex-shrink-0">{menu.icon}</span>

                {sidebarOpen && (
                  <span className="font-medium">{menu.name}</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      <div className="absolute bottom-5 left-0 w-full px-4">
        <div className="bg-gray-800 rounded-xl p-3 text-center">
          {sidebarOpen ? (
            <>
              <p className="text-sm text-gray-300">Analytics Dashboard</p>
              <p className="text-xs text-gray-500 mt-1">Version 1.0</p>
            </>
          ) : (
            <div className="text-xs text-gray-400">v1.0</div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

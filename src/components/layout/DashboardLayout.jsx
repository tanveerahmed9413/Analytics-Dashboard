import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children,openModel,setOpenModel, }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 

  return (
    <div className="min-h-screen bg-[#F4F7FE]">
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300
        ${sidebarOpen ? "md:ml-64" : "md:ml-20"}`}
      >
        <Navbar openModel={openModel} setOpenModel={setOpenModel} setSidebarOpen={setSidebarOpen} SidebarOpen={sidebarOpen} />

        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}

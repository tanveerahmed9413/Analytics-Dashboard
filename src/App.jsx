import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import { tableData } from "./data/tableData";
import AddUserModal from "./components/model/AddUserModel";

function App() {
  const [allData, setAllData] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : tableData;
  });

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : tableData;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(allData));
  }, [allData]);

  const [openModel, setOpenModel] = useState(false);

  return (
    <BrowserRouter>
      <AddUserModal
        openModel={openModel}
        setOpenModel={setOpenModel}
        data={data}
        setData={setData}
        allData={allData}
        setAllData={setAllData}
      />
      <DashboardLayout openModel={openModel} setOpenModel={setOpenModel}>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                data={data}
                setData={setData}
                allData={allData}
                setAllData={setAllData}
                openModel={openModel}
                setOpenModel={setOpenModel}
              />
            }
          />

          <Route path="/profile" element={<Profile />} />
          <Route
            path="/users"
            element={
              <Users
                data={data}
                setData={setData}
                allData={allData}
                setAllData={setAllData}
              />
            }
          />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;

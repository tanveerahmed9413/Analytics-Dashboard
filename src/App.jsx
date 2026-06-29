import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";



function App() {
  return (
    <BrowserRouter>
    
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </DashboardLayout>
      
    </BrowserRouter>
  );
}

export default App;

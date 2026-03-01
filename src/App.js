import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./app/navbar/Navbar";
import Home from "./app/home/Home";
import Footer from "./app/footer/Footer";
import DashboardLayout from "./app/dashboard/DashboardLayout";
import FieldStatus from "./app/dashboard/FieldStatus";
import DashboardHome from "./app/dashboard/DashboardHome";
import AISchedule from "./app/dashboard/AISchedule";
import Analytics from "./app/dashboard/Analytics";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="field" element={<FieldStatus />} />
          <Route path="schedule" element={<AISchedule />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

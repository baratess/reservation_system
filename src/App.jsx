import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import "./App.css";
import Com from "./Pages/Communication/Com";
import Regulation from "./Pages/Regulation/Regulation";
import Appointment from "./Pages/Appointment/Appointment";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/iletişim" element={<Com />} />
      <Route path="/yönetmelik" element={<Regulation />} />
      <Route path="/randevu_al/*" element={<Appointment />} />
      <Route path="/profil" element={<Profile />} />
    </Routes>
  );
}

export default App;

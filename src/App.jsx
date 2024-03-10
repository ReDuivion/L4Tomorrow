import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/Layout/Layouts";
import LayoutsUser from "./components/Layout/LayoutsUser";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Me from "./pages/Me";
import Mail from "./pages/Mail";
import Url from "./pages/Url";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound"
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/me" element={<Me />} />
      <Route path="/" element={<Home />} />
      <Route path="/message/:urlId" element={<Url />} />
      <Route path="/me/mail" element={<Mail />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

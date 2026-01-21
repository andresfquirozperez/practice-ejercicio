import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";

export const MyRouters = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      // Cualquier ruta que no existe se usa *
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);

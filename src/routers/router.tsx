import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { UseEffectPage } from "../pages/UseEffectPage";
import { ImagenesPage } from "../pages/ImagenesPage";

export const MyRouters = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/useEffect" element={<UseEffectPage />} />
      <Route path="/images" element={<ImagenesPage />} />
      // Cualquier ruta que no existe se usa *
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);

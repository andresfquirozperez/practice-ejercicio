import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export const BtnVolver = () => {
  //Navegar por rutas
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 bg-white text-black hover:bg-[#d5d5d5] p-3 rounded-full shadow-lg cursor-pointer"
    >
      <Icon icon="si:arrow-left-fill" width="24" height="24" />
    </button>
  );
};

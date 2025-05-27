import { Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><a href="/TP5_EFSI2-Bebczuk_Susel/">Home</a></li>
          <li><a href="/TP5_EFSI2-Bebczuk_Susel/NuevasReservas">Nuevas reservas</a></li>
          <li><a href="/TP5_EFSI2-Bebczuk_Susel/MisCitas">Mis citas</a></li>
        </ul>
      </nav>      
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Navbar;
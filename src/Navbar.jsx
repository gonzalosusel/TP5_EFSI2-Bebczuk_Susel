import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/TP5_EFSI2-Bebczuk_Susel/">Home</Link></li>
          <li><Link to="/TP5_EFSI2-Bebczuk_Susel/NuevasReservas">Nuevas reservas</Link></li>
          <li><Link to="/TP5_EFSI2-Bebczuk_Susel/MisCitas">Mis citas</Link></li>
        </ul>
      </nav>      
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Navbar;
import { useEffect, useState } from 'react';
import Formulario from "../Formulario.jsx";
import '../index.css';

function NuevasReservas() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    setCitas(JSON.parse(localStorage.getItem("citas")) ?? []);
  }, []);

    return (
      <div className="container">
        <h1>Administrador de pacientes</h1>
        <Formulario citas = {citas} setCitas = {setCitas}/>
      </div>
    )
}

export default NuevasReservas

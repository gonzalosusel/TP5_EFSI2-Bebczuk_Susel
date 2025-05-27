import { useEffect, useState } from 'react';
import Listado from "../Listado.jsx";
import '../index.css';

function NuevasReservas() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    setCitas(JSON.parse(localStorage.getItem("citas")) ?? []);
  }, []);

    return (
      <div className="container">
        <h1>Lista de citas:</h1>
        <Listado citas = {citas}/>
      </div>
    )
}

export default NuevasReservas

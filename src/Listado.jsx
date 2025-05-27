import Citas from "./Citas.jsx"
import './Listado.css'

function Listado({citas}){
    return(
      <div className="Listado">
        {citas.map((cita, i) => <Citas key={i} cita={cita}></Citas>)}
      </div>
    ); 

}

export default Listado
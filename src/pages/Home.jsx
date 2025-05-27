import '../index.css';

function Home() {

    return (
      <div className="container">
        <h1>Bienvenido al TP5 EFSI</h1>

        <div style={{display: "flex", justifyContent: "center", gap: 10}}>
          <a href="/TP5_EFSI2-Bebczuk_Susel/MisCitas"><button>Mis citas</button></a>
          <a href="/TP5_EFSI2-Bebczuk_Susel/NuevasReservas"><button>Nuevas reservas</button></a>
        </div>
      </div>
    )
}

export default Home

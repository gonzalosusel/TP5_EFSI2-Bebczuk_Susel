import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NuevasReservas from "./pages/NuevasReservas";
import MisCitas from "./pages/MisCitas";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TP5_EFSI2-Bebczuk_Susel/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/TP5_EFSI2-Bebczuk_Susel/NuevasReservas" element={<NuevasReservas />} />
          <Route path="/TP5_EFSI2-Bebczuk_Susel/MisCitas" element={<MisCitas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

import Contenido from "./views/Contenido";
import Menu from "./componentes/Menu";
import Banner from "./componentes/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./context/DataProvider";
import Seccion2 from "./views/Seccion2";
import Seccion3 from "./views/Seccion3";

function App() {

  return (
    <BrowserRouter>
      <DataProvider>
        <Menu />
        <Banner />
        <Routes>
          <Route path="/" element={<Contenido />} ></Route>
          <Route path="/seccion2" element={<Seccion2 />} ></Route>
          <Route path="/seccion3" element={<Seccion3 />} ></Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App

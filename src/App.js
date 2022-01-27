import './App.scss';
import { useState } from "react";


const App = () => {

  const [ color, setColor ] = useState("rojo")
  const [ boton, setBoton ] = useState("FONDO AZUL")

  const cambiarEstado = () => {
    color === "rojo" ? setColor("azul") : setColor("rojo");
    boton === "FONDO ROJO" ? setBoton("FONDO AZUL") : setBoton("FONDO ROJO") 
  }

  return (
    <div className="App">
      <div className={"tarjeta " + `${color}`}>
        <button onClick={cambiarEstado}>{boton}</button>
      </div>
    </div>
  );
}

export default App;

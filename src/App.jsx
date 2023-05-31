import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";



function App() {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [datos, setDatos] = useState({});
  const [error, setError] = useState(false)
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false)

  function handleSubmit(e) {
    let nombreSinEspacios = nombre.trim();

    e.preventDefault();
    
    if (nombreSinEspacios.length > 3 && color.length === 6) {
      
      setDatos({ nombre, color});
      console.log(nombre, color);
      setError(false)
      setMostrarTarjeta(true)
      setNombre("");
      setColor("");
    }else{
      setError(true)
      setMostrarTarjeta(false)
      console.log('error');
    }
  }

  return (
    <div className="app">
      <h1>Completar formulario</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          gap: "10px",
          border: "1px solid purple",
          borderRadius: '10px',
          boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'
        }}
      >
        <label style={{ margin: "auto", marginTop:'10px'}}>Ingresar nombre:</label>
        <input
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: "200px", margin: "auto" }}
          type="text"
          placeholder="nombre"
          value={nombre}
        />
        <label style={{ margin: "auto" }}>Ingrese color:</label>
        <input
          onChange={(e) => setColor(e.target.value)}
          style={{ width: "200px", margin: "auto" }}
          type="text"
          placeholder="000000"
          value={color}
        />
        <button type="submit" style={{ width: "100px", margin: "auto", marginBottom:'10px' }}>
          Enviar
        </button>
        {error && <p style={{alignItems:'center',color:'red',  width:'240px', margin:'auto', padding:'auto'}}>Por favor chequea que la información sea correcta</p>}
        
      </form>
      {mostrarTarjeta && <Card datos ={datos} />}
    </div>
  );
}

export default App;

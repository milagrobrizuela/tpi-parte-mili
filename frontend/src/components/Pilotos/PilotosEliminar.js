import React, { useState, useEffect } from "react";
import axios from "axios";
import ListadoPilotos from "./PilotosListado";

const EliminarPilotos = ({ onBackClick }) => {
  // Estado para almacenar el ID del piloto a eliminar
  const [piloto, setEliminar] = useState("");
  
  // Estado para almacenar la lista de pilotos
  const [listaPilotos, setListaPilotos] = useState([]);

  useEffect(() => {
    // Función para obtener la lista de pilotos al cargar el componente
    obtenerPilotos();
  }, []);

  const obtenerPilotos = () => {
    // Obtener la lista de pilotos desde el servidor
    axios
      .get("http://localhost:3001/pilotos/getAll")
      .then((response) => {
        // Actualizar el estado con la lista de pilotos obtenida
        setListaPilotos(response.data);
      })
      .catch((error) => {
        // Manejo de errores en caso de falla en la petición
        alert(error.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (piloto) {
      // Realizar la eliminación del piloto mediante una petición DELETE al servidor
      axios
        .delete(`http://localhost:3001/pilotos/${piloto}`)
        .then((response) => {
          // Mostrar una alerta con el resultado de la eliminación
          alert(`Se eliminó el piloto con id ${piloto}.`);
          // Actualizar la lista de pilotos después de la eliminación
          obtenerPilotos();
        })
        .catch((error) => {
          // Manejo de errores en caso de falla en la petición
          alert(error.message);
        });
    } else {
      // Mostrar un mensaje de alerta si no se ingresa el ID del piloto a eliminar
      alert("Por favor, ingresa el ID del piloto a eliminar.");
    }
  };

  const handleBackClick = () => {
    // Llamar a la función de vuelta atrás del componente padre
    onBackClick();
  };

  return (
    <div>
      <ListadoPilotos lista={listaPilotos} />
      <h1>Eliminar Piloto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="IdPiloto">Identificador de piloto:</label>
        <input
          id="piloto"
          type="number"
          value={piloto}
          onChange={(event) => setEliminar(event.target.value)}
          className="input"
        />
        <button type="submit" className="aceptar-button">Aceptar</button>
      </form>
      <br />
      <button className="back-button" onClick={handleBackClick}>
        Volver atrás
      </button>
  </div>
  );
};

export default EliminarPilotos;

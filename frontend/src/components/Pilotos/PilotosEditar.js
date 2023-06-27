import React, { useState, useEffect } from "react";
import axios from "axios";
import PilotosForm from "./PilotosForm.js";

const EditarPilotos = ({ onBackClick }) => {
  // Estado para la lista de pilotos
  const [pilotos, setPiloto] = useState([]);
  // Estado para almacenar el piloto seleccionado
  const [pilotoSeleccionado, setPilotoSeleccionado] = useState(null);

  // Obtiene la lista de pilotos al cargar el componente
  useEffect(() => {
    axios
      .get("http://localhost:3001/pilotos/getAll")
      .then((response) => {
        setPiloto(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  // Maneja el clic en el botón "Editar" de un piloto
  const handleEdit = (piloto) => {
    setPilotoSeleccionado(piloto);
  };

  // Maneja la actualización de un piloto
  const handleUpdate = (piloto) => {
    axios
      .put(`http://localhost:3001/pilotos/${piloto.Id}`, piloto)
      .then((response) => {
        setPiloto(pilotos.map((p) => (p.Id === piloto.Id ? piloto : p)));
        setPilotoSeleccionado(null);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Maneja el clic en el botón "Volver atrás"
  const handleBackClick = () => {
    onBackClick();
  };

  return (
    <div className="form">
      <h1>Listado de Pilotos</h1>
      <table>
        <thead>
          <tr>
            <th>IdPiloto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>FechaNacimiento</th>
            <th>Nacionalidad</th>
            <th>IdVuelo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pilotos.map((piloto) => (
            <tr key={piloto.Id}>
              <td>{piloto.Id}</td>
              <td>{piloto.Nombre}</td>
              <td>{piloto.Apellido}</td>
              <td>{piloto.FechaNacimiento}</td>
              <td>{piloto.Nacionalidad}</td>
              <td>{piloto.IdVuelo}</td>
              <td>
                <button onClick={() => handleEdit(piloto)} className="editar-button">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {pilotoSeleccionado && (
        <>
          <h1>Editar Piloto</h1>
          <PilotosForm piloto={pilotoSeleccionado} onSave={handleUpdate} />
        </>
      )}

      <br />
      <button className="back-button" onClick={handleBackClick}>
        Volver atrás
      </button>
    </div>
  );
};

export default EditarPilotos;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListadoPilotos from './PilotosListado';

const PilotosCrear = ({ onBackClick }) => {
  // Estado para almacenar los datos del piloto a crear
  const [piloto, setPiloto] = useState({
    Nombre: '',
    Apellido: '',
    FechaNacimiento: '',
    Nacionalidad: '',
    IdVuelo: ''
  });
  // Estado para almacenar la lista de pilotos existentes
  const [listaPilotos, setListaPilotos] = useState([]);

  // Maneja el cambio en los campos de entrada del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPiloto((prevPiloto) => ({
      ...prevPiloto,
      [name]: value
    }));
  };

  // Maneja el envío del formulario para crear un nuevo piloto
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:3001/pilotos', piloto)
      .then((response) => {
        alert(`Se creó el piloto con id ${response.data.Id}.`);
        setPiloto({
          Nombre: '',
          Apellido: '',
          FechaNacimiento: '',
          Nacionalidad: '',
          IdVuelo: ''
        });
        obtenerPilotos(); // Actualiza la lista de pilotos
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Obtiene la lista de pilotos al cargar el componente
  useEffect(() => {
    obtenerPilotos();
  }, []);

  // Obtiene la lista de pilotos desde el servidor
  const obtenerPilotos = () => {
    axios
      .get('http://localhost:3001/pilotos/getAll')
      .then((response) => {
        setListaPilotos(response.data);
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
    <div>
      <ListadoPilotos lista={listaPilotos} /> {/* Renderiza el componente de listado de pilotos */}
      <h1>Crear Piloto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nombre">Nombre:</label>
        <input
          id="Nombre"
          name="Nombre"
          type="text"
          value={piloto.Nombre}
          onChange={handleChange}
          className="input"
        />
        <br />
        <label htmlFor="Apellido">Apellido:</label>
        <input
          id="Apellido"
          name="Apellido"
          type="text"
          value={piloto.Apellido}
          onChange={handleChange}
          className="input"
        />
        <br />
        <label htmlFor="FechaNacimiento">Fecha de Nacimiento:</label>
        <input
          id="FechaNacimiento"
          name="FechaNacimiento"
          type="date"
          value={piloto.FechaNacimiento}
          onChange={handleChange}
          className="input"
        />
        <br />
        <label htmlFor="Nacionalidad">Nacionalidad:</label>
        <input
          id="Nacionalidad"
          name="Nacionalidad"
          type="text"
          value={piloto.Nacionalidad}
          onChange={handleChange}
          className="input"
        />
        <br />
        <label htmlFor="IdVuelo">Identificador de vuelo:</label>
        <input
          id="IdVuelo"
          name="IdVuelo"
          type="number"
          value={piloto.IdVuelo}
          onChange={handleChange}
          className="input"
        />
        <br />
        <button type="submit" className="aceptar-button">Aceptar</button>
      </form>
      <br />
      <button className="back-button" onClick={handleBackClick}>
        Volver atrás
      </button>
    </div>
  );
};

export default PilotosCrear;

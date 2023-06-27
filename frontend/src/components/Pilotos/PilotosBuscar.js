import React, { useState } from 'react';
import axios from 'axios';
import ListadoPilotos from './PilotosListado';

const PilotosBuscar = ({ onTableSelect, onBackClick }) => {
  // Estado para almacenar el valor del filtro de búsqueda
  const [filtro, setFiltro] = useState('');
  // Estado para almacenar la lista filtrada de pilotos encontrados
  const [listaFiltrada, setListaFiltrada] = useState([]);
  // Estado para almacenar el mensaje de error, en caso de producirse
  const [error, setError] = useState('');

  // Maneja el cambio en el campo de entrada del filtro de búsqueda
  const handleInputChange = (event) => {
    setFiltro(event.target.value);
  };

  // Maneja el clic en el botón de búsqueda
  const handleBuscarClick = async () => {
    try {
      // Realiza una solicitud GET al servidor para buscar los pilotos según el filtro
      const response = await axios.get(`http://localhost:3001/pilotos/getByNacionalidad?filtro=${filtro}`);

      if (response.status === 200) {
        // Si la respuesta es exitosa, actualiza la lista filtrada con los datos recibidos
        setListaFiltrada(response.data);
        setError('');
        onTableSelect('Pilotos'); // Notifica al componente padre la selección de la tabla "pilotos"
      } else {
        // Si la respuesta no es exitosa, muestra el mensaje de error correspondiente
        setListaFiltrada([]);
        setError(response.data.error || 'Error al realizar la búsqueda');
      }
    } catch (error) {
      // Si ocurre un error en la solicitud, muestra un mensaje genérico de error
      setListaFiltrada([]);
      setError('Error al realizar la búsqueda');
    }
  };

  // Maneja el clic en el botón "Volver atrás"
  const handleBackClick = () => {
    onTableSelect(''); // Notifica al componente padre que la tabla ha sido deseleccionada
    onBackClick(); // Llama a la función de vuelta atrás del componente padre
  };

  return (
    <div>
      <ListadoPilotos lista={listaFiltrada} />
      <div className="buscar-pilotos-container">
        <h1>Buscar Pilotos</h1>
        <label htmlFor="Nacionalidad">País de origen del piloto:</label>
        <input
          type="text"
          value={filtro}
          onChange={handleInputChange}
          className="input"
        />
        <button onClick={handleBuscarClick} className="aceptar-button">
          Aceptar
        </button>
      </div>
      {error && <p>{error}</p>}
      <br />
      <button className="back-button" onClick={handleBackClick}>
        Volver atrás
      </button>
    </div>
  );
};

export default PilotosBuscar;

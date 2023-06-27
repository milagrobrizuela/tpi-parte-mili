import React, { useState, useEffect } from 'react';

const PilotosForm = ({ piloto, onSave }) => {
  // Estados para almacenar los valores de los campos del formulario
  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [FechaNacimiento, setFechaNacimiento] = useState('');
  const [Nacionalidad, setNacionalidad] = useState('');
  const [IdVuelo, setIdVuelo] = useState('');

  useEffect(() => {
    // Actualizar los estados cuando se proporciona un objeto "piloto" como prop
    if (piloto) {
      setNombre(piloto.Nombre);
      setApellido(piloto.Apellido);
      setFechaNacimiento(piloto.FechaNacimiento);
      setNacionalidad(piloto.Nacionalidad);
      setIdVuelo(piloto.IdVuelo);
    }
  }, [piloto]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Nombre && Apellido && FechaNacimiento && Nacionalidad && IdVuelo) {
      // Llamar a la función onSave con los datos del piloto actualizado
      onSave({
        ...piloto,
        Nombre: Nombre,
        Apellido: Apellido,
        FechaNacimiento: FechaNacimiento,
        Nacionalidad: Nacionalidad,
        IdVuelo: IdVuelo
      });
    } else {
      alert('Todos los campos deben estar completados para enviar.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-group">
          <label htmlFor="Nombre">Nombre:</label>
          <input
            id="Nombre"
            type="text"
            value={Nombre}
            onChange={(event) => setNombre(event.target.value)}
            className="input"
          />
        </div>
        {/* Resto de campos del formulario con etiquetas, valores y controladores de cambio */}
        {/* ... */}
        <button type="submit" className="aceptar-button">Aceptar</button>
      </div>
    </form>
  );
};

export default PilotosForm;

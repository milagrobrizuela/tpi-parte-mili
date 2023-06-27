import React from 'react';

const ListadoPilotos = ({ lista }) => {
  // Verificar si la prop "lista" es un array
  if (!Array.isArray(lista)) {
    return <p>No hay pilotos encontrados.</p>;
  }

  return (
    <div className="container mt-3">
      <h1>Listado de Pilotos</h1>
      <table className="listado listado-striped">
        <thead>
          <tr>
            <th>IdPiloto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Nacionalidad</th>
            <th>IdVuelo</th>
          </tr>
        </thead>
        <tbody>
          {/* Iterar sobre la lista de pilotos y generar las filas de la tabla */}
          {lista.map((piloto) => (
            <tr key={piloto.Id}>
              <td>{piloto.Id}</td>
              <td>{piloto.Nombre}</td>
              <td>{piloto.Apellido}</td>
              <td>{piloto.FechaNacimiento}</td>
              <td>{piloto.Nacionalidad}</td>
              <td>{piloto.IdVuelo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPilotos;

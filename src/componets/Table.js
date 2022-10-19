import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const data = useContext(AppContext);

  return (
    <>
      <head>Projeto Star Wars - Trybe</head>
      <select>Coluna</select>
      <select>Operador</select>
      <button
        type="button"
      >
        Filtrar

      </button>
      <select>Ordenar</select>

      <table>
        <thead>
          <tbody>
            {
              data?.map((e) => (
                <tr key={ e.id }>
                  <td>{e.name}</td>
                  <td>{e.rotation_period}</td>
                  <td>{e.orbital_period}</td>
                  <td>{e.diameter}</td>
                  <td>{e.climate}</td>
                  <td>{e.gravity}</td>
                  <td>{e.terrain}</td>
                  <td>{e.surface_water}</td>
                  <td>{e.population}</td>
                  <td>{e.films.length}</td>
                  <td>{e.created}</td>
                  <td>{e.edited}</td>
                  <td>{e.url}</td>
                </tr>
              ))
            }
          </tbody>
        </thead>
      </table>
    </>
  );
}

export default Table;

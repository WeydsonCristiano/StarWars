import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const data = useContext(AppContext);

  return (
    <>
      <hearder>Projeto Star Wars - Trybe</hearder>
      <div>

        <label htmlFor="coluna">
          Coluna:
          <select
            name="coluna"
          >
            0
          </select>
        </label>
        <label htmlFor="Operador">
          Operador:
          <select
            name="Operador"
          >
            0
          </select>
        </label>
        <input />
        <button
          type="button"
        >
          Filtrar
        </button>
        <label htmlFor="Ordenar">
          Ordenar:
          <select
            name="Ornedar"
          >
            0
          </select>
        </label>
        <button
          type="button"
        >
          Acendente
        </button>
        <button
          type="button"
        >
          Decendente
        </button>
        <button
          type="button"
        >
          Ordenar
        </button>
        <button
          type="button"
        >
          Remover Filtros
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films.length</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
      </table>
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

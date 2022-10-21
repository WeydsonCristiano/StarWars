import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data, name } = useContext(AppContext);

  return (
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
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        { data.filter((el) => el.name.toUpperCase()
          .includes(name.toUpperCase()))
          .map((e) => (
            <tr key={ e.name }>
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
          ))}
      </tbody>
    </table>
  );
}

export default Table;

import React from 'react';

function Forms() {
  return (
    <forms>
      <label htmlFor="coluna">
        Coluna:
        <select name="coluna" id="">
          <option>rotation_period</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>climate</option>
          <option>terrain</option>
          <option>surface_water</option>
          <option>population</option>
        </select>
      </label>
      <label htmlFor="operador">
        Operador:
        <select name="operador" id="">
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <input type="number" />
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
    </forms>
  );
}

export default Forms;

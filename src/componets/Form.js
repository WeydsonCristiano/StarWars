import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Form() {
  const { handleName, name } = useContext(AppContext);

  return (
    <form>
      <label htmlFor="coluna">
        Coluna:
        <select name="coluna" id="">
          <option
            value="rotation_period"
          >
            rotation_period
          </option>
          <option
            value="orbital_period"
          >
            orbital_period
          </option>
          <option
            value="diameter"
          >
            diameter
          </option>
          <option
            value="climate"
          >
            climate
          </option>
          <option
            value="terrain"
          >
            terrain
          </option>
          <option
            value="surface_water"
          >
            surface_water
          </option>
          <option
            value="population"
          >
            population
          </option>
        </select>
      </label>
      <label htmlFor="operador">
        Operador:
        <select name="operador" id="">
          <option
            value=""
          >
            maior que
          </option>
          <option
            value=""
          >
            menor que
          </option>
          <option
            value=""
          >
            igual a
          </option>
        </select>
      </label>
      <label htmlFor="fitroname">
        <input
          data-testid="name-filter"
          name="filtroname"
          value={ name }
          onChange={ handleName }
          type="text"
        />
      </label>
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
    </form>
  );
}

export default Form;

import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Form() {
  const {
    coluna,
    operator,
    numb,
    handleColuna,
    handleOperator,
    handleNumb, handleClick } = useContext(AppContext);

  return (
    <form>
      <label htmlFor="coluna">
        Coluna:
        <select
          data-testid="column-filter"
          value={ coluna }
          onChange={ handleColuna }
          name="coluna"
          id=""
        >
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
        <select
          data-testid="comparison-filter"
          value={ operator }
          onChange={ handleOperator }
          name="operador"
          id=""
        >
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
          data-testid="value-filter"
          value={ numb }
          onChange={ handleNumb }
          type="number"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
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

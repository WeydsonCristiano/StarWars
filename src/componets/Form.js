import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Form() {
  const {
    coluna,
    operator,
    numb,
    handleColuna,
    handleOperator,
    handleNumb, setFiltros, filtros } = useContext(AppContext);

  const handleRemove = (id) => {
    const newFiltro = filtros.filter((filter) => filter.id !== id);
    setFiltros(newFiltro);

    console.log('clicou');
  };

  const handleClick = () => {
    console.log('clicou');
    setFiltros((prevState) => [
      ...prevState,
      {
        id: Math.randon(),
        coluna,
        operator,
        numb,
      },
    ]);
  };

  return (
    <>
      <form>
        <label htmlFor="coluna">
          Coluna:
          <select
            data-testid="column-filter"
            value={ coluna }
            onChange={ handleColuna }
            name="coluna"
            id="coluna"
          >
            <option
              value="population"
            >
              population
            </option>
            <option
              value="orbital_period"
            >
              orbital_period
            </option>
            <option
              value="rotation_period"
            >
              rotation_period
            </option>
            <option
              value="diameter"
            >
              diameter
            </option>
            <option
              value="surface_water"
            >
              surface_water
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
            id="operador"
          >
            <option
              value="maior que"
            >
              maior que
            </option>
            <option
              value="menor que"
            >
              menor que
            </option>
            <option
              value="igual a"
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
          data-testid="filter"
          type="button"
          onClick={ handleRemove }
        >
          Remover Filtros
        </button>
      </form>
      <ul>
        {
          filtros.map(({ id, coluna, operator, numb }) => (
            <li data-testid="filter" key={ id }>
              {`${coluna} ${operator} ${numb}`}
              { ' ' }
              <button
                type="button"
                onClick={ () => handleRemove(id) }
              >
                Excluir
              </button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default Form;

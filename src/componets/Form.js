import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function Form() {
  const [colunaFiltrada, setColunafiltrada] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const {
    coluna,
    operator,
    numb,
    handleColuna,
    handleOperator,
    handleNumb, setFiltros, filtros } = useContext(AppContext);

  const handleClick = () => {
    setFiltros((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        coluna,
        operator,
        numb,
      },
    ]);
    const novaColum = colunaFiltrada.filter((optionColum) => optionColum !== coluna);
    setColunafiltrada(novaColum);
  };

  const handleRemove = (id) => {
    const newFiltro = filtros.filter((filter) => filter.id !== id);
    setFiltros(newFiltro);
  };
  const handleAllRemove = (id) => {
    const zerarFilter = filtros.filter((filter) => filter.id === id);
    setFiltros(zerarFilter);
  };

  return (
    <>
      <form>
        Coluna:
        <select
          data-testid="column-filter"
          value={ coluna }
          onChange={ handleColuna }
        >
          {colunaFiltrada.map((e) => (
            <option key={ e } value={ e }>
              {e}
            </option>
          ))}
        </select>
        Operador:
        <select
          data-testid="comparison-filter"
          value={ operator }
          onChange={ handleOperator }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          value={ numb }
          onChange={ handleNumb }
          type="number"
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClick }
        >
          Filtrar
        </button>
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
          data-testid="button-remove-filters"
          type="button"
          onClick={ () => { handleAllRemove(); } }
        >
          Remover Filtros
        </button>
      </form>
      <ul>
        {
          filtros.map((
            { id, coluna: colunafiltro, operator: operatorfiltro, numb: numbfiltro },
          ) => (
            <li data-testid="filter" key={ id }>
              {`${colunafiltro} ${operatorfiltro} ${numbfiltro}`}
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

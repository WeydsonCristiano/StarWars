import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Form() {
  const {
    coluna,
    operator,
    numb,
    handleColuna,
    handleOperator,
    handleNumb,
    setFiltros,
    filtros,
    colunaFiltrada,
    setColunafiltrada, setColuna } = useContext(AppContext);

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
    setColuna(novaColum[0]);
  };

  const handleRemove = (id, colunafiltro) => {
    const newFiltro = filtros.filter((filter) => filter.id !== id);
    setFiltros(newFiltro);
    setColunafiltrada([...colunaFiltrada, colunafiltro]);
  };

  const handleAllRemove = (id) => {
    const zerarFilter = filtros.filter((filter) => filter.id === id);
    setFiltros(zerarFilter);
    setColunafiltrada(['population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water']);
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
                onClick={ () => handleRemove(id, colunafiltro) }
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

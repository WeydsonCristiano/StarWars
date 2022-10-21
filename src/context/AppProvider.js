import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [colunaFiltrada, setColunafiltrada] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [coluna, setColuna] = useState(colunaFiltrada[0]);

  const [operator, setOperator] = useState('maior que');
  const [numb, setNumb] = useState(0);
  const [planetas, setPlanetas] = useState([]);
  const [filtros, setFiltros] = useState([]);

  useEffect(() => {
    let newPlanets = ([...planetas]);
    filtros.forEach((cris) => {
      switch (cris.operator) {
      case 'maior que': {
        newPlanets = newPlanets
          .filter((e) => Number(e[cris.coluna]) > Number(cris.numb));
        break;
      }
      case 'menor que': {
        newPlanets = newPlanets
          .filter((e) => Number(e[cris.coluna]) < Number(cris.numb));
        break;
      }
      default: {
        newPlanets = newPlanets
          .filter((e) => Number(e[cris.coluna]) === Number(cris.numb));
        break;
      }
      }
    });
    setData(newPlanets);
  }, [filtros]);

  const handleColuna = ({ target }) => {
    setColuna(target.value);
  };

  const handleOperator = ({ target }) => {
    setOperator(target.value);
  };

  const handleNumb = ({ target }) => {
    setNumb(target.value);
  };

  const handleName = ({ target }) => {
    setName(target.value);
  };

  useEffect(() => {
    const requestApi = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const { results } = await response.json();
      const filtroResident = results.filter((e) => delete e.residents);
      setData(filtroResident);
      setPlanetas(filtroResident);
    };
    requestApi();
  }, []);

  const contexto = useMemo(() => ({
    data,
    name,
    coluna,
    operator,
    numb,
    filtros,
    colunaFiltrada,
    setColunafiltrada,
    setFiltros,
    handleName,
    handleColuna,
    handleOperator,
    handleNumb,
    setColuna,
  }), [data, name, coluna, operator, numb, colunaFiltrada]);

  return (
    <AppContext.Provider value={ contexto }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default AppProvider;

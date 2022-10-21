import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [coluna, setColuna] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [numb, setNumb] = useState(0);
  const [planetas, setPlanetas] = useState([]);
  const [filtros, setFiltros] = useState([]);

  useEffect(() => {
    setData([...planetas]);
    filtros.forEach((cris) => {
      switch (cris.operator) {
      case 'maior que': {
        const filterColun = data
          .filter((e) => Number(e[cris.coluna]) > Number(cris.numb));
        return setData(filterColun);
      }
      case 'menor que': {
        const filterColun2 = data
          .filter((e) => Number(e[cris.coluna]) < Number(cris.numb));
        return setData(filterColun2);
      }
      case 'igual a': {
        const filterColun3 = data
          .filter((e) => Number(e[cris.coluna]) === Number(cris.numb));
        return setData(filterColun3);
      }
      default:
        return cris;
      }
    });
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

  const handleRemove = ({ target }) => {
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
    setFiltros,
    handleName,
    handleColuna,
    handleOperator,
    handleNumb,
  }), [data, name, coluna, operator, numb, setFiltros]);

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

import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [coluna, setColuna] = useState('rotation_period');
  const [operator, setOperator] = useState('maior que');
  const [numb, setNumb] = useState(0);
  const [clickOnOff, setClickOnoff] = useState(false);

  const [caractColun, setCaractColun] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setClickOnoff(true);
    setCaractColun(() => [
      ...caractColun,
      {
        coluna,
        operator,
        numb,
      },
    ]);
  };

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
      console.log(filtroResident);
    };
    requestApi();
  }, []);

  const contexto = useMemo(() => ({
    data,
    name,
    coluna,
    operator,
    numb,
    caractColun,
    clickOnOff,
    handleName,
    handleColuna,
    handleOperator,
    handleNumb,
    handleClick,
  }), [
    data,
    name,
    coluna,
    operator,
    numb,
    caractColun,
    clickOnOff,
  ]);

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

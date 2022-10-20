import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

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
    handleName,
  }), [data, name]);

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

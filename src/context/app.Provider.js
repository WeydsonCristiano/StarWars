import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);

  const requestApi = async () => {
    const endpoint = 'https://swapi.dev/api/planets';
    const response = await fetch(endpoint);
    const { result } = await response.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <AppContext.Provider value={ data }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default AppProvider;

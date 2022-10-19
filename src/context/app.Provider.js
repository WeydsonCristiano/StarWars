import { useEffect } from 'react';
import AppContext from './appContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);

  const requestApi = async () => {
    const endpoint = await fetch('https://swapi.dev/api/planets');
    const { result } = await endpoint.json();
    setData(result);
  };

  useEffect(() => {
    requestApi();
  }, []);

  const contexto = { data };
  console.log(data);
  return (
    <AppContext.Provider value={ contexto }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;

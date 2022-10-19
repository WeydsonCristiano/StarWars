import AppContext from './appContext';

function appProvider({ children }) {
  // const contexto = {
  // };
  return (
    <AppContext.Provider value={ contexto }>
      { children }
    </AppContext.Provider>
  );
}

export default appProvider;

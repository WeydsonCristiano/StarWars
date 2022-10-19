import React from 'react';
import './App.css';
import AppProvider from './context/app.Provider';

function App() {
  return (
    <AppProvider>
      <h1>estou aqui Provider</h1>
    </AppProvider>
  );
}
export default App;

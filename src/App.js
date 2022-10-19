import React from 'react';
import './App.css';
import Table from './componets/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Table />
    </AppProvider>
  );
}
export default App;

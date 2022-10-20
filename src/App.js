import React from 'react';
import './App.css';
import Forms from './componets/Form';
import Header from './componets/Header';
import Table from './componets/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Header />
      <Forms />
      <Table />
    </AppProvider>
  );
}
export default App;

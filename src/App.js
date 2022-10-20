import React from 'react';
import './App.css';
import Form from './componets/Form';
import Header from './componets/Header';
import Table from './componets/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Header />
      <Form />
      <Table />
    </AppProvider>
  );
}
export default App;

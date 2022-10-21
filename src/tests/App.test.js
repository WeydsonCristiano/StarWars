import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('verificar os data-testId', () => {
    render(<App />);
    const inputTestId = screen.getByTestId('name-filter');
    expect(inputTestId).toBeInTheDocument();

    const inputValueTestId = screen.getByTestId('value-filter');
    expect(inputValueTestId).toBeInTheDocument();

    const botaoTestId = screen.getByTestId('button-filter');
    expect(botaoTestId).toBeInTheDocument();

    const botaoRemoverTestId = screen.getByTestId('button-remove-filters');
    expect(botaoRemoverTestId).toBeInTheDocument();

    const columTestId = screen.getByTestId('column-filter');
    expect(columTestId).toBeInTheDocument();
  })

  test('verificar itens na tela', () => {
    render(<App />);
    const h1natela = screen.getByRole('heading', {
      name: /projeto star wars \- trybe/i
    })
    expect(h1natela).toBeInTheDocument();

    const inputValue = screen.getByRole('spinbutton');
    expect(inputValue).toBeInTheDocument();

    const botaoRemove = screen.getByRole('button', {
      name: /remover filtros/i
    })
    expect(botaoRemove).toBeInTheDocument();

    const botaoFiltrar = screen.getByRole('button', {
      name: /filtrar/i
    });
    expect(botaoFiltrar).toBeInTheDocument();

    const colunaOperadorTela = screen.getByText(/coluna:operador:/i);
    expect(colunaOperadorTela).toBeInTheDocument();
  })
})

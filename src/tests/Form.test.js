import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


describe('Teste o componente <App.js />', () => {
  it('testando funcionalidades.', () => {
    render(<App />);

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que');
    const boatoFiltro = screen.getByRole('button', {
      name: /filtrar/i
    })
    userEvent.click(boatoFiltro)

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'orbital_period');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'menor que');
    userEvent.click(boatoFiltro)

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'diameter');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a');
    userEvent.click(boatoFiltro)
    
  });
})

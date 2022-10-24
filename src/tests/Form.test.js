import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import planetasMocks from './planetasMocks';
import AppProvider from '../context/AppProvider';



describe('Teste o componente <App.js />', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(planetasMocks)
    })

  });
  it('testando funcionalidades.', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );


    await waitFor(() => {
      expect(screen.getAllByTestId('planetasMocados')).toHaveLength(10);
    })


    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que');
    const boatoFiltro = screen.getByRole('button', {
      name: /filtrar/i
    })
    userEvent.click(boatoFiltro)
    expect()

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'orbital_period');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'menor que');
    userEvent.click(boatoFiltro)

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'diameter');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a');
    userEvent.click(boatoFiltro)

  });
})

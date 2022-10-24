import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import mocks from '../../cypress/mocks/testData';

describe('Teste o componente <App.js />', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mocks)
    })
  });

  it('testando population.', async () => {
    render(
      <App />
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('planetasMocados')).toHaveLength(10);
    })
    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que');
    userEvent.type(screen.getByTestId('value-filter'), '9000')
    const botaoFiltro = screen.getByRole('button', {
      name: /filtrar/i
    })
    userEvent.click(botaoFiltro)
    await waitFor(() => {
      expect(screen.getAllByTestId('planetasMocados')).toHaveLength(7);
    })
  });

  it('testando orbital_period.', async () => {
    render(
      <App />
    );
    await waitFor(() => {
      expect(screen.getAllByTestId('planetasMocados')).toHaveLength(10);
    })
    userEvent.selectOptions(screen.getByTestId('column-filter'), 'orbital_period');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'menor que');
    userEvent.type(screen.getByTestId('value-filter'), '350')
    const botaoFiltro = screen.getByRole('button', {
      name: /filtrar/i
    })
    userEvent.click(botaoFiltro)
    await waitFor(() => {
      expect(screen.getAllByTestId('planetasMocados')).toHaveLength(3);
    })
  });

  it('testando diameter.', async () => {
    render(
      <App />
    );
    await waitFor(() => {
      expect(screen.getAllByTestId('planetasMocados')).toHaveLength(10);
    })
    userEvent.selectOptions(screen.getByTestId('column-filter'), 'diameter');
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a');
    userEvent.type(screen.getByTestId('value-filter'), '8900')
    const botaoFiltro = screen.getByRole('button', {
      name: /filtrar/i
    })
    userEvent.click(botaoFiltro)
    await waitFor(() => {
      expect(screen.getAllByTestId('planetasMocados')).toHaveLength(1);
      const planetateste = screen.getByRole('cell', {
        name: /dagobah/i
      })
    })
  });

  it('testando filtro campo Name.', async () => {
    render(
      <App />
    );
    await waitFor(() => {
      expect(screen.getAllByTestId('planetasMocados')).toHaveLength(10);
      const inputname = screen.getByRole('textbox')
      expect(inputname).toBeInTheDocument();
      userEvent.type(screen.getByTestId('name-filter'), 'tatooine');
      expect(screen.getAllByTestId('planetasMocados')).toHaveLength(1);
    })
  });

  it('testando coluna.', async () => {
    render(
      <App />
    );
    await waitFor(() => {
      expect( screen.getByTestId('column-filter').children).toHaveLength(5);
    })

      userEvent.selectOptions(screen.getByTestId('column-filter'), 'population');
      expect(screen.getByTestId('button-filter'));
      const botaoFiltro = screen.getByRole('button', {
        name: /filtrar/i
      })
      userEvent.click(botaoFiltro)
      const textotela = screen.getByRole('listitem');
      const botaoExcluir = screen.getByRole('button', {
        name: /excluir/i
      })
      userEvent.click(botaoExcluir);
      const botaoRemoveAll = screen.getByTestId('button-remove-filters')
      userEvent.click(botaoRemoveAll);
})
})
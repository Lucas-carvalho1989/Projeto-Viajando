import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';

describe('1 - Crie o componente `<Header />`', () => {
  it("O componente possui uma tag `h1` com o texto 'Tô viajando?'", () => {
    render(<Header />);

    const header = screen.getByRole('heading', {
      name: /Tô viajando?/i,
      level: 1,
    });
    expect(header).toBeInTheDocument();
  });

  it('O componente `<Header />` está sendo renderizado no App corretamente', () => {
    render(<App />);

    const header = screen.getByRole('heading', {
      name: /Tô viajando?/i,
      level: 1,
    });
    expect(header).toBeInTheDocument();
  });
});

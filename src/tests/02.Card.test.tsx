import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

const infoRioDeJaneiro = {
  city: 'Rio de Janeiro',
  country: 'Brasil',
  imageUrl: '/src/assets/rio.webp',
  visited: true,
};

const infoAcapulco = {
  city: 'Acapulco',
  country: 'México',
  imageUrl: '/src/assets/acapulco.webp',
};

describe('2 - Crie o componente `<Card />`', () => {
  it('O componente renderiza as informações de uma cidade já visitada corretamente', () => {
    render(<Card cityInfo={ infoRioDeJaneiro } />);

    const cardCityName = screen.getByText(infoRioDeJaneiro.city);
    const cardCountryName = screen.getByText(infoRioDeJaneiro.country);
    const cardImg = screen.getByAltText(infoRioDeJaneiro.city);
    const alreadyVisitedText = screen.getByText(/Já fui!/i);

    expect(cardCityName).toBeInTheDocument();
    expect(cardCountryName).toBeInTheDocument();
    expect(cardImg).toHaveAttribute('src', infoRioDeJaneiro.imageUrl);
    expect(alreadyVisitedText).toBeInTheDocument();
  });

  it('Ao não passar a chave "visited" a prop "cityInfo", o componente renderiza a mensagem "Não Fui." ao invés de "Já Fui!"', () => {
    render(<Card cityInfo={ infoAcapulco } />);

    const notVisitedText = screen.getByText(/Não Fui./i);
    const alreadyVisitedText = screen.queryByText(/Já Fui!/i);

    expect(notVisitedText).toBeInTheDocument();
    expect(alreadyVisitedText).toBeNull();
  });
});

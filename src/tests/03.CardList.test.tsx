import { render, screen } from '@testing-library/react';
import App from '../App';
import CardList from '../components/CardList';

const infoRioDeJaneiro = {
  city: 'Rio de Janeiro',
  country: 'Brasil',
  imageUrl: '/src/assets/rio.webp',
  visited: true,
};

const infoCidadeDoCabo = {
  city: 'Cidade do Cabo',
  country: 'África do Sul',
  imageUrl: '/src/assets/cidade-do-cabo.webp',
  visited: true,
};

const infoAcapulco = {
  city: 'Acapulco',
  country: 'México',
  imageUrl: '/src/assets/acapulco.webp',
};

const allCities = [infoRioDeJaneiro, infoCidadeDoCabo, infoAcapulco];

describe('3 - Crie o componente `CardList`', () => {
  it("Os cards de 'Rio de Janeiro', 'Cidade do Cabo' e 'Acapulco' são renderizados corretamente no componente `CardList`", () => {
    render(<CardList />);

    allCities.forEach((cityInfo) => {
      expect(screen.getByText(cityInfo.city)).toBeInTheDocument();
      expect(screen.getByText(cityInfo.country)).toBeInTheDocument();
      expect(screen.getByAltText(cityInfo.city)).toHaveAttribute('src', cityInfo.imageUrl);
    });

    expect(screen.getAllByText(/Já Fui!/i)).toHaveLength(2);
    expect(screen.getAllByText(/Não Fui./i)).toHaveLength(1);
  });

  it('O componente `CardList` está sendo renderizado no `App` corretamente', () => {
    render(<App />);

    allCities.forEach((cityInfo) => {
      expect(screen.getByText(cityInfo.city)).toBeInTheDocument();
      expect(screen.getByText(cityInfo.country)).toBeInTheDocument();
      expect(screen.getByAltText(cityInfo.city)).toHaveAttribute('src', cityInfo.imageUrl);
    });
  });
});

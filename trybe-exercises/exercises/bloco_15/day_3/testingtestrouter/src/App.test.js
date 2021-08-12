import { render, screen, fireEvent } from '@testing-library/react';
import App, { About } from './App';
import renderWithRouter from './renderWithRouter';

describe('Testing all aplication', () => {
  
  it('Tests if App component renderizes', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it('Tests if About component renderizes', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('Tests if NotFound component renderizes', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/page/that-page-unexist');
    const noMatch = getByText(/Página não encontrada/);
    expect(noMatch).toBeInTheDocument();
  });

  it('Tests if only the About component renderizes', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/);
    expect(aboutOnly).toBeInTheDocument();
  });
  
  
});


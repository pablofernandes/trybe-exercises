import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testing all Application', () => {

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Test the input behavior and data', () => {
    const { getByTestId } = render(<App />);
    const inputElement = getByTestId('input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
    fireEvent.change(inputElement, { target: { value: 'blastoise' } });
    expect(inputElement).toHaveValue('blastoise');
  });

  it('Test if the button is in the document', () => {
    const { getByTestId } = render(<App />);
    const btnSearch = getByTestId('buttonSearch');
    expect(btnSearch).toBeInTheDocument();

  });

  afterEach(() => jest.clearAllMocks());
  it('Test if the fetch request works properly', async () => {
    const digimon = [{
      'name': 'Koromon',
      'img': 'https://digimon.shadowsmith.com/img/koromon.jpg',
      'level': 'In Training',
    }];
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => digimon,
    });
    const { findByText, getByTestId } = render(<App />);
    const btnSearch = getByTestId('buttonSearch');
    const textSearch = getByTestId('input');
    fireEvent.change(textSearch, {target: { value: 'koromon' }});
    fireEvent.click(btnSearch);
    await findByText(/Koromon/i);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/koromon');
  });

}); 
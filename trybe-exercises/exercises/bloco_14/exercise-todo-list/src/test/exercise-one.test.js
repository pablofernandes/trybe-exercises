import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    // get the data
    // manipulate the data, if necessary
    // Test the data
    const {getByText} = render(<App />);
    const btnAdd = getByText("Adicionar");
    expect(btnAdd).toBeInTheDocument();
    expect(btnAdd.type).toBe("button");
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText} = render(<App />);
    const TASK = "Testar tarefa";
    const btnAdd = queryByText("Adicionar");
    const inputTask = getByLabelText("Tarefa:");
    expect(inputTask).toBeInTheDocument();
    fireEvent.change(inputTask, {target: { value: TASK }});
    fireEvent.click(btnAdd);
    const item = queryByText("Testar tarefa");
    expect(item).toHaveTextContent(TASK);
  });
});

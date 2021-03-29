import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {} 
) => {
  return {  
    ...render(<Provider store={ store }>{ component }</Provider>),
    store,
  }
}

describe('Testing click here button and text zero', () => {
    beforeEach(cleanup);
  it('should have a click here button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const btnAdd = queryByText('Click Here');

    expect(btnAdd).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();

  });

  it('should have a click here button and a text 5', () => {
    const { queryByText, queryByTestId } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}, });
    const btnAdd = queryByText('Click Here');
    userEvent.click(btnAdd);
    const countText = queryByTestId('text');
    expect(countText.textContent).toBe('11');
    expect(btnAdd).toBeInTheDocument();
    expect(countText).toBeInTheDocument();
    userEvent.click(btnAdd);
    expect(countText.textContent).toBe('12');

  });
  
});


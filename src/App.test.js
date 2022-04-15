import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('test', () => {
  test('renders learn react link', () => {
    render(<MemoryRouter>
      <App />
  </MemoryRouter>);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/text.../i)
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('renders learn react link', () => {
    render(<MemoryRouter>
      <App />
  </MemoryRouter>);
    const isElem = screen.queryByText(/hello2/i);
    expect(isElem).toBeNull();
  });
  
  test('async test', async () => {
    render(<MemoryRouter>
      <App />
  </MemoryRouter>);
    const data = await screen.findByText(/text div/i);
    expect(data).toBeInTheDocument();
  })

  test('event click', () => {
    render(<MemoryRouter>
      <App />
  </MemoryRouter>);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull(); 
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull(); 
  })

  test("INPUT EVENT", () => {
    render(<MemoryRouter>
      <App />
  </MemoryRouter>);
    const input = screen.getByPlaceholderText(/text.../i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  })
});
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('test', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/text.../i)
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('renders learn react link', () => {
    render(<App />);
    const isElem = screen.queryByText(/hello2/i);
    expect(isElem).toBeNull();
  });
  
  test('async test', async () => {
    render(<App />);
    const data = await screen.findByText(/text div/i);
    expect(data).toBeInTheDocument();
  })

  test('event click', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull(); 
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull(); 
  })

  test('event input', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/text.../i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // fireEvent.input(input, {
    //   target: { value: 'qwerty' }
    // });
    userEvent.type(input, 'qwerty');
    expect(screen.queryByTestId('value-elem')).toContainHTML('qwerty');
  })
});

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('test route app', () => {
    test('router test', () => {
        render(<MemoryRouter>
            <App />
        </MemoryRouter>);
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page'));
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page'));
    })

    test('error page test', () => {
        render(<MemoryRouter initialEntries={['/dsfsd']}>
            <App />
        </MemoryRouter>)
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    })
})
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWiteRouter } from '../../tests/helpers/renderWithRouter';
import Navbar from './Navbar';

describe('Navbar test', () => {
    test('test about link', async () => {
        render(renderWiteRouter(<Navbar />));
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('test main link', async () => {
        render(renderWiteRouter(<Navbar />));
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('test users link', async () => {
        render(renderWiteRouter(<Navbar />));
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
})
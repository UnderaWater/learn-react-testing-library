import { MemoryRouter } from "react-router-dom"
import AppRouter from "../../router/AppRouter"

export const renderWiteRouter = (component, initialRoute = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
}
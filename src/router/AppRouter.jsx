import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserForTest from '../components/UsersForTest/UserForTest';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import HelloWorld from '../pages/HelloWorld';
import MainPage from '../pages/MainPage';
import UserPage from '../pages/UserPage';
import Users from '../users/Users';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<UserPage />} />
            <Route path='/users-tests' element={<UserForTest />} />
            <Route path='/hello' element={<HelloWorld />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter
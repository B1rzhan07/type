import React, {FC} from 'react';
import { Route, Routes } from "react-router";
import { privateRoutes } from '../router';
import { publicRoutes } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter:FC = () => {
    const {isAuth}= useTypedSelector(state=> state.auth);
    return (
            isAuth ? (
                <Routes>
                    {privateRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                    <Route path="*" element={<h1>404</h1>} />
                    
                </Routes>
            ): (
                <Routes>
                    {
                    publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                    <Route path="*" element={<h1>404</h1>} />
                    
                </Routes>
            )
    );
};

export default AppRouter;
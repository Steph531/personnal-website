import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MesProjets from './components/MesProjets.tsx';
import Moi from './components/Moi.tsx';

const AppRoutes = () =>{
    return (
        <Routes>
            <Route exact path='/' element={<Moi/>}/>
            <Route exact path='/mes-projets' element={<MesProjets/>}/>
        </Routes>
    )
}

export default AppRoutes;
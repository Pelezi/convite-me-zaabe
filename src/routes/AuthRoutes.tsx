import React from "react";

import { Route, Routes } from "react-router-dom";

import Layout from '../components/layout';

import Home from '../pages/home';
import Intro from '../pages/intro';

const DressCode = () => <div style={{color: 'white', padding: '2rem', textAlign: 'center'}}><h1>Dress Code</h1><p>Informações sobre o dress code do evento.</p></div>;
const Presentes = () => <div style={{color: 'white', padding: '2rem', textAlign: 'center'}}><h1>Lista de Presentes</h1><p>Lista de presentes do casal.</p></div>;

const AuthRoutes: React.FC = () => {

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dress_code" element={<DressCode />} />
                <Route path="/presentes" element={<Presentes />} />
            </Routes>
        </Layout>
    )
}

export default AuthRoutes;
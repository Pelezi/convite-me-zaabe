import React from "react";

import { Route, Routes } from "react-router-dom";

import Layout from '../components/layout';

import Home from '../pages/home';
import Intro from '../pages/intro';
import DressCode from '../pages/dressCode';
import Presentes from '../pages/presentes';

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
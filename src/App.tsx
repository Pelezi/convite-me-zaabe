import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthRoutes from './routes/AuthRoutes';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AuthRoutes />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
  )
};

export default App;

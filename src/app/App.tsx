import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components';
import Header from 'src/components/Header/header';
import { ROUTE } from 'src/constants/routes';

import Home from 'src/features/home/home';

import './app.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path={ROUTE.DEFAULT} element={<Home />} />
        <Route element={<Layout />}>
          <Route path={ROUTE.OVERVIEW} element={<div>Overview</div>} />
          <Route path="/2" element={<div>2</div>} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTE.DEFAULT} />} />
      </Routes>
    </div>
  );
};

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './views/LandingPage';
import { LoginPage } from './views/LoginPage';
import { RegisterPage } from './views/RegisterPage';
import { Company, Notice, Chart, Bylaws } from './views/company';
import ProjectList from './views/ProjectList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/company" element={<Company />}>
            <Route path="/company/notice" element={<Notice />} />
            <Route path="/company/chart" element={<Chart />} />
            <Route path="/company/bylaws" element={<Bylaws />} />
          </Route>
        <Route path="project" element={<ProjectList />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
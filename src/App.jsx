// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MergedForm } from './pages/Dummy';
import { NavBar,Home } from './component/Layout';
import Dashboard from './pages/Dashboard';
import { Outlet } from 'react-router-dom';
const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="Manage_form" element={<MergedForm />} />
          <Route path="Admin" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
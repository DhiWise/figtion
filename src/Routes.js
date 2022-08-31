import React from "react";
import FilterDropdown from "pages/FilterDropdown";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filterdropdown" element={<FilterDropdown />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;

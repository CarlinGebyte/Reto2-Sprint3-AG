import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Card filter="all" />} />
        <Route path="/completed" element={<Card filter="completed" />} />
        <Route path="/todo" element={<Card filter="todo" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

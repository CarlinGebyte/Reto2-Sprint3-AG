import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/Reto2-Sprint3-AG/" element={<Card filter="all" />} />
        <Route
          path="/Reto2-Sprint3-AG/completed"
          element={<Card filter="completed" />}
        />
        <Route path="/Reto2-Sprint3-AG/todo" element={<Card filter="todo" />} />
        <Route path="*" element={<Navigate to="/Reto2-Sprint3-AG/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

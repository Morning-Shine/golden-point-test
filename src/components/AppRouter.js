import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ALL_CURRENCY, CURRENT_CURRENCY } from "../constants/routs";
import CurrentCurrenceHistory from "./CurrentCurrenceHistory";
import TableTodayRates from "./TableTodayRates";


export default function AppRouter() {
  return (
    <Routes>
      <Route path={ALL_CURRENCY} element={<TableTodayRates />} />
      <Route path={CURRENT_CURRENCY} element={<CurrentCurrenceHistory />} />
      <Route path="*" element={<Navigate to={ALL_CURRENCY} />} />
    </Routes>
  );
}

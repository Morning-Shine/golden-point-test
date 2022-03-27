import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter"; 
import ContactDev from "./dev/ContactDev";


export default function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <AppRouter />
        <ContactDev/>
      </StyledApp>
    </BrowserRouter>
  );
}

const StyledApp = styled.div`
  background: linear-gradient(52deg, #0a1c7a 0%, #34a5d8 75%, #7cbfde 100%);
  height: 80vh;
  max-height: 100vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

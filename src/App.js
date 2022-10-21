import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Componentes/Header/Header";
import Main from "./Componentes/Main/Main";
import Footer from "./Componentes/Footer/Footer"
import { BodyContainer, TelaContainer } from "./style-app";

export default function App() {

  return (
    <BodyContainer>
      <GlobalStyle />

      <TelaContainer>

        <Header />

        <Main />

        <Footer />

      </TelaContainer>

    </BodyContainer>
  );
}
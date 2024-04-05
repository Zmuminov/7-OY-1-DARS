import React from "react";
// IMPORTED MY FILE
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Container from "@mui/material/Container";
function App() {
  return (
    <>
      <Container fixed>
        <Header></Header>
        <Hero></Hero>
        <Main></Main>
      </Container>
    </>
  );
}

export default App;

import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";
import Map from "./components/Map";
import DropdownMenu from "./components/DropdownMenu";
import Search from "./components/Search";
import Table from "./components/Table";

import { GlobalContext } from "./context/GlobalState";

const override = {
  position: "absolute",
  top: "30px",
  left: "47%",
};

const App = () => {
  const { isLoading, lat, long, mapRef } = useContext(GlobalContext);

  return (
    <MainContainer>
      <GlobalStyle />

      <Title>Available Bikes Checker</Title>

      <Map ref={mapRef} lat={lat} long={long} />

      <ResultsContainer>
        <ClipLoader
          loading={isLoading}
          color="#0b999e"
          cssOverride={override}
        />

        <MenuSearchDiv>
          <DropdownMenu />

          <Search />
        </MenuSearchDiv>

        <Table />
      </ResultsContainer>

      <p style={{ marginBottom: "20px" }}>
        API source{" "}
        <a href="https://api.citybik.es/v2/" target="_blank" rel="noreferrer">
          api.citybik.es
        </a>
      </p>
    </MainContainer>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #d8eaeb;
    font-size: 14px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    @media (min-width: 600px) {
      font-size: 16px;
    }
    @media (min-width: 900px) {
      font-size: 18px;
    }
  }

  td {
        border-bottom: 1pt solid rgba(216, 234, 235, 0.7);
      }
`;

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 900px) {
    width: 900px;
  }
`;

const Title = styled.h1`
  color: #0b999e;
  margin: 40px 0;
`;

const ResultsContainer = styled.div`
  position: relative;
  background-color: white;
  min-width: 100%;
  border: 3px solid #0b999e;
  border-radius: 20px;
  padding: 10px;
  margin: 30px 0;
  @media (min-width: 600px) {
    padding: 30px;
  }
  @media (min-width: 900px) {
    padding: 50px;
  }
`;

const MenuSearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import paginationList from "../utils/paginationList";

export default function PaginationContainer() {
  const {
    previousPageHandler,
    currentPage,
    pageNumbers,
    setCurrentPage,
    nextPageHandler,
  } = useContext(GlobalContext);

  return (
    <Pages>
      <PageButton onClick={previousPageHandler}>Previous</PageButton>

      {paginationList(currentPage, pageNumbers, setCurrentPage)}

      <PageButton onClick={nextPageHandler}>Next</PageButton>
    </Pages>
  );
}

const Pages = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: #d8eaeb;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
`;

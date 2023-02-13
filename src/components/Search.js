import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

export default function Search() {
  const { search, setSearch } = useContext(GlobalContext);
  return (
    <SearchInput
      type="text"
      placeholder="Search Station"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  );
}

const SearchInput = styled.input`
  background-color: #f2f2f2;
  color: #0b999e;
  font-size: 16px;
  width: 130px;
  border: 2px solid #0b999e;
  border-radius: 10px;
  outline: none;
  padding: 11px;
  margin: 20px 0;
  cursor: pointer;
`;

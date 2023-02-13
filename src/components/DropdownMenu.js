import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import data from "../data/data.json";

export default function DropdownMenu() {
  const { setCityId } = useContext(GlobalContext);

  return (
    <Dropdown
      onChange={(e) => setCityId(e.target.value)}
      defaultValue={data[4].value}
    >
      <option value="" disabled>
        Select a city
      </option>
      {data.map((item) => (
        <option key={item.name} value={item.value}>
          {item.name}
        </option>
      ))}
    </Dropdown>
  );
}

const Dropdown = styled.select`
  background-color: #f2f2f2;
  color: #0b999e;
  padding: 10px;
  margin: 20px 0;
  font-size: 16px;
  border: 2px solid #0b999e;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`;

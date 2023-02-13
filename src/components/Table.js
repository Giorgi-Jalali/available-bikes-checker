import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../context/GlobalState";

import PaginationContainer from "./PaginationContainer";

export default function Table() {
  const { stations, currentResults, setLat, setLong, mapViewHandler } =
    useContext(GlobalContext);

  return (
    <div>
      {stations?.length > 0 && (
        <div>
          <ResultsTable>
            <thead>
              <TableRow>
                <TableHead>Station Name</TableHead>
                <TableHead>Empty Slots</TableHead>
                <TableHead>Available Bikes</TableHead>
              </TableRow>
            </thead>
            <tbody>
              {currentResults.map((station) => (
                <tr
                  key={station.id}
                  onClick={() => {
                    setLat(station.latitude);
                    setLong(station.longitude);
                    mapViewHandler();
                  }}
                >
                  <ResultsData>{station.name}</ResultsData>
                  <ResultsData>
                    {station.empty_slots === null
                      ? "No Info"
                      : station.empty_slots}
                  </ResultsData>
                  <ResultsData>
                    {station.free_bikes === null
                      ? "No Info"
                      : station.free_bikes}
                  </ResultsData>
                </tr>
              ))}
            </tbody>
          </ResultsTable>

          <PaginationContainer />
        </div>
      )}
    </div>
  );
}

const ResultsTable = styled.table`
  min-width: 100%;
`;

const TableRow = styled.tr`
  background-color: #f2f2f2;
  color: #0b999e;
`;

const TableHead = styled.th`
  border-radius: 10px;
  padding: 10px;
`;

const ResultsData = styled.td`
  padding: 10px;
  cursor: pointer;
`;

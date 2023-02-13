import React from "react";
import styled from "styled-components";

import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

const Map = ({ lat, long }, ref) => {
  function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
  }

  return (
    <MapWraper ref={ref} className="App">
      <MapContainer
        center={[lat, long]}
        zoom={13}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <ChangeView center={[lat, long]} />
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">carto.com</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, long]}></Marker>
      </MapContainer>
    </MapWraper>
  );
};

export default React.forwardRef(Map);

const svgIcon = L.divIcon({
  html: `
      <svg
        width="24"
        height="40"
        viewBox="0 0 100 100"
        version="1.1"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#7A8BE7"></path>
      </svg>`,
  className: "",
  iconSize: [24, 40],
  iconAnchor: [12, 40],
});

L.Marker.prototype.options.icon = svgIcon;

const MapWraper = styled.div`
  width: 100%;
  height: auto;
  border: 3px solid #0b999e;
  border-radius: 20px;
  @media (min-width: 900px) {
    width: 900px;
  }
`;

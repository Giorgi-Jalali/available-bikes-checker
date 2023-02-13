import { useState, useEffect, useRef, createContext } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [cityId, setCityId] = useState("");
  const [stations, setStations] = useState([]);

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [lat, setLat] = useState(48.2081743);
  const [long, setLong] = useState(16.3738189);

  const mapRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.citybik.es/v2/networks/wienmobil-rad`)
      .then((response) => response.json())
      .then((data) => {
        setStations(data.network.stations);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.citybik.es/v2/networks/${cityId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.network) {
          setStations(data.network.stations);
          setLat(data.network.location.latitude);
          setLong(data.network.location.longitude);
        }

        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [cityId]);

  const filteredData = stations?.filter((station) =>
    station.name.toLowerCase().includes(search.toLowerCase())
  );

  const resultsPerPage = 30;
  const lastIndex = currentPage * resultsPerPage;
  const firstIndex = lastIndex - resultsPerPage;
  const currentResults = filteredData?.slice(firstIndex, lastIndex);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData?.length / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  const previousPageHandler = () =>
    currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);

  const nextPageHandler = () =>
    currentPage < pageNumbers?.length
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(pageNumbers?.length);

  const mapViewHandler = () => {
    mapRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const provider = {
    stations,
    setCityId,
    search,
    setSearch,
    isLoading,
    currentPage,
    setCurrentPage,
    lat,
    setLat,
    long,
    setLong,
    mapRef,
    currentResults,
    pageNumbers,
    previousPageHandler,
    nextPageHandler,
    mapViewHandler,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};

import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);

        if (!res.ok) throw new Error();

        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);

      if (!res.ok) throw new Error();

      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  return context;
}

export { useCities, CitiesProvider };

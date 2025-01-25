import {createContext, useEffect, useState} from "react";

const BASE_URL = `http://localhost:8000`;

const CitiesContext = createContext();

/* eslint-disable react/prop-types */
function CitiesProvider({children}) {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(function () {
        async function fetchCities() {
            try {
                setLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            } catch (error) {
                console.error("There was a problem fetching Cities", error);
            } finally {
                setLoading(false);

            }

        };
        fetchCities();
    }, []);

    return <CitiesContext.Provider value={{
        cities, loading
    }}>{children}</CitiesContext.Provider>
}


export {CitiesProvider};
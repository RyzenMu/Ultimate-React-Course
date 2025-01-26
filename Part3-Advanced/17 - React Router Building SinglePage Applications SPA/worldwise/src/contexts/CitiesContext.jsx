import {createContext, useContext, useEffect, useReducer, useState} from "react";

const BASE_URL = `http://localhost:8000`;

const CitiesContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'loading':
            return {...state, loading: true};
        case 'cities/loaded':
            return {...state, loading: false, cities: action.payload};
        case 'city/loaded':
            return {...state, loading: false, currentCity: action.payload};
        case 'city/created':
            return {...state, loading: false, cities: [...state.cities, action.payload], currentCity: action.payload};
        case 'cities/deleted':
            return {...state, loading: false, cities: state.cities.filter((city) => city.id !== action.payload), currentCity: {} };
        case 'rejected':
            return {...state, loading: false, error: action.payload};
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}
const initialState = {
    cities: [],
    loading: false,
    currentCity: {},
    errors: '',
}

/* eslint-disable react/prop-types */
function CitiesProvider({children}) {
 const [{cities, loading, currentCity}, dispatch] = useReducer(reducer, initialState);


    useEffect(function () {
        dispatch({type:'loading'})
        async function fetchCities() {
            try {
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                dispatch({type:'cities/loaded', payload:data})
            } catch (error) {
                dispatch({type: 'rejected', payload:"There was a problem fetching Cities", error});
            }

        };
        fetchCities();
    }, []);

    async function getCity(id) {
        if (Numberr(id) === currentCity.id) {return}
        dispatch({type:"loading"})
        try {
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            dispatch({type:'city/loaded', payload:data})
        } catch (error) {
            dispatch({type: 'rejected', payload:"There was a problem fetching Cities", error});
        }
    }

    async function createCity(newCity) {
        dispatch({type:"loading"})

        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/cities/`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await res.json();
            dispatch({type:'city/created', payload:data})
        } catch (error) {
            dispatch({type: 'rejected', payload:"There was a problem creating Cities", error});

        }
    }

    async function deleteCity(id) {
        dispatch({type:"loading"})

        try {
            setLoading(true);
            await fetch(`${BASE_URL}/cities/${id}`, {
                method: "DELETE",
            });
            dispatch({type:"cities/deleted", payload:id})
        } catch (error) {
            console.error("There was a ERROR DELETING", error);
        }
    }

    return <CitiesContext.Provider value={{
        cities, loading, currentCity, getCity, createCity, deleteCity, error
    }}>{children}</CitiesContext.Provider>
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) {
        throw new Error('useCities must be used within the context');
    }
    return context;
}


export {CitiesProvider, useCities};
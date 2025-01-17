import {BrowserRouter, Route,Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import {useEffect, useState} from "react";

const BASE_URL = `http://localhost:8000`;

function App() {
    const [cities, setCities] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(function () {
        async function fetchCities() {
            try {
                setLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            }catch (error) {
                console.error("There was a problem fetching Cities", error);
            }
            finally {
                setLoading(false);

            }

        };
        fetchCities();
    }, []);

    useEffect(function(){
        console.log(cities);
        console.log(loading)
    } ,[cities]);

    return (
        <div>
            <h1>Hello Router!</h1>
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage/>} />
                <Route path='/product' element={<Product/>} />
                <Route path='/pricing' element={<Pricing/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='*' element={<PageNotFound/>} />
                <Route path='/app' element={<AppLayout/>} >
                    <Route index element={<p>LIST</p>} />
                    <Route path='cities' element={<CityList />} />
                    <Route path='countries' element={<p>List of countries</p>} />
                    <Route path='form' element={<p>form</p>} />
                </Route>

            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
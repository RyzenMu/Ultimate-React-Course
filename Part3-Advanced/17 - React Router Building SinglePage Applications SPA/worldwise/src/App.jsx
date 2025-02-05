import {BrowserRouter, Route, Routes, lazy, Suspense} from "react-router-dom";

// import Product from "./pages/Product.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import Homepage from "./pages/Homepage.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";
// import AppLayout from "./pages/AppLayout.jsx";
// import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import {Navigate} from "react-router-dom";
import {CitiesProvider} from "./contexts/CitiesContext.jsx";
import {AuthProvider} from "./contexts/FakeAuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute..jsx";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

const Homepage = lazy(() => import('./pages/Homepage.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const PageNotFound = lazy(() => import('./pages/PageNotFound.jsx'));
const AppLayout = lazy(() => import('./pages/AppLayout.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));

function App() {
    return (
        <div>
            <h1>Hello Router!</h1>
            <AuthProvider>
                <CitiesProvider>
                    <BrowserRouter future={{v7_startTransition: true}}>
                        <Suspense fallback={<SpinnerFullPage/>}>
                            <Routes>
                                <Route index element={<Homepage/>}/>
                                <Route path='/product' element={<Product/>}/>
                                <Route path='/pricing' element={<Pricing/>}/>
                                <Route path='/login' element={<Login/>}/>
                                <Route path='*' element={<PageNotFound/>}/>
                                <Route path='/app' element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
                                    <Route index element={<Navigate replace to={'cities'}/>}/>
                                    <Route path='cities' element={<CityList/>}/>
                                    <Route path='cities/:id' element={<City/>}/>
                                    <Route path='countries' element={<CountryList/>}/>
                                    <Route path='form' element={<Form/>}/>
                                </Route>

                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </CitiesProvider></AuthProvider>
        </div>
    );
}

export default App;
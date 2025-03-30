
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./UI/Home.jsx";
import Menu, {loader as menuLoader} from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder.jsx";
import Order, {loader as orderLoader} from "./features/order/Order.jsx";
import AppLayout from "./UI/AppLayout.jsx";
import Error from "./UI/Error.jsx";


const router = createBrowserRouter([
    {
        element: <AppLayout /> ,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home />
            } ,
            {
                path: "/menu",
                element: <Menu />,
                errorElement: <Error/>,
                loader: menuLoader,
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/order/new",
                element: <CreateOrder />,
                action: createOrderAction,
            },
            {
                path: "/order/:orderId",
                element: <Order />,
                loader: orderLoader,
                errorElement: <Error />,
            }
        ]
    },

])
function App() {
    return (
        <RouterProvider router={router}>
            Hello Vite
        </RouterProvider>

    );
}

export default App;
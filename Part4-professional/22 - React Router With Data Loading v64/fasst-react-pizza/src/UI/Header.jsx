import {Link} from 'react-router-dom';
import SearchOrder from "../features/order/searchOrder.jsx";
function Header() {
    return (
        <header>
            <Link to='/'>Fast React Pizza Co. </Link>
            <SearchOrder/>
            <p>Jonas</p>
        </header>
    );
}

export default Header;
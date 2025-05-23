import styles from './AppNav.module.css'
import {NavLink} from "react-router-dom";
function AppNav() {
    return (
        <nav className={styles.nav}>App navigation
            <ul>
                <li><NavLink to={'cities'}>Cities </NavLink></li>
                <li><NavLink to={'countries'}>Countries </NavLink></li>
                <li><NavLink to={'form'}>Form </NavLink></li>
            </ul>
        </nav>
    );
}

export default AppNav;
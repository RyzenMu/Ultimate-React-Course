import Sidebar from "../components/Sidebar.jsx";
import styles from './AppLayout.module.css';
import Map from "../components/Map.jsx";
import User from "../components/User.jsx";
import ProtectedRoute from "./ProtectedRoute..jsx";

function AppLayout() {
    return (
        <ProtectedRoute>
            <div className={styles.app}>
                <Sidebar/>
                <Map/>
                <User/>
            </div>
        </ProtectedRoute>
    );
}

export default AppLayout;
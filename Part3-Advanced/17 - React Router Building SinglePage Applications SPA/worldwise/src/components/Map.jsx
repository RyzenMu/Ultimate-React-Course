import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
function Map() {
    const navigate = useNavigate();
    const[searchparams, setSearchParams]=useSearchParams();
    const lat = searchparams.get('lat');
    const lng = searchparams.get('lng');
    return (
        <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
            <h1>Map</h1>
            <h1>Position : {lat}, {lng}</h1>
            <button onClick={()=>{
                setSearchParams({lat:23, lng:50})
            }}>Change position</button>
        </div>
    );
}

export default Map;
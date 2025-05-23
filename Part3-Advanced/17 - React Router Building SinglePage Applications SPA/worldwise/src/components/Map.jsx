import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents} from "react-leaflet";
import {useEffect, useState} from "react";
import {useCities} from "../contexts/CitiesContext.jsx";
import {useGeolocation} from "../hooks/useGeolocation.js";
import Button from "./Button.jsx";
import {useUrlPosition} from "../hooks/useUrlPosition.js";

function Map() {
    const {cities} = useCities();

    const [mapPosition, setMapPosition] = useState([40, 0]);
    const {isLoading: isLoadingPosition, position:geolocationPosition, getPosition} = useGeolocation()
    const [mapLat, mapLng] = useUrlPosition;
    useEffect(function(){
        if (mapLat && mapLat) setMapPosition([mapLat, mapLng]);
    }, [mapLat, mapLng]);

    useEffect(function(){
        if (isLoadingPosition) {useMapPosition([geolocationPosition.lat, geolocationPosition.lng])}
    }, [geolocationPosition]);
    return (
        <div className={styles.mapContainer}>
            {!geolocationPosition && <Button type={'position'} onClick={getPosition}>
                {isLoadingPosition ? 'Loading...' : 'use your position'}
            </Button>}
            <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map(city => (<Marker position={[city.position.lat, city.position.lng]} key={city.id}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                        <span>{city.emoji}</span>
                        <span>{city.cityName}</span>
                    </Popup>
                </Marker>))}
                <ChangeCenter position={mapPosition}/>
                <DetectClick />
            </MapContainer>
        </div>
    );
}

function ChangeCenter({position}){
    const  map = useMap();
    map.setView(position);
    return null;
}

function DetectClick(){
    const navigate = useNavigate();

    useMapEvents({
        click: e=> {
            console.log(e);
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        }
    })
}

export default Map;
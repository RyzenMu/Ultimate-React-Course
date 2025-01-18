import styles from './CityList.module.css'
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "./Message.jsx";
/* eslint-disable react/prop-types */


function CityList({loading, cities}) {
    if (loading) return <Spinner />

    if (!cities || cities.length <1) return <Message message='Add your city by clicking  on a city on the map'/>
    return (
        <ul className={styles.cityList}>
            {cities.map((city, i)=> <CityItem city={city} key={i} />)}
        </ul>
    );
}

export default CityList;
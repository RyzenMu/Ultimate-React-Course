// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import {useEffect, useState} from "react";

import styles from "./Form.module.css";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import {useUrlPosition} from "../hooks/useUrlPosition.js";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useCities} from "../contexts/CitiesContext.jsx";

export function convertToEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
    const navigate = useNavigate();
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const [lat, lng] = useUrlPosition;
    const [emoji, setEmoji] = useState("");
    const [geoCodingError, setGeoCodingError] = useState("");
    const navigate = useNavigate();
    const {createCity, loading} = useCities();

    useEffect(function () {
        if (!lat || !lng) {
            return
        }

        async function fetchCityData() {
            try {
                setIsLoadingGeocoding(true);
                setGeoCodingError('');
                const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
                const data = await res.json();
                setCityName(data.city || data.locality || '');
                setCountry(data.countryName);
                // setting an error for landing in ocean
                if (!data.countryCode) throw new Error("Could not fetch city data");
                setEmoji(convertToEmoji(data.countryCode));
            } catch (err) {
                console.log(err)
                setGeoCodingError(err.message)
            } finally {
                setIsLoadingGeocoding(false);
            }
        }

        fetchCityData();
    }, [lat, lng]);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!cityName || !date ) return;
        const newCity = {
            cityName,
            country,
            emoji,
            date,
            notes,
            position: {lat, lng},
        }
        await createCity(newCity);
        navigate('/app/cities')
    }

    if (isLoadingGeocoding) return <Spinner/>

    if (!lat ||!lng) return <Message message={'start by clicking on the map'}/>;

    if (geoCodingError) return <Message message={geoCodingError}/>;
    return (
        <form className={`${styles.form} ${loading ? styles.loading : ""}`} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <input
                    id="cityName"
                    onChange={(e) => setCityName(e.target.value)}
                    value={cityName}
                />
                {/* <span className={styles.flag}>{emoji}</span> */}
            </div>

            <div className={styles.row}>
                <label htmlFor="date">When did you go to {cityName}?</label>
                {/*<input*/}
                {/*    id="date"*/}
                {/*    onChange={(e) => setDate(e.target.value)}*/}
                {/*    value={date}*/}
                {/*/>*/}
                <DatePicker onChange={date => setDate(new Date(date))} selected={date} dateFormat={'dd/MM/yyyy'}/>
            </div>

            <div className={styles.row}>
                <label htmlFor="notes">Notes about your trip to {cityName}</label>
                <textarea
                    id="notes"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                />
            </div>

            <div className={styles.buttons}>
                <Button type={'primary'}>Add</Button>
                <Button type={'back'} onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }
                }>&larr; Back</Button>
            </div>
        </form>
    );
}

export default Form;

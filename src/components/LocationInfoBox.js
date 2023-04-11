import React, {useContext} from 'react';
import { LanguageContext } from '../context/language.context';

const LocationInfoBox = ({ info }) => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <div className="location-info">
            <h2 style={{textAlign: 'center'}}>{dictionary.locationInfoBox[0]}</h2>
            <ul>
                <li>{dictionary.locationInfoBox[1]}: <strong>{info.title}</strong></li>
                <li>{dictionary.locationInfoBox[2]}: {info.type}</li>
            </ul>
        </div>
    )
}

export default LocationInfoBox;

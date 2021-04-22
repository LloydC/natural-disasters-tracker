import React from 'react'

const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2 style={{textAlign: 'center'}}>Disaster Information</h2>
            <ul>
                <li>Title: <strong>{info.title}</strong></li>
                 <li>Event Type: {info.type}</li>
            </ul>
        </div>
    )
}

export default LocationInfoBox;

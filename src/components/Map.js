import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import Header from './Header';

 const Map = ({ eventData, center, zoom }) => {
     const [locationInfo, setLocationInfo] = useState(null)
     const markers = eventData.map(event => {
         if(event.categories[0].id === 8){
             return <LocationMarker 
                        key={event.id}
                        lat={event.geometries[0].coordinates[1]} 
                        lng={event.geometries[0].coordinates[0]}
                        onClick={()=> setLocationInfo({title: event.title})}
                        type={'wildfire'}
                        />
         }
         else if(event.categories[0].id === 12 && event.geometries[0].coordinates.length === 2){
            return <LocationMarker 
                       key={event.id}
                       lat={event.geometries[0].coordinates[1]} 
                       lng={event.geometries[0].coordinates[0]}
                       onClick={()=> setLocationInfo({title: event.title})}
                       type={'eruption'}
                       />
        }
        else if(event.categories[0].id === 10 && event.geometries[0].coordinates.length === 2){
            return <LocationMarker 
                       key={event.id}
                       lat={event.geometries[0].coordinates[1]} 
                       lng={event.geometries[0].coordinates[0]}
                       onClick={()=> setLocationInfo({title: event.title})}
                       type={'cyclone'}
                       />
        }
         return null;
     })
    return (
        <div className="map">
            <Header/>
            <div className="map-container"> 
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_KEY}}
                    defaultCenter={ center }
                    defaultZoom={ zoom }
                >
                    {markers}
                </GoogleMapReact>
            </div>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
            <div className="footer">
                Made with ❤️ by King Code
            </div>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 0.4162,
        lng: 9.4673
    },
    zoom: 3
}

export default Map;

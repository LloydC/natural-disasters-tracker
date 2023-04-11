import { useState, useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import Header from './Header';
import Footer from './Footer';
import { Icon } from '@iconify/react';
import wildfireIcon from '@iconify/icons-mdi/fire-alert'
import volcanoIcon from '@iconify-icons/noto/volcano';
import cycloneIcon from '@iconify-icons/noto/cyclone';
import { LanguageContext } from '../context/language.context';

 const Map = ({ eventData, center, zoom }) => {
     const [locationInfo, setLocationInfo] = useState(null)
     const { dictionary } = useContext(LanguageContext);

     const markers = eventData.map(event => {
         if(event.categories[0].id === "wildfires"){
             return <LocationMarker 
                        key={event.id}
                        lat={event.geometry[0].coordinates[1]} 
                        lng={event.geometry[0].coordinates[0]}
                        onClick={()=> setLocationInfo({title: event.title, type: 'Wildfire'})}
                        type={'wildfire'}
                        />
         }
         else if(event.categories[0].id === "volcanoes" && event.geometry[0].coordinates.length === 2){
            return <LocationMarker 
                       key={event.id}
                       lat={event.geometry[0].coordinates[1]} 
                       lng={event.geometry[0].coordinates[0]}
                       onClick={()=> setLocationInfo({title: event.title, type: 'Eruption'})}
                       type={'eruption'}
                       />
        }
        else if(event.categories[0].id === "severeStorms" && event.geometry[0].coordinates.length === 2){
            return <LocationMarker 
                       key={event.id}
                       lat={event.geometry[0].coordinates[1]} 
                       lng={event.geometry[0].coordinates[0]}
                       onClick={()=> setLocationInfo({title: event.title, type: 'Cyclone'})}
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
                <div className="info-container">
                    <div style={{height: '43%'}}>
                        <div style={{textAlign: "center"}}>  
                            <h2>{dictionary.infoContainer[0]}</h2>
                            <p>{dictionary.infoContainer[1]}</p>
                        </div>
                        <br/>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <span><Icon icon={volcanoIcon} className="location-icon"/>{dictionary.infoContainer[2]}</span>
                            <span><Icon icon={wildfireIcon} className="location-icon"/>{dictionary.infoContainer[3]}</span>
                            <span><Icon icon={cycloneIcon} className="location-icon"/>{dictionary.infoContainer[4]}</span>
                        </div> 
                    </div>
                    
                    {locationInfo && <LocationInfoBox info={locationInfo}/>}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.71,
        lng: 12.85
    },
    zoom: 3
}

export default Map;

import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import Header from './Header';
import Footer from './Footer';
import { Icon } from '@iconify/react';
import wildfireIcon from '@iconify/icons-mdi/fire-alert'
import volcanoIcon from '@iconify-icons/noto/volcano';
import cycloneIcon from '@iconify-icons/noto/cyclone';

 const Map = ({ eventData, center, zoom }) => {
     const [locationInfo, setLocationInfo] = useState(null)
     const markers = eventData.map(event => {
         if(event.categories[0].id === 8){
             return <LocationMarker 
                        key={event.id}
                        lat={event.geometries[0].coordinates[1]} 
                        lng={event.geometries[0].coordinates[0]}
                        onClick={()=> setLocationInfo({title: event.title, type: 'Wildfire'})}
                        type={'wildfire'}
                        />
         }
         else if(event.categories[0].id === 12 && event.geometries[0].coordinates.length === 2){
            return <LocationMarker 
                       key={event.id}
                       lat={event.geometries[0].coordinates[1]} 
                       lng={event.geometries[0].coordinates[0]}
                       onClick={()=> setLocationInfo({title: event.title, type: 'Eruption'})}
                       type={'eruption'}
                       />
        }
        else if(event.categories[0].id === 10 && event.geometries[0].coordinates.length === 2){
            return <LocationMarker 
                       key={event.id}
                       lat={event.geometries[0].coordinates[1]} 
                       lng={event.geometries[0].coordinates[0]}
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
                            <h2>Welcome!</h2>
                            <p>You can click on any of the disasters icons that appears on the map to get more information about it ;)</p>
                        </div>
                        <br/>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <span><Icon icon={volcanoIcon} className="location-icon"/> Volcanoes</span>
                            <span><Icon icon={wildfireIcon} className="location-icon"/> Wildfire</span>
                            <span><Icon icon={cycloneIcon} className="location-icon"/> Cyclone</span>
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
        lat: 0.4162,
        lng: 9.4673
    },
    zoom: 3
}

export default Map;

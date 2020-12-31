import { Icon } from '@iconify/react';
import wildfireIcon from '@iconify/icons-mdi/fire-alert'
import volcanoIcon from '@iconify-icons/noto/volcano';
import cycloneIcon from '@iconify-icons/noto/cyclone';

const LocationMarker = ({ type, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            {type === 'wildfire' && <Icon icon={wildfireIcon} className="location-icon"/>}
            {type === 'eruption' && <Icon icon={volcanoIcon} className="location-icon"/>}
            {type === 'cyclone' && <Icon icon={cycloneIcon} className="location-icon"/>}
        </div>
    )
}

export default LocationMarker;

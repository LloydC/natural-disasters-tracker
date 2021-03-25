import React from 'react';
import { Icon } from '@iconify/react';
import wildfireIcon from '@iconify/icons-mdi/fire-alert'
import volcanoIcon from '@iconify-icons/noto/volcano';
import cycloneIcon from '@iconify-icons/noto/cyclone';

const Header = () => {
    return (
        <header className="header">
            <div>
                <h1>Natural Disasters Tracker (Powered By NASA API)</h1>
                <span style={{border: '1px solid black', borderRadius: '15px', marginLeft: '10px'}}><Icon icon={volcanoIcon} className="location-icon"/> Volcanoes</span>
                <span style={{border: '1px solid black', borderRadius: '15px', marginLeft: '10px'}}><Icon icon={wildfireIcon} className="location-icon"/> Wildfire</span>
                <span style={{border: '1px solid black', borderRadius: '15px', marginLeft: '10px'}}><Icon icon={cycloneIcon} className="location-icon"/> Cyclone</span>
            </div>
        </header>
    )
}

export default Header;
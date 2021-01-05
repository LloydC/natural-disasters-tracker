import React from 'react';
import { Icon } from '@iconify/react';
import wildfireIcon from '@iconify/icons-mdi/fire-alert'
import volcanoIcon from '@iconify-icons/noto/volcano';
import cycloneIcon from '@iconify-icons/noto/cyclone';

const Header = () => {
    return (
        <header className="header">
            <h1>Natural Disasters Tracker (Powered By NASA API)</h1>
            <div>
                <span><Icon icon={volcanoIcon} className="location-icon"/> Volcanoes</span>
                <span><Icon icon={wildfireIcon} className="location-icon"/> Wildfire</span>
                <span><Icon icon={cycloneIcon} className="location-icon"/> Cyclone</span>
            </div>
        </header>
    )
}

export default Header;
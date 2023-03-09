import React, { useContext } from 'react';
import LanguageSelector from './LanguageSelector';
import { LanguageContext } from '../context/language.context';

const Header = () => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <header className="header">
            <span></span>
            <h1>{dictionary.header}</h1>
            <LanguageSelector />
        </header>
    )
}

export default Header;
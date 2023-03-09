import React, { useContext } from 'react'
import { LanguageContext } from '../context/language.context';

const Footer = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
        <div className="footer">
            <span>{dictionary.footer}</span>
        </div>
    )
}

export default Footer;
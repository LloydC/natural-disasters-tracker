import React, {useContext} from 'react';
import { LanguageContext } from '../context/language.context';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
        <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <span>{dictionary.loadingAnimation}</span>
        </div>
    )
}

export default LoadingAnimation;

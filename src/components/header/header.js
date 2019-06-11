import React from 'react'
import Navigation from '../navigation/navigation';
import withEmotion from '../../../withEmotion';
import styles from './header.style';

const Header = ({primaryText, secondaryText, image, className}) => {
    return (
        <div className={`${className} header `}>
            <img src={image} />
            <div className="header_layover">
                <div className="header_primary-text">{primaryText}</div>
                <div className="header_secondary-text">{secondaryText}</div>
            </div>
        </div>
    )
}

export default withEmotion(Header, styles)
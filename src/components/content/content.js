import React from 'react'
import withEmotion from '../../../withEmotion';
import styles from './content.style';

const content = ({className, content}) => {
    return (
        <div className={className}>{content}</div>
    )
}

export default withEmotion(content, styles);
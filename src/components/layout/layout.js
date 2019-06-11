import React from 'react'
import styles from './layout.style'
import withEmotion from '../../../withEmotion';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import { StaticQuery, graphql, Link } from 'gatsby';

const Layout = ({ children, location, className}) => (
    <div className= {className}>
        <Navigation />
        {children}
        <Footer />
    </div>
)

export default withEmotion(Layout, styles)
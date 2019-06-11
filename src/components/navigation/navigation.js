import React from 'react';
import withEmotion from '../../../withEmotion';
import styles from './navigation.style';
import { StaticQuery, graphql, Link } from 'gatsby';

const Navigation = ({ children, location, className}) => (
    <StaticQuery
        query={graphql`
            query{
                allContentfulNavigation{
                edges{
                node{
                    items {
                    title,
                    slug
                    }
                }
                }
            }
            }
        `}
    render = {data => (
        <ul className = {`navigation ${className}` }>
            {data.allContentfulNavigation.edges[0].node.items && data.allContentfulNavigation.edges[0].node.items.map(item => (<li className={`navigation-list ${location && location.pathname === item.slug ? 'navigation-list--active': ''}`}>
                <Link className="navigation-link" to={item.slug} >{item.title}</Link>
                </li>
                ) ) }
        </ul>
    )}   
    />
)

export default withEmotion(Navigation, styles);
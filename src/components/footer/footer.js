import React from 'react';
import withEmotion from '../../../withEmotion';
import styles from './footer.style';
import { StaticQuery, graphql, Link } from 'gatsby';

const Footer = ({ children, location, className}) => (
    <StaticQuery
        query={graphql`
            query{
                allContentfulFooter{
                edges{
                node{
                    primarytext,
                    links {
                    slug,
                    title
                    }       
                }
                }
            }
            }
        `}
    render = {data => (
        <div className={`footer ${className}`}>
            <div className="footer_primary-text">{data.allContentfulFooter.edges[0].node.primarytext}</div>
            <ul className = {`footer-nav` }>
                {data.allContentfulFooter.edges[0].node.links && data.allContentfulFooter.edges[0].node.links.map(item => (<li className={`footer-list `}>
                    <Link className="footer-link" to={item.slug} >{item.title}</Link>
                    </li>
                    ) ) }
            </ul>
        </div>
    )}   
    />
)

export default withEmotion(Footer, styles);
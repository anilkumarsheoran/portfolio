import React from 'react';
import withEmotion from '../../../withEmotion';
import styles from './navigation.style';
import { StaticQuery, graphql, Link } from 'gatsby';

class Navigation extends React.Component {
    handleHamburgerDisplay = (val) => {
        this.setState({ isHamburgerOpen : val})
    }

    state = {
        isHamburgerOpen :false,
        // isHamburgerPresent = false,
    }

    render() {
    const {children, data, location, className} = this.props;
    const { isHamburgerOpen } = this.state;
    return (
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
        render = {data => {
            return (
            <div className = {`navigation ${className}` }>
                {isHamburgerOpen && <span className="close-btn" onClick={()=> this.handleHamburgerDisplay(false)}>X</span>}
                {!isHamburgerOpen && <span className="hamburger-icon" onClick={() => this.handleHamburgerDisplay(true)}>Hamburger</span>}
                <ul className={isHamburgerOpen ? 'hamburger-nav' : ''} >
                    {data.allContentfulNavigation.edges[0].node.items && data.allContentfulNavigation.edges[0].node.items.map(item => (<li className={`navigation-list ${location && location.pathname === item.slug ? 'navigation-list--active': ''}`}>
                        <Link className="navigation-link" to={item.slug} >{item.title}</Link>
                        </li>
                        ) ) }
                </ul>
            </div>

        )}  } 
    />
    )
    }
         
    
}

// const Navigation = ({ children, location, className}) => (
  
// )

export default withEmotion(Navigation, styles);
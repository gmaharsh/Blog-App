import React from 'react';
import './Navbar.css';
import Avatar from '@material-ui/core/Avatar';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbar__logo">
                <img
                    src="https://www.graphicsprings.com/filestorage/stencils/aa9b3990c232ec04bb89115f1a557621.png?width=500&height=500"
                    alt="" />
            </div>
            <div className="navbar__items">
                <h3>Post</h3>
                <Avatar />
            </div>
        </div>
    )
}

export default Navbar

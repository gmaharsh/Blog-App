import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';



function Header() {

    const { roomId } = useParams();

    return (
        <div className="Navbar">
            <div className="navbar__logo">
                <img
                    src="https://www.graphicsprings.com/filestorage/stencils/aa9b3990c232ec04bb89115f1a557621.png?width=500&height=500"
                    alt="" />
            </div>
            <div className="navbar__items">
                <Link className="navbar__link" to="/addnewPost">
                    <h3>Post</h3>
                </Link>
                <Avatar />
            </div>
        </div>
    )
}

export default Header

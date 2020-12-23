import React from 'react';
import './Topic.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

function Topic({ id, name }) {
    
    // console.log(name)
    return (
        <Link to={`/${id}`}>
            <div className="topic">
                <h3>{name}</h3>
            <ArrowForwardIosIcon />
        </div>
        </Link>
    )
}

export default Topic

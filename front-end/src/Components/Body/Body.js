import React from 'react';
import './Body.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Post from './Post/Post';

function Body() {
    return (
        <div className="body">
            <div className="body__sidebar">
                <div className="sidebar__search">
                    <input type="text" placeholder="Search for Topic" />
                    <SearchIcon />
                </div>
                <div className="sidebar__topics">
                    <div className="sidebar__topic">
                        <h3>How to live life?</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className="sidebar__topic">
                        <h3>How to handle angry</h3>
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
            <div className="body__posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Body

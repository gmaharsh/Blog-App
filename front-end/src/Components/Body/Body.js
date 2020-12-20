import React from 'react';
import './Body.css';
import SearchIcon from '@material-ui/icons/Search';

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

                    </div>
                    <div className="sidebar__topic">
                        
                    </div>
                    <div className="sidebar__topic">
                        
                    </div>
                    <div className="sidebar__topic">
                        
                    </div>
                    <div className="sidebar__topic">
                        
                    </div><div className="sidebar__topic">
                        
                    </div>
                    <div className="sidebar__topic">
                        
                    </div>
                </div>
            </div>
            <div className="body__posts">
                
            </div>
        </div>
    )
}

export default Body

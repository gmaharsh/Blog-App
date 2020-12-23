import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
import './Post.css';

function Post({ roomId, id,  name, ideas, title }) {

    const [messages, setMessages] = useState([]);

    const deletePost = (id) => {
        db.collection("blog").doc(roomId).collection("messages").doc(id).delete()
            .then(function () {
                console.log("Deleted")
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            })
    }



    return (
        <div onClick={e => deletePost(id)} className="post">
            <div className="post__title">
                <h1>{title}</h1>
            </div>
            <div className="post__body">
                <p>{ideas}</p>
            </div>
            <div className="post__userDetails">
                <div className="post__addedBy">
                    <h4>Added By:-</h4>
                    <p>{name}</p>
                </div>
                <div className="post__Date">
                    <h4>Added By:-</h4>
                    <p>December 20, 2020</p>
                </div>
            </div>
        </div>
    )
}

export default Post

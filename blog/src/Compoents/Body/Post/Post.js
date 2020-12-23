import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../../../firebase';
import AddNewPost from '../AddNewPost/AddNewPost';
import './Post.css';

function Post({ roomId, id,  name, ideas, title, timestamp }) {

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

    const editPost = (id) => {
        return (
            <Link to="/addNewPost" >
                <AddNewPost  id={id} />
            </Link>
        )
    }



    return (
        <div  className="post">
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
                    <p>{timestamp?.toDate().toUTCString()}</p>
                </div>
            </div>
            <div className="post__buttons">
                <button onClick={() => deletePost(id)}>Delete Post</button>
                {/* <Link className="" to="/addNewPost"> */}
                    <button onClick={() => editPost(id)}>Edit Post</button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Post

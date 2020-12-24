import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import db from '../../../firebase';
import './EditPost.css';
import firebase from 'firebase';


function EditPost() {

    const link = useParams();
    var roomId = link.roomId;
    var id = link.id;
    const history = useHistory();

    var [user, setUser] = useState([]);
    const [ideas, setIdeas] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        db.collection("blog").doc(roomId).collection("messages").doc(id).onSnapshot((snapshot) => (
            setUser(snapshot.data().name),
            setTitle(snapshot.data().title),
            setIdeas(snapshot.data().ideas)
        ))
    }, []);
    
    

    console.log("Hello:-", user)


    const update = ( e ) => {
        e.preventDefault()

        var updateValue = db.collection("blog").doc(roomId).collection("messages").doc(id);

        return updateValue.update({
            ideas: ideas,
            title: title,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
            console.log("Updated")
            history.push('/:roomId')
        })
        .catch(function (error) {
            console.log("Error:-", error)
        })
    }


    return (
        <div className="editPost">
            <div className="login__container">
                <h2>Write something amazing</h2>
                <form>
                    <h5>Name</h5>
                    <input
                        type="text"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <h5>Title</h5>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <h5>Content</h5>
                    <div className="content">
                        <textarea
                            value={ideas}
                            onChange={e => setIdeas(e.target.value)}

                        ></textarea>
                    </div>
                    <button
                        className="login__signInButton"
                        type="submit"
                        onClick= {update}
                    >Update</button>             
                </form>
            </div>
        </div>
    )
}

export default EditPost

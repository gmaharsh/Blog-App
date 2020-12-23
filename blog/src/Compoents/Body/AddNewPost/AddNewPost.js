import React, { useEffect, useState } from 'react'
import db from '../../../firebase';
import './AddNewPost.css';
import { useHistory } from "react-router-dom";
import Select from 'react-select';
import firebase from 'firebase';


function AddNewPost() {

    const history = useHistory();

    const [user, setUser] = useState([]);
    const [topic, setTopic] = useState([]);
    const [title, setTitle] = useState([]);
    const [ideas, setIdeas] = useState([]);
    const [already, setAlredy] = useState([]);
    

    useEffect(() => {
        db.collection("blog").onSnapshot((snapshot) => setAlredy(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        ))
    }, [])

    const addNewDocument = (id) => {
        console.log("Id at new Document:-", id)
        console.log("user:-", user)
        console.log("ideas:-", ideas)
        console.log("title:-", title)

        db.collection("blog").doc(id).collection("messages").add({
                name: user,
                title: title,
                ideas: ideas,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            })
        
    }
    

    const newPost = (e) => {
        e.preventDefault()

        for (var i = 0; i < already.length; i++){
            var name = already[i].data.name;
            var id = already[i].id;
            var value = false;
            if (name == topic) {
                name = topic;
                id = id;
                value = true;
                break;
            } else {
                console.log("False")
                value = false;
            }
        }

        if (!value) {
            db.collection("blog").add({
                name: topic
            })
            .then(function (docRef) {
                addNewDocument(docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

            
        } else {
            db.collection("blog").doc(id).collection("messages").add({
                name: user,
                title: title,
                ideas: ideas,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            })
        }

        history.push('/')

    }



    return ( 
        <div className="addNewPost">
            
            <div className="login__container">
                <h2>Write something amazing</h2>
                <form>
                    <h5>Name</h5>
                    <input
                        type="text"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <h5>On Which Topic you want to write</h5>
                    <input
                        type="text"
                        value={topic}
                        onChange={e => setTopic(e.target.value)}
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
                            name={ideas}
                            onChange={e => setIdeas(e.target.value)}

                        ></textarea>
                    </div>
                    <button
                        className="login__signInButton"
                        type="submit"
                        onClick={newPost}
                    >Post</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewPost

import React, { useEffect, useState } from 'react';
import './Body.css';
import SearchIcon from '@material-ui/icons/Search';
import Post from './Post/Post';
import Topic from './Topics/Topic';
import db from '../../firebase';
import { useParams } from 'react-router-dom';

function Body() {

    const [topics, setTopic] = useState([]);
    const [messages, setMessages] = useState([]);

    const { roomId } = useParams()
    console.log(roomId)
    // console.log("topic a>>>>", topics)
    // console.log("Message at :- ", messages)

    useEffect(() => {
        const unsubscribe = db.collection("blog").onSnapshot((snapshot) => setTopic(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
           }))
        ))
        return () => {
            unsubscribe();
        }
    }, [])

    useEffect(() => {
        db.collection("blog").doc(roomId).collection("messages").onSnapshot((snapshot) => setMessages(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
           }))
        ))
    }, [roomId])

    console.log("messages:", messages)


        
    return (
        <div className="body">
            <div className="body__sidebar">
                <div className="sidebar__search">
                    <input type="text" placeholder="Search for Topic" />
                    <SearchIcon />
                </div>
                <div className="sidebar__topics">
                    {topics.map(topic => (
                        <Topic id={topic.id} name={topic.data.name} />
                    ))}
                    {/* <Topic name="Maharsh" /> */}
                </div>
            </div>
            <div className="body__posts">
                {/* <h1>{roomId}</h1> */}
                {messages.map(message => (
                    <Post roomId = {roomId} id={message.id}  title={message.data.title} ideas = {message.data.ideas} name={message.data.name} timestamp={message.data.timestamp} />
                ))}

            </div>
        </div>
    )
}

export default Body

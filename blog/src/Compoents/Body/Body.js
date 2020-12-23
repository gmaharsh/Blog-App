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
    console.log("Message at :- ", messages)

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
        db.collection("blog").doc(roomId).collection("messages").onSnapshot(snapshot => (
            setMessages(
                snapshot.docs.map((doc) => doc.data())
            )
        ))
    }, [roomId])

    // console.log(topics[0].id)


        
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
                    <Post title={message.title} ideas = {message.ideas} name={message.name} timestamp={message.timestamp} />
                ))}

            </div>
        </div>
    )
}

export default Body

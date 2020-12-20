import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <div className="post__title">
                <h1>Angerness should not be done</h1>
            </div>
            <div className="post__body">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="post__userDetails">
                <div className="post__addedBy">
                    <h4>Added By:-</h4>
                    <p>Maharsh</p>
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

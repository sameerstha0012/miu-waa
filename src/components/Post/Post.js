import React from 'react';
const Post = (props) => {

    return (
        <div className="Content">
            <h1>Id: {props.id}</h1>
            <div className="Field">
                <div>Title: {props.title}</div>
                <div>Author: {props.author}</div>
            </div>

        </div>
    );
}

export default Post;
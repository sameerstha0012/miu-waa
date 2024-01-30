import React from 'react';
import Post from "../../components/Post/Post";

const Posts = (props) => {
    const posts = props.posts.map(post => {    // Create an array of objects
        return <Post
            id={post.Id}
            title={post.Title}
            author={post.Author}
        />
    });
    return <div>{posts}</div>;

}

export default Posts;
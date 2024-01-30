import React from 'react';

const UpdatePost = (props) => {
    return (
        <>
            <div className="UpdatePost">
                <input type="text" name={'author'} onChange={props.onChange} value={props.author}></input>
                <button>Update a Product</button>
            </div>
            <div className="PostView">
                <h3>{props.title}</h3>
                <div>{props.author}</div>
                <div className="Field">
                    <div>This is the content in the post… </div>
                </div>
                <div>
                    <a href={props.title}>edit</a>
                    <a href={props.title}>delete</a>
                </div>
            </div>
        </>
    );
}

export default UpdatePost;
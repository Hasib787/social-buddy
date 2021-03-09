import React from 'react';

const Post = (props) => {
    const {id, title, body} = props.post;
    return (
        <div>
            <h2><strong>Id:{id}</strong> {title}</h2>
           <p>{body}</p>
        </div>
    );
};

export default Post;

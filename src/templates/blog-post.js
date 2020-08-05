import React from 'react'

function BlogPost(props){
    const { title, excerpt, content } = props.pageContext;
    return(
        <div>
            <p>{title}</p>
            <div>{content}</div>
        </div>
    )
}

export default BlogPost;
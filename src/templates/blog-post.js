import React from 'react'
import styled from 'styled-components'

function BlogPost(props){
    const { title, excerpt, content } = props.pageContext;
    return(
        <Article>
            <p>{title}</p>
            <div dangerouslySetInnerHTML={{__html: content }}></div>
        </Article>
    )
}

export default BlogPost;

const Article = styled.div`
    width: 800px;
    display: block;
    margin: 0 auto;
    img {
        display: block;
        margin: 0 auto;
    }
`
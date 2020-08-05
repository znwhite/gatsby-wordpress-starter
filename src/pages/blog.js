import React from 'react';
import styled from 'styled-components';

function Blog(props) {
    const blogs = props.data.allWordpressPost.edges;
    console.log(blogs);
    return (
        <div>
            {blogs.map((blog, i) => {
                return(
                    <BlogPreview key={i}>
                        <p>{blog.node.title}</p>
                    </BlogPreview>
                )
            })}
        </div>
    )
}

export default Blog;

export const BlogWpQuery = graphql`
  query BlogWpQuery {
    allWordpressPost {
        edges {
          node {
            title
            content
            slug
            status
            excerpt
          }
        }
      }
  }
`

const BlogPreview = styled.div`
  text-align: center;
  font-size: 48px;
  margin: 32px 0;
`
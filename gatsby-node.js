const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
    return graphql(`
    query {
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
  `).then(result => {
        if (result.errors) {
            throw result.errors;
        }

        result.data.allWordpressPost.edges.forEach(edge => {
            const { title, excerpt, slug, content } = edge.node;
            createPage({
                path: `blog/${slug}`,
                component: blogPostTemplate,
                context: {
                    title,
                    excerpt,
                    content
                },
            })
        })
    })
}
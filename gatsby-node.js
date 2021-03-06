const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);


const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })


// Generate slug field for all markdown files
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const markd = new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            services: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "content/services\/.*/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "content/team\/.*/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    promoted
                    image
                    date(formatString: "DD MMMM YYYY")
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            basic: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "content/basic\/.*/" } }
            ) {
              edges {
                node {
                  id
                  excerpt
                  html
                  frontmatter {
                    title
                    path
                    template
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        result.data.services.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/service.js');
          createPage({
            path: node.frontmatter.path ? node.frontmatter.path : node.fields.slug,
            component,
            context: {
              id: node.id
            }
          });
        });
        result.data.team.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/team.js');
          createPage({
            path: node.frontmatter.path ? node.frontmatter.path : node.fields.slug,
            component,
            context: {
              id: node.id
            }
          });
        });
        result.data.basic.edges.forEach(({ node }) => {
          let component = path.resolve('src/templates/basic.js');
          if (node.frontmatter.template) {
            component = path.resolve(`src/templates/${node.frontmatter.template}.js`);
          }
          createPage({
            path: node.frontmatter.path ? node.frontmatter.path : node.fields.slug,
            component,
            context: {
              id: node.id
            }
          });
        });
        resolve();
      }),
    );
  });

  const accounting = makeRequest(
    graphql,
    `
    {
      allAccountingsJson {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allAccountingsJson.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  return Promise.all([markd, accounting])
};
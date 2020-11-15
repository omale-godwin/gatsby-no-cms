import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
const Accountings = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allAccountingsJson.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>

        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
export default Accountings
export const pageQuery = graphql`
  query Accountings {
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
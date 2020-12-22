import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
const Accountings = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="strip">
      <div className="container pt-6 pb-6 pb-md-10">
        <div className="row justify-content-start">

          <ul>
            {data.allAccountingsJson.edges.map(document => (

              <div className="list-group">
                <li key={document.node.id}>

                  <h5>
                    <Link className="list-group-item " to={`/${document.node.id}`}>{document.node.title}</Link>
                  </h5>

                </li>

              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../src/components/Layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.accountingsJson.title}</h1>
    <br /><br />
    <p>{data.accountingsJson.content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    accountingsJson(id: { eq: $id }) {
      title
      content
      
      
    }
  }
`
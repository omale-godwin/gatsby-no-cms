import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/Layout"
import parser from 'html-react-parser';
const data = require('../../categories/architectures.json');


const Posts = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get('id');

  return (
  <Layout>
<div className="container">
    <h1>{data[id -1].title}</h1>
    <br /><br />
    {parser(data[id -1].content.replace(/\n/gi, "<br />"))};

    </div>
  </Layout>
)}

export default Posts


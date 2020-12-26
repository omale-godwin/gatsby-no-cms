import React, {useState, useEffect} from "react"
import { Link, graphql } from "gatsby"

import getURL from 'get-url-parts';



import Layout from "../../components/Layout"
import parser from 'html-react-parser';
const data = require('../../categories/computer_sciences.json');


const Posts = () => {
const [data, setData] = useState(0);

useEffect(() => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  
  data = setData(params.get('id'));
 
})

 
 

  return (
  <Layout>
<div className="container">
    <h1>{data[data - 1].title}</h1>
    <br /><br />
    {parser(data[data - 1].content.replace(/\n/gi, "<br />"))};

    </div>
  </Layout>
)}

export default Posts


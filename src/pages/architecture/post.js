import React, {useState, useEffect} from "react"
import { Link, graphql } from "gatsby"





import Layout from "../../components/Layout"
import parser from 'html-react-parser';
const data = require('../../categories/architectures.json');


const Posts = () => {
  

  const [id, setId] = useState();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    
  setId(params.get('id'));
   console.log(id)
  }, )
  
 
   
  return (
//   <Layout>
// <div className="container">
// <h1>{data[ id - 1].title}</h1>
//     <br /><br />
//     {parser(data[id - 1].content.replace(/\n/gi, "<br />"))};

//     </div>
//   </Layout>

<Layout>
  <div className='container'>
    {
      id ? <div>
        <h1>{data[ id - 1].title}</h1>
        <br /><br />
        <p>{parser(data[id - 1].content.replace(/\n/gi, "<br />"))};</p>
      </div> : "no id"
    }
  </div>
</Layout>

)}

export default Posts


import React, {useState} from "react"
import { Link, navigate, graphql } from "gatsby"
import Layout from "../../components/Layout"
import './link.css'




const MARKETING = ({ data }) => {
  const [count, setCount] = useState(0);

  function singlepage(e) {
    
    
  sessionStorage.setItem('postid', e)

  console.log(sessionStorage.getItem('postid'))
     navigate(`/MARKETING/MARKETINGPost?id=${e}`)
   
  }

  return ( 

 
  <Layout>
   
    <div className="strip">
      <div className="container pt-6 pb-6 pb-md-10">
        <div className="row justify-content-start">

  <div className="container">
        <h4 style={{textAlign: 'center'}}>
          <span style={{fontSize: '15px'}}>Please Scroll Down To Click On Your Topic To View Abstract, Table Of Contents And Chapter 1-5, 
          references, questionnaire,<strong> source code</strong> And Download complete Material Instantly Or 
          <span style={{color: '#008000'}}><strong>Call Us Or Whats-App Us (+234) 9032196744</strong></span>&nbsp;For Your
           <em>Computer Science Project Topics and Materials</em></span></h4>
           </div>
          <ul>
            {data.allComputerSciencesJson .edges.map(document => ( 

              <div key={document.node.id} className="list-group" >
                <li key={document.node.id }>

                  <h5 >
                    <button key={document.node.id } onClick={(e) =>singlepage(document.node.id)} className="list-group-item " to={`/${document.node.id}`}>{document.node.title}</button>
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
)}
export default MARKETING
export const pageQuery = graphql`
  query MARKETING {
    allComputerSciencesJson  {
      edges {
        node {
          id
          title
        }
      }
    }
  }
  
`
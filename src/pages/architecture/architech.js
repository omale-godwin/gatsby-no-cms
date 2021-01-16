import parser from 'html-react-parser';
import React, {useState} from "react"
import { Link, navigate, graphql } from "gatsby"
import Layout from "../../components/Layout"
import './link.css'
const Architecture = ({ data }) => {
  const [count, setCount] = useState(0);

  function singlepage(e, title) {
    console.log(e);
    navigate(`/architecture/post?title=${title}&id=${e}`)
  }
  return ( 
  <Layout>
    <div className="text-center pt-5" style={{color: '#8036ca'}}>
      <h4>ARCHITECTURE PROJECT TOPICS AND MATERIALS</h4>
      

    </div>
    
    <h3></h3>
    <div className="strip">
      <div className="container pt-6 pb-6 pb-md-10">
        <div className="row justify-content-start">

          <ul>
            {data.allArchitecturesJson.edges.map(document => ( 

              <div key={document.node.id} className="list-group" >
                <li key={document.node.id }>
               <ul>
                 <li >
                  <h5 >
                    <button key={document.node.id } onClick={(e) =>singlepage(document.node.id, document.node.title)} className="list-group-item " to={`/${document.node.id}`}><h3>{parser(document.node.title)}</h3></button>
                  </h5>
                  </li>
                  </ul>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
     </Layout>
)}
export default Architecture
export const pageQuery = graphql`
  query Architecture {
    allArchitecturesJson  {
      edges {
        node {
          id
          title
        }
      }
    }
  }
  
`
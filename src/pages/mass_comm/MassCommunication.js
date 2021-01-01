import React, {useState} from "react"
import { Link, navigate, graphql } from "gatsby"
import Layout from "../../components/Layout"
import './link.css'




const MassCommunication = ({ data }) => {
  const [count, setCount] = useState(0);

  function singlepage(e) {
    
    
  sessionStorage.setItem('postid', e)

  console.log(sessionStorage.getItem('postid'))
     navigate(`/mass_comm/MassCommunicationPosts?id=${e}`)
   
  }

  return ( 

 
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="strip">
      <div className="container pt-6 pb-6 pb-md-10">
        <div className="row justify-content-start">

          <ul>
            {data.allMassCommunicationsJson .edges.map(document => ( 

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
export default MassCommunication
export const pageQuery = graphql`
  query MassCommunication {
    allMassCommunicationsJson  {
      edges {
        node {
          id
          title
        }
      }
    }
  }
  
`
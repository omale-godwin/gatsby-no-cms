import React, {useState} from "react"
import { Link, navigate, graphql } from "gatsby"
import Layout from "../../components/Layout"
import './link.css'




const Computer = ({ data }) => {
  const [count, setCount] = useState(0);

  function singlepage(e) {
    console.log(e);
    navigate(`/computer/posts?id=${e}`, 
    {
      state: {numbers: e}
    })
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
export default Computer
export const pageQuery = graphql`
  query Computer {
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
import React, {useState, useEffect} from "react"
import { Link, navigate, graphql } from "gatsby"
import Layout from "../../components/Layout"
import data from '../../categories/law_project.json'
import './link.css'
const LAW = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState();
  const [loadings, srtLoadings] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
 let index = 0;
  useEffect(() => {
    setPosts(data)
  }, [])
console.log(posts);
  function singlepage(e, title) {
    console.log(e);
    navigate(`/LAW/LAWPost?title=${title}&id=${e}`)
  }
  return ( 
  <Layout>
    <div className="text-center pt-5" style={{color: '#8036ca'}}>
    <h4 className="container" style={{textAlign: 'center'}}>
          <span style={{fontSize: '15px'}}>Please Scroll Down To Click On Your Topic To View Abstract, Table Of Contents And Chapter 1-5, 
          references, seminar defence, questionnaire,<strong> source code</strong> And Download complete Material Instantly Or 
          <span style={{color: '#008000'}}><strong>Call Us Or Whats-App Us (+234) 9032196744</strong></span>&nbsp;For Your
           <em>Computer Science Project Topics and Materials</em></span></h4>
       
    </div>
    
    <h3></h3>
    <div className="strip">
      <div className="container pt-6 pb-6 pb-md-10">
        <div className="row justify-content-start">

          <ul>
            {data.map((document, index) => ( 

              <div key={index} className="list-group" >
                <li key={index}>
               <ul>
                 <li >
                  <h6 >
                    <button key={index } onClick={(e) =>singlepage(index, document.title)} className="list-group-item " to={`/${index}`}>{document.title}</button>
                  </h6>
                  </li>
                  </ul>
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
export default LAW

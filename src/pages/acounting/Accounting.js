import React, {useState, useEffect} from "react"
import { Link, navigate, graphql } from "gatsby"
import Layout from "../../components/Layout"
import data from '../../categories/accountings.json'
import Paginaion from '../../components/Paginaion';
import './link.css'
const Accounting = () => {
  const [count, setCount] = useState(0);

  const [loadings, srtLoadings] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(60);
 let index = 0;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentpost = data.slice(indexOfFirstPost, indexOfLastPost);

  function singlepage(e, title) {
    console.log(e);
    navigate(`/acounting/AccountingPosts?title=${title}&id=${e}`)
  }

  //cange current page number
  const paginated = (pagenumber) => setCurrentPage(pagenumber); 
  return ( 
  <Layout>
    <div className="container text-center pt-5" style={{color: '#8036ca'}}>
    <h4 style={{textAlign: 'center'}}>
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
            {currentpost.map((document, index) => ( 
 
              <div key={index} className="list-group" >
                <li key={index}>
               <ul>
                 <li  style={{listStyleType: "none"}}>
                  <h5 >
                    <button key={index } onClick={(e) =>singlepage(index, document.title)} className="list-group-item " to={`/${index}`}>{document.title}</button>
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
   <div style={{wordWrap: "break-word"}} className="container-fluid"><Paginaion postPerPage={postPerPage} totalPosts={data.length} paginate={paginated }/></div>
  </Layout>
)}
export default Accounting

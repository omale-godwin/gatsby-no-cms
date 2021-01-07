

import React, {useState} from 'react';
import { Link, graphql, navigate } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

import '../Andriod/andriods.css'


const Andriod = ({ data }) => {

  const [count, setCount] = useState(0);

  function singlepage(e) {
    
    
  sessionStorage.setItem('postid', e)

  console.log(sessionStorage.getItem('postid'))
     navigate(`/Andriod/AndriodPost?id=${e}`)
   
  }


  const search = (e) => {
    console.log('output');
  }
   
    return (
        <Layout bodyclass="page-services">
      <SEO title="Services" />
      <div className="container">
      <div className="bbbootstrap">
    
         <form>
             <span role="status" aria-live="polite" className="ui-helper-hidden-accessible">
                 </span><input type="text" onChange={search} id="Form_Search" value="" placeholder="Search for your best result in our community" role="searchbox" className="InputBox " autoComplete="on"/>
                     <input type="submit" id="Form_Go" className="Button" value="GO"/>
         </form>
     </div>
 </div>
 <div className="strip">
      <div className="container pt-6 pb-6 pb-md-10">
        <div className="row justify-content-start">

          <ul>
            {data.allProgramsJson .edges.map(document => ( 

              <div key={document.node.id} className="list-group" >
                <li key={document.node.id }>
               <ul>
                 <li >
                  <h5 >
                    <button key={document.node.id } onClick={(e) =>singlepage(document.node.id, document.node.title)} className="list-group-item " to={`/${document.node.id}`}>{document.node.title}</button>
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
    )
}
export default Andriod;
export const pageQuery = graphql`
  query Andriod {
    allProgramsJson  {
      edges {
        node {
          id
          title
        }
      }
    }
  }
  
`
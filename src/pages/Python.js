

import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import '../components/about.css'
import './andriods.css'


const Python = () => {
  
 
    
    return (
        <Layout bodyclass="page-services">
      <SEO title="Services" />
      <div className="container">
      <div className="bbbootstrap">
    
         <form>
             <span role="status" aria-live="polite" className="ui-helper-hidden-accessible">
                 </span><input type="text" id="Form_Search" value="" placeholder="Search for your best result in our community" role="searchbox" className="InputBox " autoComplete="on"/>
                     <input type="submit" id="Form_Go" className="Button" value="GO"/>
         </form>
     </div>
 </div>
   

        </Layout>
    )
}
export default Python;
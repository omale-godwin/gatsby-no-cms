

import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import '../components/about.css'



const Source = () => {
  

    
    return (
        <Layout bodyclass="page-services">
      <SEO title="Services" />


        
      <section className="bg-light section section-lg-bottom">



<div className="container">
    <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-title">exclusive features</h2>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="text-center shadow card py-3 border-0 rounded-sm">
                <div className="card-body"> <i className="fa fa-desktop icon-lg icon-bg-square mb-5 icon-primary"></i>
                    <h4 className="mb-3">Android App Project Source Code</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                 <Link to="/Andriod" className="btn btn-primary"> View Andriod Project </Link>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="text-center shadow card py-3 border-0 rounded-sm">
                <div className="card-body"> <i className="fa fa-gears icon-lg icon-bg-square mb-5 icon-primary"></i>
                    <h4 className="mb-3">Reactjs Python Django App Project Source Code</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                    <Link to="/Source/Andriod" className="btn btn-primary"> View Python Project </Link>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="text-center shadow card py-3 border-0 rounded-sm">
                <div className="card-body"> <i className="fa fa-shield icon-lg icon-bg-square mb-5 icon-primary"></i>
                    <h4 className="mb-3">PHP, Nodejs Reactjs</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                    <Link to="/Source/Andriod" className="btn btn-primary"> View php, nodejs Project </Link>
                </div>
            </div>
        </div>
    </div>
</div>
</section>


        </Layout>
    )
}
export default Source;
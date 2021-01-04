import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import '../components/about.css'


const Aboutus = () => {
  

    
    return (
        <Layout bodyclass="page-services">
      <SEO title="Services" />


<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">GradedProject.com</h1>
        <p className="lead text-muted mb-0">The main aim of this website to provide free and paid projects, free and paid academe projects with source code,
         paid academe projects, and as per client requirement. Free project 24 also provides free projects for beginners and students. 
         We’re skilled software application professionals heaving (extra) than three years of software program development knowledge in a
          distinct era. </p>
       
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" className="img-fluid"/></div>
    </div>
  </div>
</div>

<div className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Students Assistance</h2>
        <p className="font-italic text-muted mb-4">We also take academic free  projects and academic paid projects for MCA, BE, ME, Tech BCA engineering, B.SC in CSE diploma 
          in engineering(CSE), IT, MSC, BIT, TY BSC, software engineer final year polytechnic
         college and university students can submit supply code in polytechnic, college, and university with as per your requirement.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" className="img-fluid mb-4 mb-lg-0"/></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Code Provision</h2>
        <p className="font-italic text-muted mb-4">We will give completed practical source code, documentation, idea report and record, summary, 
        any database, front-end, and back-end, it incorporates, PHP, C#, Asp. Net, Oracle 11g, Oracle Forms, Java. You may get the unequaled 
        expert contact, prepared to publish well-commented supply code and assignment documentation..</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div>

<div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light"></h2>
        <p className="font-italic text-muted"></p>
      </div>
    </div>

    </div>
</div>



        </Layout>
    )
}
export default Aboutus;
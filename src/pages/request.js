import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import './request.css'

const Request = () => {
  
  return (
    <Layout bodyclass="page-teams">
      <SEO title="Team" />
      <div className="container">
    <div className="row">
        <div className="col-md-4">
            <p className="logo">Your<br/><span>Project Solution</span></p>
            <div className="image"><img src="https://img.icons8.com/color/96/000000/meeting.png" /></div>
            <h6 className="mt-3 text-center">How can we help?</h6>
            <p>Interested in our services? Get in touch with us via the contact information or form below and we’ll get back to you as soon as possible!</p>
        </div>
        <div className="col-md-8">
            <div className="d-flex pt-3 pr-2">
                <p className="ml-auto mb-0">want to speak with an agent?</p>
            </div>
            <div className="d-flex pr-2">
                <p className="ml-auto"><strong><i className="fas fa-phone-volume"></i>09032196744</strong></p>
            </div>
            <h3>
            <form className="information">
                <h4 className="form-heading">Let's get back to your project !</h4>
                <p className="form-para"> Interested in our services? Get in touch with us via the contact information or form below and we’ll get back to you as soon as possible! </p>
                <div className="form-group"> <input type="email" className="form-control" id="email" required/><label className="form-control-placeholder" for="email">Email address</label> </div>
                <div className="form-group"> <input type="text" className="form-control" id="name" required/><label className="form-control-placeholder" for="name">Name</label> </div>
                <div className="form-group"> <input type="text" className="form-control" id="number" required/><label className="form-control-placeholder" for="number">Phone number</label> </div>
                <div className="form-group"> <input type="text" className="form-control" id="number" required/><label className="form-control-placeholder" for="number">Project Topic</label> </div>
                <div className="form-group mt-3"><button type="button" className="btn btn-block btn-primary"><span>Submit project request &nbsp;<i className="fas fa-arrow-right"></i></span></button></div>
                <p className="terms mt-4">By clicking "Return to my quotes", you consent to the Zebra storing the information submitted on this page so you can get most up-to-date quotes, no matter what device you are using. You also agree to The Zebra's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></p>
            </form>
            </h3>
        </div>
    </div>
</div>

    </Layout>
  );
};

export default Request;

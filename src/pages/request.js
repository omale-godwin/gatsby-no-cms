import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';


const Request = () => {
  
  return (
    <Layout bodyclass="page-teams">
      <SEO title="Team" />

      <section className="form-style-4 p-relative bg-white">
    <div className="container">
    <div className="row">
      <div className="col-12 col-md-8 p-0">
        <iframe
        style={{width:"100%",
        height:"100%",
        frameborder:"0", style:"border:0" }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBMgRblEioSamju0neKitZS49SNujWkbMM
        &q=Space+Needle,Seattle+WA" allowFullScreen>
      </iframe>
    </div>
    <div className="col-12 col-md-4 px-4 py-5 bg-white">
      <form>
        <h1 className="font-title bolder text-center mb-4 uppercase" >Request Project Material</h1>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control flat material-shadow" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control flat material-shadow" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="number" className="form-control flat material-shadow" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control flat material-shadow" rows="4"></textarea>
        </div>
        <div className="form-group ">
          <button type="submit" className="btn btn-primary"><i className="fa fa-paper-plane mr-2"></i>Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
    </Layout>
  );
};

export default Request;

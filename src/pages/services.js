import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Services = props => {
  const services = props.data.services.edges;
  const { intro } = props.data;
  const introImageClasses = `intro-image ${intro.frontmatter.intro_image_absolute && 'intro-image-absolute'} ${intro.frontmatter.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;

  return (
    <Layout bodyClass="page-services">
      <SEO title="Services" />

      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
            {intro.frontmatter.intro_image && (
              <div className="col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative">
                <img alt={intro.frontmatter.title} className={introImageClasses} src={intro.frontmatter.intro_image} />
              </div>
            )}
          </div>
        </div>
      </div>
          


      <div className='container-fluid mx-auto mt-5 mb-5 col-12' style={{textAlign: 'center'}}>

    <div className="hd">Why Students Believe in Us</div>
    <p><small className="text-muted">We Always render more and better service than <br />is expected of Us, no matter what your ask may be.</small></p>
    <div className="row" style={{justifyContent: 'center'}}>
        <div className="card col-md-3 col-12">
            <div className="card-content">
                <div className="card-body"> <img className="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div className="shadow"></div>
                    <div className="card-title"> Find Or Request Source Code Of Any WebApp or mobile App With Chapter 1-5 Docx </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your need</small> </p>
                        <button className="serbtn btn btn-primary">Source Code</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
                <div className="card-body"> <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
                    <div className="card-title"> We Build Scalable & Smart Mobile App & Web App
 </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                        <button className="serbtn btn btn-primary">Make Enquiry</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
                <div className="card-body"> <img className="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                    <div className="card-title"> Hire A Writer</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        <button className="serbtn btn btn-primary">Hire A Writer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="row" style={{justifyContent: 'center'}}>
        <div className="card col-md-3 col-12">
            <div className="card-content">
                <div className="card-body"> <img className="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div className="shadow"></div>
                    <div className="card-title"> Paraphrasing Tool (project Rewriter)</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your need</small> </p>
                        <button className="serbtn btn btn-primary">Rewrite Text</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
                <div className="card-body"> <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
                    <div className="card-title"> Request Any Department or Course Project Topic Material
 </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                        <button className="serbtn btn btn-primary">Make Request</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
                <div className="card-body"> <img className="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                    <div className="card-title"> Make Money Online Selling Project Materials</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        <button className="serbtn btn btn-primary">Sell Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="ft">
        <p className="chk"><small className="text-muted">Still not sure?</small></p>
        <Link to="" className="btn btn-primary">Read All Testimonials</Link>
    </div>
</div>
    </Layout>
  );
};

export const query = graphql`
  query ServicesQuery {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services\/.*/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: {regex: "/(services.md)/"}) {
      html
      frontmatter {
        title
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
      }
    }
  }
`;

export default Services;

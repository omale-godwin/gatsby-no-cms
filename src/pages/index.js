import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../components/Layout';


import Jumbotron from '../pages/jumbotron'
import './index.css'
import Accountings from './accountings';
const Home = props => {
  const intro = props.data.intro;
  const site = props.data.site.siteMetadata;
  const services = props.data.services.edges;
  const features = props.data.features.edges;
  const introImageClasses = `intro-image ${intro.frontmatter.intro_image_absolute && 'intro-image-absolute'} ${intro.frontmatter.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;

  return (
    <Layout bodyClass="page-home">
      <SEO title={site.title} />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple
           content types using Markdown and JSON
            sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>

      <div className="jumbo">
        <Jumbotron />


      </div>
      <div className="teature">
        {features.length > 0 && (
          <div className="strip strip-grey">
            <div className="container pt-6 pb-6 pt-md-10 pb-md-10">
              <div className="row justify-content-center">
                {features.map(({ node }) => (
                  <div key={node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                    <div className="feature">

                      <h2 className="feature-title">{node.title}</h2>
                      <div className="feature-content">{node.description}</div>
                      <button className="serbtn btn btn-primary">{node.text}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <Link className="button button-primary" to="/services/">View All Project By Department</Link>
        </div>
      </div>




      <div className="strip">
        <div className="container pt-6 pb-6 pb-md-10">
          <div className="row justify-content-start">

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">ACCOUNTING PROJECTS</Link>
                  </h2>
                  <p>Accounting project topics and materials for undergraduate and post graduate students. The research project paper and seminar topics and materials</p>
                </div>
              </div>
            </div>




            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">APPLIED SCIENCE</Link>
                  </h2>
                  <p>These are Apllied Science  project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="architecture/architech/">ARCHITECTURE</Link>
                  </h2>
                  <p>These are Architecture Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">AGRICULTURAL SCIENCE PROJECT</Link>
                  </h2>
                  <p>These are Agricultural Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">Banking and Finance Project Topics and Materials</Link>
                  </h2>
                  <p>These are Banking and Finance department project topics with available well written chapters 1 to chapter 5,
                   Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">Biological Science Project Topics and Available Materials</Link>
                  </h2>
                  <p>These are Biology Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>







            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">Business Administration projects</Link>
                  </h2>
                  <p>These are Business Administration department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>  </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/Biochemistry/Biochemistry">Biochemistry Project Topics and Available Materials</Link>
                  </h2>
                  <p>These are Biochemistry department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">CHEMISTRY</Link>
                  </h2>
                  <p>These are Chemistry Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/chemical_engineering/ChemicalEngineering">CHEMICAL ENGINEERING</Link>
                  </h2>
                  <p>These are Chemical Engineering Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">Civil Engineering Project Topics and Materials</Link>
                  </h2>
                  <p>These are Civil Engineering department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>       </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/computer/computer/">Computer Science project Topics and Materials</Link>
                  </h2>
                  <p>These are Computer Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">COMPUTER ENGINEERING</Link>
                  </h2>
                  <p>These are Computer Engineering Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">COMPUTER SCIENCE</Link>
                  </h2>
                  <p>These are Computer Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">CRIMINOLOGY AND SECURITY STUDIES Project Topics and Materials</Link>
                  </h2>
                  <p>CRIME CASE REPORTING AND THE OBSERVABLE IMPACT ON ITS VICTIMS | CONFESSIONAL STATEMENT UTILITY IN CRIMINAL TRIALS .. These are Criminology and Security Studies department project topics with available well written chapters one to chapter five, Please click on a project topic to view its details and order for the complete material</p>
                </div></div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">Economics Project Topics and Materials</Link>
                  </h2>
                  <p>These are Economics department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">Education Project Topics and Materials</Link>
                  </h2>
                  <p>These are Education department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>   </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">ELECTRICAL & ELECTRONICS ENGINEERING</Link>
                  </h2>
                  <p>These are Electrical & Electronic Engineering Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">ENGLISH LANGUAGE & LITERATURE</Link>
                  </h2>
                  <p>These are English Language & Literature department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">ENTREPRENEURSHIP</Link>
                  </h2>
                  <p>These are Entertreneurship  department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>






            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">ENVIRONMENTAL DESIGN</Link>
                  </h2>
                  <p>These are Enviromental Design department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">Biological Science Project Topics and Available Materials</Link>
                  </h2>
                  <p>These are Biology Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">ENVIRONMENTAL SCIENCE</Link>
                  </h2>
                  <p>These are Enviromental Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">ESTATE MANAGEMENT</Link>
                  </h2>
                  <p>These are Estate Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">GEOLOGY</Link>
                  </h2>
                  <p>These are Geography department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">HISTORY</Link>
                  </h2>
                  <p>These are History department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">HUMAN RESOURCE MANAGEMENT</Link>
                  </h2>
                  <p>These are Human Resources Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">INSURANCE</Link>
                  </h2>
                  <p>These are Insurance department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">GEOLOGY</Link>
                  </h2>
                  <p>These are Geography department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">INTERNATIONAL RELATIONS</Link>
                  </h2>
                  <p>These are International Relation department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">LAW</Link>
                  </h2>
                  <p>These are Law department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">LIBRARY SCIENCE</Link>
                  </h2>
                  <p>These are Library science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">INTERNATIONAL RELATIONS</Link>
                  </h2>
                  <p>These are International Relation department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">LINGUISTICS & COMMUNICATION</Link>
                  </h2>
                  <p>These are Linguistic & COMMUNICATION department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">MARKETING</Link>
                  </h2>
                  <p>These are Marketing department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">LIBRARY SCIENCE</Link>
                  </h2>
                  <p>These are Library science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/mass_comm/MassCommunication">MASS COMMUNICATION</Link>
                  </h2>
                  <p>These are Mass Communication department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">MATHEMATICS</Link>
                  </h2>
                  <p>These are Mathematics department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">MECHANICAL ENGINEERING</Link>
                  </h2>
                  <p>These are Mechanical Engineering department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">LIBRARY SCIENCE</Link>
                  </h2>
                  <p>These are Library science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">MEDICAL & HEALTH SCIENCE</Link>
                  </h2>
                  <p>These are Medical And Health science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">LIBRARY SCIENCE</Link>
                  </h2>
                  <p>These are Library science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">MICROBIOLOGY</Link>
                  </h2>
                  <p>These are Microbiology department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">NURSING</Link>
                  </h2>
                  <p>These are Nursing department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">OFFICE TECHNOLOGY MANAGEMENT</Link>
                  </h2>
                  <p>These are Office Technology Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">PHARMACEUTICAL SCIENCES</Link>
                  </h2>
                  <p>These are Pharmaceutical Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">PHILOSOPHY</Link>
                  </h2>
                  <p>These are Philosophy department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">PHYSICS</Link>
                  </h2>
                  <p>These are Physics department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">POLITICAL SCIENCE</Link>
                  </h2>
                  <p>These are Political Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">PSYCHOLOGY</Link>
                  </h2>
                  <p>These are Psychology department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">PUBLIC ADMINISTRATION</Link>
                  </h2>
                  <p>These are  Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">PUBLIC HEALTH</Link>
                  </h2>
                  <p>These are Public Health department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">PROJECT MANAGEMENT</Link>
                  </h2>
                  <p>These are Project  Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">PURCHASING & SUPPLY CHAIN MANAGEMENT</Link>
                  </h2>
                  <p>These are Purchasing & supply Chain Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">QUANTITY SURVEY</Link>
                  </h2>
                  <p>These are Quantity Survey department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">SCIENCE LABORATORY TECHNOLOGY</Link>
                  </h2>
                  <p>These are Science Labouratory Technology department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">SOCIOLOGY</Link>
                  </h2>
                  <p>These are Sociology department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">STATISTICS</Link>
                  </h2>
                  <p>These are Statistics department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">THEATRE ARTS</Link>
                  </h2>
                  <p>These are Theartre Arts department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">THEOLOGY & BIBLICAL STUDIES</Link>
                  </h2>
                  <p>These are Theology & bible Studies department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">URBAN & REGIONAL PLANNING</Link>
                  </h2>
                  <p>These are Urban & Religion Planning department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/accountings/">VETERINARY MEDICINE</Link>
                  </h2>
                  <p>These are Veterinary Medicine department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

          </div>

        </div>
      </div>




      <div className="row justify-content-center pb-3">
        <div className="col-auto">
          <Link className="button button-primary" to="/services/">View All Services</Link>
        </div>
      </div>



    </Layout>
  );
};

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services\/.*/" } }
      sort: { fields: [frontmatter___weight], order: ASC }
      limit: 6
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    intro: markdownRemark(
      fileAbsolutePath: {regex: "/content/index.md/"}
    ) {
        html
        frontmatter {
          image
          intro_image
          intro_image_absolute
          intro_image_hide_on_mobile
          title
        }
    }
    features: allFeaturesJson {
      edges {
        node {
          id
          title
          description
          text
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;
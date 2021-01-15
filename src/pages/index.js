import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Carousel from 'react-img-carousel';

require('react-img-carousel/lib/carousel.css');



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
        <div className="container">
        <Carousel viewportWidth="100%" autoplay={true} cellPadding={ 5 }>
    <img src='https://placekitten.com/500/300'/>
    <img src='https://placekitten.com/300/300'/>
    <img src='https://placekitten.com/400/300'/>
  </Carousel>
        </div>


      </div>
      <div className="teature">
        {features.length > 0 && (
          <div className="strip strip-grey">
            <div className="container pb-6 pt-md-1 pb-md-10">
              <div className="row justify-content-center">
                {features.map(({ node }) => (
                  <div key={node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                    <div className="feature">

                      <h2 className="feature-title">{node.title}</h2>
                      <div className="feature-content">{node.description}</div><br />
                      
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
          <Link className="button button-primary" to="/">View All Project By Department</Link>
        </div>
      </div>




      <div className="strip">
        <div className="container pt-6 pb-6 pb-md-10">
          <div className="row justify-content-start">

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/acounting/Accounting">ACCOUNTING PROJECTS</Link>
                  </h2>
                  <p>Accounting project topics and materials for undergraduate and post graduate students. The research project paper and seminar topics and materials</p>
                </div>
              </div>
            </div>




            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/APPLIEDSCIENCE/APPLIEDSCIENCE">APPLIED SCIENCE</Link>
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
                    <Link to="/Agriculture/Agriculture">AGRICULTURAL SCIENCE PROJECT</Link>
                  </h2>
                  <p>These are Agricultural Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/BankingandFinance/BankingandFinance">Banking and Finance Project Topics and Materials</Link>
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
                    <Link to="/Biochemistry/Biochemistry">Biological Science Project Topics and Available Materials</Link>
                  </h2>
                  <p>These are Biology Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/Building/Building"> Building</Link>
                  </h2>
                  <p>These are Chemical Engineering Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>




            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/BusinessAdministrationandManagement/BusinessAdministrationandManagement">Business Administration projects</Link>
                  </h2>
                  <p>These are Business Administration department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>  </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/Biochemistry/Biochemistry"> Bio-Chemistry Project Topics and Available Materials</Link>
                  </h2>
                  <p>These are Biochemistry department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/CHEMISTRY/CHEMISTRY">CHEMISTRY</Link>
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
                    <Link to="/CivilEngineering/CivilEngineering">Civil Engineering Project Topics and Materials</Link>
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
                    <Link to="/COMPUTERENGINEERING/COMPUTERENGINEERING">COMPUTER ENGINEERING</Link>
                  </h2>
                  <p>These are Computer Engineering Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/COMMERCE/COMMERCE"> COMMERCE </Link>
                  </h2>
                  <p>These are  COMMERCE department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>
         
            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/CooperativeEconomic/CooperativeEconomic">   Cooperative Economic Project Topics and Materials</Link>
                  </h2>
                  <p>   Cooperative Economic department project topics with available well written chapters one to chapter five, Please click on a project topic to view its details and order for the complete material</p>
                </div></div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/CRIMINOLOGY/CRIMINOLOGY">CRIMINOLOGY AND SECURITY STUDIES Project Topics and Materials</Link>
                  </h2>
                  <p>CRIME CASE REPORTING AND THE OBSERVABLE IMPACT ON ITS VICTIMS | CONFESSIONAL STATEMENT UTILITY IN CRIMINAL TRIALS .. These are Criminology and Security Studies department project topics with available well written chapters one to chapter five, Please click on a project topic to view its details and order for the complete material</p>
                </div></div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/Economics/Economics">Economics Project Topics and Materials</Link>
                  </h2>
                  <p>These are Economics department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/Education/Education">Education Project Topics and Materials</Link>
                  </h2>
                  <p>These are Education department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>   </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/ELECTRICAL/ELECTRICAL">ELECTRICAL & ELECTRONICS ENGINEERING</Link>
                  </h2>
                  <p>These are Electrical & Electronic Engineering Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/ENGLISH/ENGLISH">ENGLISH LANGUAGE & LITERATURE</Link>
                  </h2>
                  <p>These are English Language & Literature department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/FineandAppliedArts/FineandAppliedArts"> Fine and Applied Arts</Link>
                  </h2>
                  <p>These are  Fine and Applied Arts department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/ENTREPRENEURSHIP/ENTREPRENEURSHIP">ENTREPRENEURSHIP</Link>
                  </h2>
                  <p>These are Entertreneurship  department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>
                </div>
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
                    <Link to="/FineandAppliedArts/FineandAppliedArts"> Fine and Applied Arts</Link>
                  </h2>
                  <p>These are Enviromental Design department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/FisheryandAquacultur/FisheryandAquacultur"> Fishery and Aquacultur Project Topics and Available Materials</Link>
                  </h2>
                  <p>These are Biology Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/FoodTechnology/FoodTechnology">Food Technology</Link>
                  </h2>
                  <p>These are Food Technology department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/Geography/Geography"> Geography</Link>
                  </h2>
                  <p>These are Geography department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/GEOLOGY/GEOLOGY">GEOLOGY</Link>
                  </h2>
                  <p>These are Geography department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>
           
            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/HISTORY/HISTORY">HISTORY</Link>
                  </h2>
                  <p>These are History department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/HUMANRESOURCEMANAGEMENT/HUMANRESOURCEMANAGEMENT">HUMAN RESOURCE MANAGEMENT</Link>
                  </h2>
                  <p>These are Human Resources Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

           
            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/INSURANCE/INSURANCE">INSURANCE</Link>
                  </h2>
                  <p>These are Insurance department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/IndustrialChemistry/IndustrialChemistry"> Industrial Chemistry</Link>
                  </h2>
                  <p>These are  Industrial Chemistry department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/Geography/Geography">Geography</Link>
                  </h2>
                  <p>These are Geography department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/IndustrialRelationsandPersonneManagement/IndustrialRelationsandPersonneManagement"> Industrial Relations and Personnel Management</Link>
                  </h2>
                  <p>These are  Industrial Relations and Personnel Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/LAW/LAW">LAW</Link>
                  </h2>
                  <p>These are Law department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/LIBRARYSCIENCE/LIBRARYSCIENCE">LIBRARY SCIENCE</Link>
                  </h2>
                  <p>These are Library science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/INTERNATIONALRELATIONS/INTERNATIONALRELATIONS">INTERNATIONAL RELATIONS</Link>
                  </h2>
                  <p>These are International Relation department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/LINGUISTICSCOMMUNICATION/LINGUISTICSCOMMUNICATION">LINGUISTICS & COMMUNICATION</Link>
                  </h2>
                  <p>These are Linguistic & COMMUNICATION department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/MARKETING/MARKETING">MARKETING</Link>
                  </h2>
                  <p>These are Marketing department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/MedicalandHealthScience/MedicalandHealthScience"> Medical and Health Science</Link>
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
                    <Link to="/MATHEMATICS/MATHEMATICS">MATHEMATICS</Link>
                  </h2>
                  <p>These are Mathematics department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/MECHANICALENGINEERING/MECHANICALENGINEERING">MECHANICAL ENGINEERING</Link>
                  </h2>
                  <p>These are Mechanical Engineering department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/MedicalandHealthScience/MedicalandHealthScience">MEDICAL & HEALTH SCIENCE</Link>
                  </h2>
                  <p>These are Medical And Health science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/LIBRARYSCIENCE/LIBRARYSCIENCE">LIBRARY SCIENCE</Link>
                  </h2>
                  <p>These are Library science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/MICROBIOLOGY/MICROBIOLOGY">MICROBIOLOGY</Link>
                  </h2>
                  <p>These are Microbiology department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/NURSING/NURSING">NURSING</Link>
                  </h2>
                  <p>These are Nursing department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/OFFICETECHNOLOGYMANAGEMENT/OFFICETECHNOLOGYMANAGEMENT">OFFICE TECHNOLOGY MANAGEMENT</Link>
                  </h2>
                  <p>These are Office Technology Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/PHARMACEUTICALSCIENCES/PHARMACEUTICALSCIENCES">PHARMACEUTICAL SCIENCES</Link>
                  </h2>
                  <p>These are Pharmaceutical Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/PHILOSOPHY/PHILOSOPHY">PHILOSOPHY</Link>
                  </h2>
                  <p>These are Philosophy department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/PHYSICS/PHYSICS">PHYSICS</Link>
                  </h2>
                  <p>These are Physics department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/POLITICALSCIENCE/POLITICALSCIENCE">POLITICAL SCIENCE</Link>
                  </h2>
                  <p>These are Political Science department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/PSYCHOLOGY/PSYCHOLOGY">PSYCHOLOGY</Link>
                  </h2>
                  <p>These are Psychology department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/PUBLICADMINISTRATION/PUBLICADMINISTRATION">PUBLIC ADMINISTRATION</Link>
                  </h2>
                  <p>These are  Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/PUBLICHEALTH/PUBLICHEALTH">PUBLIC HEALTH</Link>
                  </h2>
                  <p>These are Public Health department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/PROJECTMANAGEMENT/PROJECTMANAGEMENT">PROJECT MANAGEMENT</Link>
                  </h2>
                  <p>These are Project  Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/PURCHASINGSUPPLYCHAINMANAGEMENT/PURCHASINGSUPPLYCHAINMANAGEMENT">PURCHASING & SUPPLY CHAIN MANAGEMENT</Link>
                  </h2>
                  <p>These are Purchasing & supply Chain Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>


            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/QUANTITYSURVEY/QUANTITYSURVEY">QUANTITY SURVEY</Link>
                  </h2>
                  <p>These are Quantity Survey department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            

<div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/SecretarialAdministration/SecretarialAdministration">Secretarial Administration</Link>
                  </h2>
                  <p>These are Secretarial Administration department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/SCIENCELABORATORYTECHNOLOGY/SCIENCELABORATORYTECHNOLOGY">SCIENCE LABORATORY TECHNOLOGY</Link>
                  </h2>
                  <p>These are Science Labouratory Technology department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/SOCIOLOGY/SOCIOLOGY">SOCIOLOGY</Link>
                  </h2>
                  <p>These are Sociology department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/STATISTICS/STATISTICS">STATISTICS</Link>
                  </h2>
                  <p>These are Statistics department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/THEATREARTS/THEATREARTS">THEATRE ARTS</Link>
                  </h2>
                  <p>These are Theartre Arts department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/THEOLOGYBIBLICALSTUDIES/THEOLOGYBIBLICALSTUDIES">THEOLOGY & BIBLICAL STUDIES</Link>
                  </h2>
                  <p>These are Theology & bible Studies department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-1">
              <div className="service service-summary">
                <div className="service-content">
                  <h2 className="service-title">
                    <Link to="/TransportManagement/TransportManagement">Transport Management</Link>
                  </h2>
                  <p>These are  Transport Management department project topics with available well written chapters 1 to chapter 5, Please click on a project topic to view its details and order for the complete material</p>    </div>
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
                    <Link to="/VETERINARYMEDICINE/VETERINARYMEDICINE">VETERINARY MEDICINE</Link>
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
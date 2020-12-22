import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import './contact.css';
const ConstactMe = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [message, setMessage] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const body = {
            'name': name,
            'email': email,
            'phone': phone,
            'message': message
        }
        console.log(body)

    }
    return (
        <Layout bodyclassName="page-services">
      <SEO title="Services" />

        {/* // <div>
        //     <form method="post" action="#">

        //         <div classNameName="form-group">
        //             <label >
        //                 Name </label>
        //             <input value={name} onChange={(e) => setName(e.target.value)} placeholder="enter full name" classNameName="form-control" type="text" name="name" id="name" />
        //         </div>

        //         <div classNameName="form-group">
        //             <label >
        //                 Email </label>
        //             <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email address" classNameName="form-control" type="email" name="email" id="email" />
        //         </div>

        //         <div classNameName="form-group">
        //             <label>
        //                 phone number </label>
        //             <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder=" phone mobile" classNameName="form-control" type="number" name="phone" id="phone" />

        //         </div>

        //         <div classNameName="form-group">
        //             <label >
        //                 Message
        //                 </label>
        //             <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="message" classNameName="form-control" name="message" id="message" rows="5" />
        //         </div>
        //         <div classNameName="form-group">
        //             <button style={{ width: '150px', height: '50px', color: "white" }} classNameName="p-3 m-3" type="submit" onClick={submit}>Submit Data</button>
        //             <button style={{ width: '100px', height: '50px', color: "white" }} classNameName="p-3 m-3" type="reset"> Clear </button>                 </div>

        //     </form>
        // </div> */}
        <div>
    <div className="contact_info">
     <div className="container">
         <div className="row">
             <div className="col-lg-10 offset-lg-1">
                 <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                    
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                         <div className="contact_info_image"><img src="https://img.icons8.com/office/24/000000/iphone.png" alt=""/></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title">Phone</div>
                             <div className="contact_info_text">+91 9876 543 2198</div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                         <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt=""/></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title">Email</div>
                             <div className="contact_info_text">contact@bbbootstrap.com</div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                         <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt=""/></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title">Address</div>
                             <div className="contact_info_text">298,Menlo Park,CA,USA</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div> 
 <div className="contact_form">
     <div className="container">
         <div className="row">
             <div className="col-lg-10 offset-lg-1">
                 <div className="contact_form_container">
                     <div className="contact_form_title">Get in Touch</div>
                     <form action="#" id="contact_form">
                         <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between"> <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your name" required="required" data-error="Name is required."/> 
                         <input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="Your email" required="required" data-error="Email is required."/> 
                         <input type="text" id="contact_form_phone" className="contact_form_phone input_field" placeholder="Your phone number"/> </div>
                         <div className="contact_form_text"> <textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea> </div>
                         <div className="contact_form_button"> <button type="submit" className="button contact_submit_button">Send Message</button> </div>
                     </form>
                 </div>
             </div>
         </div>
     </div>
     <div className="panel"></div>
 </div>
        </div>
        </Layout>
    )
}
export default ConstactMe;
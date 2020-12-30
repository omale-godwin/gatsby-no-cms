import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

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
        <Layout bodyclassNameName="page-services">
      <SEO title="Services" />

        {/* // <div>
        //     <form method="post" action="#">

        //         <div classNameNameName="form-group">
        //             <label >
        //                 Name </label>
        //             <input value={name} onChange={(e) => setName(e.target.value)} placeholder="enter full name" classNameNameName="form-control" type="text" name="name" id="name" />
        //         </div>

        //         <div classNameNameName="form-group">
        //             <label >
        //                 Email </label>
        //             <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email address" classNameNameName="form-control" type="email" name="email" id="email" />
        //         </div>

        //         <div classNameNameName="form-group">
        //             <label>
        //                 phone number </label>
        //             <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder=" phone mobile" classNameNameName="form-control" type="number" name="phone" id="phone" />

        //         </div>

        //         <div classNameNameName="form-group">
        //             <label >
        //                 Message
        //                 </label>
        //             <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="message" classNameNameName="form-control" name="message" id="message" rows="5" />
        //         </div>
        //         <div classNameNameName="form-group">
        //             <button style={{ width: '150px', height: '50px', color: "white" }} classNameNameName="p-3 m-3" type="submit" onClick={submit}>Submit Data</button>
        //             <button style={{ width: '100px', height: '50px', color: "white" }} classNameNameName="p-3 m-3" type="reset"> Clear </button>                 </div>

        //     </form>
        // </div> */}
      <section className="form-style-6 p-relative bg-white">
  <div className="container">
  <div className="row">
    <div className="col-12 p-0">

      <iframe className="p-relative"
     style={{ width:"100%",
      height:"300px",
      frameborder:"0", style:"border:0"}}
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBMgRblEioSamju0neKitZS49SNujWkbMM
      &q=Space+Needle,Seattle+WA" allowFullScreen>
    </iframe>
  </div>
  <div className="col-10 mx-auto p-4">
    <div className="row">
      <div className="col-12 my-3">
        <h2 className="font-title bolder text-center mb-5 uppercase" >Get in Touch<div className="mline bg-primary"></div></h2></div>
        <div className="col-md-6 col-12">
          <h6 className="uppercase my-3 font-title">Address</h6>
          <p className="mb-5 ">Santinell, 400 Broad St, Seattle, WA 98109</p>
          <h6 className="uppercase my-3 font-title">Contact</h6>
          <p className="mb-5"><i className="fa fa-phone mr-2"></i>+1 100 100 100<br/><i className="fa fa-envelope mr-2"></i> info@example.com</p>
          <h6 className="uppercase my-3 font-title">Social</h6>
          <a className="p-2 m-2 bg-dark"><i className="fa fa-facebook cwhite"></i></a>
          <a className="p-2 m-2 bg-dark"><i className="fa fa-google cwhite"></i></a>
          <a className="p-2 m-2 bg-dark"><i className="fa fa-twitter cwhite"></i></a>
          <a className="p-2 m-2 bg-dark"><i className="fa fa-linkedin cwhite"></i></a>
        </div>
        <div className="col-md-6 col-12 my-3">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control flat  "/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control flat  "/>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="number" className="form-control flat  "/>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control flat " rows="4"></textarea>
            </div>
            <div className="form-group ">
              <button type="submit" className="btn btn-primary"><i className="fa fa-paper-plane mr-2"></i>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</div>
</section>
        </Layout>
    )
}
export default ConstactMe;
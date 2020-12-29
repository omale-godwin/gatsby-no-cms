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
      
        </Layout>
    )
}
export default ConstactMe;
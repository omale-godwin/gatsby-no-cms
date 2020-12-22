import React, { useState } from 'react'

const ConstactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

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
        <div>
            <form method="post" action="#">

                <div className="form-group">
                    <label >
                        Name </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="enter full name" className="form-control" type="text" name="name" id="name" />
                </div>

                <div className="form-group">
                    <label >
                        Email </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email address" className="form-control" type="email" name="email" id="email" />
                </div>

                <div className="form-group">
                    <label>
                        phone number </label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder=" phone mobile" className="form-control" type="number" name="phone" id="phone" />

                </div>

                <div className="form-group">
                    <label >
                        Message
                        </label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="message" className="form-control" name="message" id="message" rows="5" />
                </div>
                <div className="form-group">
                    <button style={{ width: '150px', height: '50px', color: "white" }} className="p-3 m-3" type="submit" onClick={submit}>Submit Data</button>
                    <button style={{ width: '100px', height: '50px', color: "white" }} className="p-3 m-3" type="reset"> Clear </button>                 </div>

            </form>
        </div>
    )
}
export default ConstactMe;
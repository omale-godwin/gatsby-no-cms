import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <form method="post" action="#">
                    <label>
                        Name
    <input type="text" name="name" id="name" />
                    </label>
                    <label>
                        Email
    <input type="email" name="email" id="email" />
                    </label>
                    <label>
                        phone number
    <input type="number" name="phone" id="phone" />
                    </label>
                    <label>
                        Subject
    <input type="text" name="subject" id="subject" />
                    </label>
                    <label>
                        Message
    <textarea name="message" id="message" rows="5" />
                    </label>
                    <button type="submit">Send</button>
                    <input type="reset" value="Clear" />
                </form>
            </div>
        )
    }
}

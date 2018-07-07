import React from 'react'

const Contact = () => (
  <div className="container">
  <h2>Contact</h2>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"

    >
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Your Name" name="name" />
        </div>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="email" placeholder="name@name.com" name="email" />
          <span className="icon is-small is-left">
            <i className="fa fa-envelope"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" name="message"></textarea>
        </div>
      </div>
      <div className="control">
        <button className="button is-primary">Send Message</button>
      </div>

    </form>
  </div>
)

export default Contact
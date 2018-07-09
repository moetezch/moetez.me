import React from 'react'

const Contact = () => (
  <div className="content container is-medium">
  <h2>Contact</h2>
  <p>You can get in touch anytime through</p>
  <ul>
    <li> <a href="mailto:contact@moetez.me"> <i className="fa fa-envelope"></i> contact[at]moetez.me</a> </li>
    <li><a href="https://twitter.com/moetezch" target="_blanc"><i className="fa fa-twitter"></i> @moetezch</a></li>
  </ul>
  <p>Or use the form below</p>
  <form name="contact" method="POST" data-netlify="true" action="/message" data-netlify-honeypot="bot-field">
  <input type="hidden" name="bot-field" />
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
    <br/>
  </div>
)

export default Contact
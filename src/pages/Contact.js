import React from 'react'
import Recaptcha from "react-google-recaptcha";
import { navigateTo } from "gatsby-link";
const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  }

  render() {
    return (
      <div className="content container is-medium">
        <h2>Contact</h2>
        <p>You can get in touch anytime through</p>
        <ul>
          <li> <a href="mailto:contact@moetez.me"> <i className="fa fa-envelope"></i> contact[at]moetez.me</a> </li>
          <li><a href="https://twitter.com/moetezch" target="_blanc"><i className="fa fa-twitter"></i> @moetezch</a></li>
        </ul>
        <p>Or use the form below</p>
        <form name="contact"
          method="POST"
          data-netlify="true"
          action="/message"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Your Name" name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="email" placeholder="name@name.com" name="email" onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" name="message" onChange={this.handleChange}></textarea>
            </div>
          </div>

          <Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <div className="control">
            <button className="button is-primary">Send Message</button>
          </div>

        </form>
        <br />
      </div>
    );
  }
}

import React from 'react'
import Layout from '../components/Layout'
import Recaptcha from 'react-google-recaptcha'
import { navigate } from 'gatsby'
import SEO from '../components/seo'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string().required('Message is required'),
  recaptcha: Yup.string().required('I only talk with humans!'),
})

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <SEO title={'Contact'} />
        <div className="content container is-medium">
          <p>You can get in touch anytime through</p>
          <ul>
            <li>
              {' '}
              <a href="mailto:contact@moetez.me">
                {' '}
                <i className="fa fa-envelope" /> contact[at]moetez.me
              </a>{' '}
            </li>
            <li>
              <a href="https://twitter.com/moetezch" target="_blanc">
                <i className="fa fa-twitter" /> @moetezch
              </a>
            </li>
          </ul>
          <p>Or use the form below</p>
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
              recaptcha: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              fetch('/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({
                  'form-name': values.name,
                  name: values.name,
                  email: values.email,
                  message: values.message,
                }),
              })
                .then(() => navigate('/message'))
                .catch(error => alert(error))
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
              >
                <div className="field">
                  <div className="control">
                    <Field
                      name="name"
                      className={
                        errors.name && touched.name
                          ? 'input is-danger'
                          : 'input'
                      }
                      placeholder="Your Name"
                    />
                    {errors.name && touched.name ? (
                      <div className="help is-danger">{errors.name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left">
                    <Field
                      name="email"
                      type="email"
                      className={
                        errors.email && touched.email
                          ? 'input is-danger'
                          : 'input'
                      }
                      placeholder="name@name.com"
                    />
                    {errors.email && touched.email ? (
                      <div className="help is-danger">{errors.email}</div>
                    ) : null}
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <Field
                      name="message"
                      component="textarea"
                      className={
                        errors.message && touched.message
                          ? 'textarea is-danger'
                          : 'textarea'
                      }
                    />
                    {errors.message && touched.message ? (
                      <div className="help is-danger">{errors.message}</div>
                    ) : null}
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <Recaptcha
                      sitekey={RECAPTCHA_KEY}
                      onChange={value => {
                        setFieldValue('recaptcha', value)
                      }}
                    />
                    {errors.recaptcha && touched.recaptcha ? (
                      <div className="help is-danger">{errors.recaptcha}</div>
                    ) : null}
                  </div>
                </div>

                <div className="control">
                  <button className="button is-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    )
  }
}

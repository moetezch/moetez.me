import React from 'react'
import Layout from '../components/Layout'
const Message = () => (
  <Layout>
    <div className="content has-text-centered is-medium">
      <br />
      <i
        className="fa fa-check-circle fa-3x"
        style={{ marginRight: '.25em', color: '#00d1b2' }}
      />
      <h2>Thank you !</h2>
      <p>I will contact you soon</p>
      <br />
    </div>
  </Layout>
)

export default Message

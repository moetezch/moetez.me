import React from 'react'
import img from "../images/icons8-source-code-96.png"
import Link from "gatsby-link"
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <header>
      <section className="header-content">
        <img className="rocky-dashed animate-pop-in" src={img} alt ='moetez journey'/>
        <h1 className="header-title animate-pop-in">Moetez Chaabene</h1>
        <h3 className="header-subtitle animate-pop-in">The Road Of 1000 Miles Starts With One Step</h3>
        <p className="header-button animate-pop-in"><Link to="/posts" className="button">View My Journey</Link></p>
      </section>
    </header>
  </Layout>
)

export default IndexPage
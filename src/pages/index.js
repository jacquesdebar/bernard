import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>header</h1>
    <p>Check back in a few days for more information.</p>
    {/*
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */ }
    <Link to="/page-2/">Rememberance board</Link>
  </Layout>
)

export default IndexPage

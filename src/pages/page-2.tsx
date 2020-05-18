// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Remembrance Board</h1>
    <p>board will go here</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

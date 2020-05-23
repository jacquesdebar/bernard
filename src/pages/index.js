import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Obituary from "../components/obituary"

import RoseImage from "../components/pics/RoseImage"

const IndexPage = () => (
  <Layout>
    <SEO title="In Memoriam" />
    <h2>Memorial Celebration of Life</h2>
    <p>The DeBar family is planning a celebration of Bud's life in the next one 
      to two months. It will likely be a live, online event. Please check back 
      here for more details. </p>
    <p>The DeBar boys are thankful that Bud appeared to pass peacefully in his 
      sleep and not from Covid-19. We trust he is happily reuniting with Sallie 
      and so many other loved ones that passed on before him.</p>
    <div style={{ maxWidth: `300px`, margin: `1.45rem auto` }}>
      <RoseImage />
    </div>
    <Obituary />
  </Layout>
)

export default IndexPage

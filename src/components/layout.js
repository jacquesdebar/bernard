/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{ 
          margin: `4vw auto`,
          paddingLeft: `2.3vw`,
          paddingRight: `2.3w`,
          borderRadius: `30px`,
          border: `10px solid #423e3c`,
          maxWidth: 840,
          backgroundColor: `#ebe6da`}}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 840,
            padding: `0 1.0875rem 1.45rem`
          }}
        >
          <main style={{ minHeight: `70vh`}}>{children}</main>
          <hr style={{marginTop: `40px`, maxWidth: "200px", marginLeft: `auto`, marginRight: `auto`, backgroundColor: `#423e3c`}}/>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import { Link } from "gatsby"
import React from "react"
import RoseBWImage from "./pics/RoseBWImage"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // marginBottom: `0.2rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `2.5rem 1.0875rem`,
        textAlign: `center`,
      }}
    >
      {/* <div style={{ width: `100px`, margin: `0 auto` }}>
        <RoseImage/>
      </div> */}
      <div style={{ width: `140px`, margin: `0 auto`, marginBottom: `12px`, padding: "12px" }}>
          <RoseBWImage />
      </div>
      <h1>Bernard Edwin DeBar</h1>
      <p>March 6, 1931 &nbsp; <span style={{fontSize: `1.2em`}}>&#10013;</span> &nbsp; May 11, 2020</p>
      <hr style={{ maxWidth: `253px`, margin: `10px auto`, backgroundColor: `#423e3c` }} />
    </div>
  </header>
)

export default Header

import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Blocks from "../components/blocks"
// import Shop from "../components/shop"

const Homepage = ({ data }) => {
  return (
    <>
      <Header info={data.header} />
      <Blocks info={data.page} />
    </>
  )
}
export default Homepage

export const data = graphql`
  query MyQuery {
    page: dataJson(fileRelativePath: { eq: "/content/data/0-main.json" }) {
      blocks {
        cover_image {
          childImageSharp {
            fluid(maxWidth: 684) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        caption
        alttext
        copy
        quote
        slides {
          id
          name
          image {
            childImageSharp {
              fluid(maxWidth: 644) {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 644) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        title
        background_color
        text_color
        max_width
        ad_placement
        margin
        padding
        center_align
        _template
      }
      fileRelativePath
      rawJson
    }
    header: dataJson(fileRelativePath: { eq: "/content/data/9-header.json" }) {
      alttext
      hed
      dek
      byline
      max_width
      image_position_x
      image_position_y
      image_fit
      header_image {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      fileRelativePath
      rawJson
    }
  }
`

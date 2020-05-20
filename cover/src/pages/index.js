import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Blocks from "../components/blocks"
// import Shop from "../components/shop"


const Homepage = ({ data }) => {
  console.log(data)
  return (
    <Fragment>
      <Header data={data.header} />
      <Blocks info={data.selection} /> 
    </Fragment>
  )
}
export default Homepage

export const data = graphql`
  query getJsonData {
    selection: dataJson(fileRelativePath: { eq: "/content/data/blocks.json" }) {
      blocks {
        _template
        copy
        cover_image {
          childImageSharp {
            fluid(maxWidth: 684) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alttext
        caption
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
      }
      rawJson
      fileRelativePath
    }
    header: dataJson(fileRelativePath: { eq: "/content/data/5-header.json" }) {
      id
      hed
      byline
      dek
      header_image {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rawJson
      fileRelativePath
    }
    cover: dataJson(fileRelativePath: { eq: "/content/data/4-cover.json" }) {
      id
      caption
      cover_image {
        childImageSharp {
          fluid(maxWidth: 684) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rawJson
      fileRelativePath
    }
    slideshow1: dataJson(
      fileRelativePath: { eq: "/content/data/3-slideshow-1.json" }
    ) {
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
      caption
      rawJson
      fileRelativePath
    }
    slideshow2: dataJson(
      fileRelativePath: { eq: "/content/data/2-slideshow-2.json" }
    ) {
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
      caption
      rawJson
      fileRelativePath
    }
    shoplist: dataJson(
      fileRelativePath: { eq: "/content/data/1-shop-list.json" }
    ) {
      products {
        id
        brand
        name
        price
        link
        image {
          childImageSharp {
            fluid(maxWidth: 644) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      title
      rawJson
      fileRelativePath
    }
    text1: markdownRemark(
      fileRelativePath: { eq: "/content/copy/4-text-area-1.md" }
    ) {
      ...TinaRemark
      frontmatter {
        title
      }
      html
    }
    text2: markdownRemark(
      fileRelativePath: { eq: "/content/copy/3-text-area-2.md" }
    ) {
      ...TinaRemark
      frontmatter {
        title
      }
      html
    }
    text3: markdownRemark(
      fileRelativePath: { eq: "/content/copy/2-text-area-3.md" }
    ) {
      ...TinaRemark
      frontmatter {
        title
      }
      html
    }
    text4: markdownRemark(
      fileRelativePath: { eq: "/content/copy/1-text-area-4.md" }
    ) {
      ...TinaRemark
      frontmatter {
        title
      }
      html
    }
    credits: markdownRemark(
      fileRelativePath: { eq: "/content/copy/0-credits.md" }
    ) {
      ...TinaRemark
      frontmatter {
        title
      }
      html
    }
  }
`

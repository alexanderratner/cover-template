import React from "react"
import get from "lodash/get"
import Img from "gatsby-image/withIEPolyfill"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import Styles from "../styles/components/header.module.css"
// import Div100vh from 'react-div-100vh'

const Header = props => {
  const formOptions = {
    label: "Header",
    fields: [
      {
        label: "Header Image",
        name: "rawJson.header_image",
        component: "image",
        // Generate the frontmatter value based on the filename
        parse: filename => `../assets/${filename}`,

        // Decide the file upload directory for the post
        uploadDir: () => "./content/assets/",

        // Generate the src attribute for the preview image.
        previewSrc: (formValues, { input }) => {
          let path = input.name.replace("rawJson", "jsonNode")
          let gastbyImageNode = get(formValues, path)
          if (!gastbyImageNode) return ""
          return gastbyImageNode.childImageSharp.fluid.src
        },
      },
      {
        label: "Image Alt Text",
        name: "rawJson.alttext",
        description: "Alt text is used to describe images to visitors who are unable to see them.",
        component: "text",
      },
      {
        label: "Hed",
        name: "rawJson.hed",
        description: "Your headline goes here, make it good.",
        component: "text",
      },
      {
        label: "Dek",
        name: "rawJson.dek",
        description:
          "Choose a short sentence or two that summarizes what the article is about.",
        component: "textarea",
      },
      {
        label: "Byline",
        name: "rawJson.byline",
        description: "Give credit where credit is due.",
        component: "textarea",
      },
    ],
  }
  // 3. Call the hook and pass in the data
  const [headerData] = useLocalJsonForm(props.data, formOptions)

  return (
    <div className={Styles.container}>
      {headerData.header_image && headerData.header_image.childImageSharp && (
        <Img
          className={Styles.background}
          fluid={headerData.header_image.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 20%"
          alt={headerData.alttext}
        />
      )}
      <div className={Styles.intro}>
        <h1>{headerData.hed}</h1>
        <p>{headerData.dek}</p>
        <p dangerouslySetInnerHTML={{ __html: headerData.byline }}></p>
      </div>
    </div>
  )
}

export default Header

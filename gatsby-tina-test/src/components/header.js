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
        description:
          "Upload your header image here. Image covers the full container area",
        component: "image",
        parse: filename => `../assets/${filename}`,
        uploadDir: () => "./content/assets/",
        previewSrc: (formValues, fieldProps) => {
          const pathName = fieldProps.input.name.replace("rawJson", "jsonNode")
          const imageNode = get(formValues, pathName)
          if (!imageNode || !imageNode.childImageSharp) return ""
          return imageNode.childImageSharp.fluid.src
        },
      },
      {
        component: "select",
        name: "rawJson.image_fit",
        label: "Image Fit Type",
        description:
          "Select how you'd like the header image to fit the space",
        options: ["cover", "contain", "fill", "scale-down", "none"],
      },
      {
        name: "rawJson.image_position_x",
        component: "position",
        label: "Header Image X Postion",
        description:
          "Horizontal (x) postion of your header image. Value is a percentage.",
      },
      {
        name: "rawJson.image_position_y",
        component: "position",
        label: "Header Image Y Postion",
        description:
          "Vertical (y) postion of your header image. Value is a percentage.",
      },
      {
        label: "Image Alt Text",
        name: "rawJson.alttext",
        description:
          "Alt text is used to describe images to visitors who are unable to see them.",
        component: "text",
      },
      {
        label: "Hed",
        name: "rawJson.hed",
        description: "Your headline goes here, make it good.",
        component: "text",
      },
      {
        name: "rawJson.max_width",
        component: "slider",
        label: "Max Width",
        description:
          "Controls the max pixel width of the text. Helpful for finding the perfect rag.",
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

  const [headerData] = useLocalJsonForm(props.info, formOptions)

  return (
    <div className={Styles.container}>
      {headerData.header_image && headerData.header_image.childImageSharp && (
        <Img
          className={Styles.background}
          fluid={headerData.header_image.childImageSharp.fluid}
          objectFit={headerData.image_fit ? headerData.image_fit : "cover"}
          objectPosition={
            headerData.image_position_x && headerData.image_position_y
              ? `${headerData.image_position_x}% ${headerData.image_position_y}%`
              : "50% 50%"
          }
          alt={headerData.alttext}
          backgroundColor="#ffffff"
        />
      )}
      <div className={Styles.intro}>
        <h1
          style={
            headerData.max_width && { maxWidth: headerData.max_width + "px" }
          }
        >
          {headerData.hed}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: headerData.dek }}></p>
        <p dangerouslySetInnerHTML={{ __html: headerData.byline }}></p>
      </div>
    </div>
  )
}

export default Header

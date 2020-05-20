import React from "react"
import get from "lodash/get"
import Img from "gatsby-image"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import Styles from "../styles/components/cover.module.css"

const Cover = props => {
  const formOptions = {
    label: "Cover",
    fields: [
      {
        label: "Cover Image",
        name: "rawJson.cover_image",
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
        label: "Caption",
        name: "rawJson.caption",
        description:
          "Enter some text that gives additional context or provides source attribution. While image captions might seem like a small thing, they can demand even more attention from readers than the regular text in your content.",
        component: "textarea",
      },
    ],
  }
  // 3. Call the hook and pass in the data
  const [coverData] = useLocalJsonForm(props.data, formOptions)

  return (
    <div className={Styles.container}>
      <div className={Styles.cover}>
        {coverData.cover_image && coverData.cover_image.childImageSharp && (
          <Img
            fluid={coverData.cover_image.childImageSharp.fluid}
            alt={coverData.alttext}
          />
        )}
      </div>
      <p dangerouslySetInnerHTML={{ __html: coverData.caption }}></p>
    </div>
  )
}

export default Cover

import React from "react"
import get from "lodash/get"
import Img from "gatsby-image"
import Styles from "../styles/components/cover.module.css"

export function Cover({ data }) {
  return (
    <div
      className={Styles.container}
      style={{ backgroundColor: data.background_color, color: data.text_color }}
    >
      <div className={Styles.cover}>
        {data.cover_image && data.cover_image.childImageSharp && (
          <Img
            fluid={data.cover_image.childImageSharp.fluid}
            alt={data.alttext}
          />
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.caption }}></div>
    </div>
  )
}

export const CoverBlock = {
  label: "Cover",
  name: "cover",
  defaultItem: {
    title: "Cover",
    cover_image: "../assets/default.jpg",
    caption:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>",
    alttext: "",
    text_color: "#6C6E70",
    background_color: "#000000",
  },
  itemProps(coverBlockItem) {
    return {
      label: coverBlockItem.title,
    }
  },
  fields: [
    {
      label: "Title",
      name: "title",
      description:
        "Give this block a unique name. What you write here will show up as the label for this section in the UI",
      component: "text",
    },
    {
      label: "Cover Image",
      name: "cover_image",
      component: "image",
      parse: filename => `../assets/${filename}`,
      uploadDir: () => "./content/assets/",
      previewSrc: (formValues, fieldProps) => {
        const pathName = fieldProps.input.name.replace("rawJson", "jsonNode")
        const imageNode = get(formValues, pathName)
        console.log(imageNode)
        if (!imageNode || !imageNode.childImageSharp) return ""
        return imageNode.childImageSharp.fluid.src
      },
    },
    {
      label: "Image Alt Text",
      name: "alttext",
      description:
        "Alt text is used to describe images to visitors who are unable to see them.",
      component: "text",
    },
    {
      label: "Caption",
      name: "caption",
      description:
        "Enter some text that gives additional context or provides source attribution. While image captions might seem like a small thing, they can demand even more attention from readers than the regular text in your content.",
      component: "textarea",
    },
    {
      label: "Text Color",
      name: "text_color",
      component: "color",
      description: "Edit the Cover text color here",
      colorFormat: "hex",
      colors: ["#EC4815", "#241748", "#B4F4E0", "#E6FAF8"],
      widget: "sketch",
    },
    {
      label: "Background Color",
      name: "background_color",
      component: "color",
      description: "Edit the Cover background color here",
      colorFormat: "hex",
      colors: ["#EC4815", "#241748", "#B4F4E0", "#E6FAF8"],
      widget: "sketch",
    },
  ],
}

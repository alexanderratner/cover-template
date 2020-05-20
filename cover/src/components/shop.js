import React from "react"
import Img from "gatsby-image"
import get from "lodash/get"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import Styles from "../styles/components/shoplist.module.css"

const Shop = props => {
  const formOptions = {
    label: `${props.data.title}`,
    fields: [
      {
        label: "Image List",
        name: "rawJson.products",
        component: "group-list",
        description: "Upload, order and delete products here.",
        itemProps: item => ({
          key: item.id,
          label: item.name,
        }),
        defaultItem: () => ({
          brand: "New Brand",
          name: "New Slide",
          id: Math.random()
            .toString(36)
            .substr(2, 9),
          image: "../assets/default-shop.jpg",
        }),
        fields: [
          {
            label: "Image",
            name: "image",
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
            label: "Brand",
            name: "brand",
            component: "text",
          },
          {
            label: "Name",
            name: "name",
            component: "text",
          },
          {
            label: "Price",
            name: "price",
            component: "text",
          },
          {
            label: "Link",
            name: "link",
            component: "text",
          },
        ],
      },
    ],
  }

  const [shopData] = useLocalJsonForm(props.data, formOptions)

  return (
    <div className={Styles.container}>
      <h2>Shop The Story</h2>
      <div className={Styles.inner}>
        {shopData.products.map(item => {
          return (
            item.image &&
            item.image.childImageSharp && (
              <div className={Styles.product} key={item.id}>
                <Img
                  fluid={item.image.childImageSharp.fluid}
                  alt="Test image"
                />
                <p>{item.brand}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  SHOW NOW
                </a>
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}
export default Shop

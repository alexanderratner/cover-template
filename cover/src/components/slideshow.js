import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import get from "lodash/get"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import Slider from "react-slick"
import "../styles/slick/slick.css"
import "../styles/slick/slick-theme.css"

const Slideshow = props => {
  const formOptions = {
    label: `${props.data.title}`,
    fields: [
      {
        label: "Image List",
        name: "rawJson.slides",
        component: "group-list",
        description: "Upload, order and delete image here.",
        itemProps: item => ({
          key: item.id,
          label: item.name,
        }),
        defaultItem: () => ({
          id: Math.random()
            .toString(36)
            .substr(2, 9),
          image: "../assets/default.jpg",
          name: "New Slide",
          image: "../assets/default.jpg",
          alttext: "Alt text for new",
        }),
        fields: [
          {
            label: "Name",
            name: "name",
            component: "text",
          },
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
            label: "Image Alt Text",
            name: "alttext",
            component: "text",
          },
        ],
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

  const [slidesData] = useLocalJsonForm(props.data, formOptions)

  const [render, setRender] = useState(false)

  useEffect(render => {
    setRender(true)
  }, [])

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "3%",
    slidesToShow: 3,
    speed: 250,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "8%",
        },
      },
    ],
  }

  if (render) {
    return (
      <div className="container-slideshow">
        <Slider {...settings}>
          {slidesData.slides.map(item => {
            return (
              item.image &&
              item.image.childImageSharp && (
                <Img
                  key={item.id}
                  fluid={item.image.childImageSharp.fluid}
                  alt={item.alttext}
                />
              )
            )
          })}
        </Slider>
        <p dangerouslySetInnerHTML={{ __html: slidesData.caption }}></p>
      </div>
    )
  }
  return null
}
export default Slideshow

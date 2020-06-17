import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import get from "lodash/get"
import Slider from "react-slick"
import "../styles/slick/slick.css"
import "../styles/slick/slick-theme.css"

export function Slideshow({ data }) {

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
      <div
        className="container-slideshow"
        style={{
          backgroundColor: data.background_color,
          color: data.text_color,
        }}
      >
        <Slider {...settings}>
          {data.slides.map(item => {
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
        <p dangerouslySetInnerHTML={{ __html: data.caption }}></p>
      </div>
    )
  }
  return null
}

export const SlideshowBlock = {
  label: "Slideshow",
  name: "slideshow",
  defaultItem: {
    title: "Slideshow",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    slides: [
      {
        id: "slide-1-1",
        name: "Slide 1",
        image: "../assets/default.jpg",
        alttext:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      },
      {
        id: "slide-1-2",
        name: "Slide 2",
        image: "../assets/default.jpg",
        alttext:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      },
      {
        id: "slide-1-3",
        name: "Slide 3",
        image: "../assets/default.jpg",
        alttext:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      },
      {
        id: "slide-1-4",
        name: "Slide 4",
        image: "../assets/default.jpg",
        alttext:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      },
    ],
    text_color: "#6C6E70",
    background_color: "#000000",
  },
  itemProps(slideshowBlockItem) {
    return {
      label: slideshowBlockItem.title,
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
      label: "Image List",
      name: "slides",
      component: "group-list",
      description: "At least 4 images are required.",
      itemProps: item => ({
        key: item.id,
        label: item.name,
      }),
      defaultItem: () => ({
        id: Math.random()
          .toString(36)
          .substr(2, 9),
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
          parse: filename => `../assets/${filename}`,
          uploadDir: () => "./content/assets/",
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

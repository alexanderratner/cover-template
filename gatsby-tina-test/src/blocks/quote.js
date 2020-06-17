import React from "react"
import Styles from "../styles/components/quote.module.css"

export function Quote({ data }) {
  return (
    <div
      className={`${Styles.container} ${Styles[data.padding]}`}
      style={{ maxWidth: data.max_width + "px" }}
    >
      <blockquote
        dangerouslySetInnerHTML={{ __html: `<p>“</p><p>${data.quote}</p>` }}
      />
    </div>
  )
}

export const QuoteBlock = {
  label: "Quote",
  name: "quote",
  defaultItem: {
    title: "Quote",
    quote: "Lorem ipsum dolor sit amet",
    max_width: "1147",
    padding: "padding-none",
  },
  itemProps(quoteBlockItem) {
    return {
      label: quoteBlockItem.title,
    }
  },
  fields: [
    {
      name: "title",
      label: "Title",
      description:
        "Give this block a unique name. What you write here will show up as the label for this section in the UI",
      component: "text",
    },
    {
      name: "quote",
      label: "Quote",
      description: "Enter your quote here",
      component: "textarea",
    },
    {
      name: "max_width",
      label: "Max Width",
      description:
        "Controls the max pixel width of the text. Helpful for finding the perfect rag.",
      component: "slider",
    },
    {
      name: "padding",
      label: "Padding",
      description:
        "Select padding: top, bottom, both (top and bottom), or none.",
      component: "select",
      options: [
        "padding-top",
        "padding-bottom",
        "padding-both",
        "padding-none",
      ],
    },
  ],
}

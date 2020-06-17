import React from "react"
import Styles from "../styles/components/copy.module.css"

export function Copy({ data }) {
  return (
    <div
      className={Styles.container}
      style={ data.center_align ? { textAlign: "center" } : {textAlign: "left"} }
      dangerouslySetInnerHTML={{ __html: data.copy.replace("<p></p>", "") }}
    />
  )
}

export const CopyBlock = {
  label: "Copy",
  name: "copy",
  defaultItem: {
    title: "Copy",
    copy:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    center_align: false,
  },
  itemProps(copyBlockItem) {
    return {
      label: copyBlockItem.title,
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
      label: "Copy",
      name: "copy",
      description: "Enter and edit copy here. RETURN for new paragraph, SHIFT + RETURN for line breaks. HTML tags are also valid in this field",
      component: "html",
    },
    {
      name: "center_align",
      component: "toggle",
      label: "Center Align",
      description: "Do you want to center your copy block?",
    },
  ],
}

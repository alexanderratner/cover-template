import React from "react"
import Styles from "../styles/components/copy.module.css"

const Copy = ({ data }) => {
  return (
    <div
      className={Styles.container}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  )
}
export default Copy

export const CopyBlock = {
  label: "Copy",
  name: "copy",
  key: "copy-block",
  defaultItem: {
    copy: "",
  },
  fields: [{ name: "copy", label: "Copy", component: "markdown" }],
}

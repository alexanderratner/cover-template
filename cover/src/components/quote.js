import React from "react"
import { useLocalRemarkForm } from "gatsby-tinacms-remark"
import Styles from "../styles/components/quote.module.css"

const Copy = props => {
  const formOptions = {
    label: `${props.data.frontmatter.title}`,
    fields: [
      {
        name: "rawMarkdownBody",
        component: "markdown",
        label: "Copy",
        description: "Enter and edit copy here.",
      },
    ],
  }
  // 3. Call the hook and pass in the data
  const [markdownRemark] = useLocalRemarkForm(props.data, formOptions)

  return (
    <div className={Styles.container} dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
  )
}

export default Copy

import React from "react"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import { Copy, CopyBlock } from "../blocks/copy"
import { Cover, CoverBlock } from "../blocks/cover"
// import { Slideshow, SlideshowBlock } from "../blocks/slideshow"

const Blocks = props => {
  const data = props.info
  const [selection] = useLocalJsonForm(props.info, PageForm)
  //   const blocks = selection.blocks ? selection.blocks : []
  console.log(props.info)
  return <div>Hello world!</div>
}
export default Blocks

const PageForm = {
  label: "Page",
  fields: [
    {
      label: "Page Sections",
      name: "rawJson.blocks",
      component: "blocks",
      templates: {
        CopyBlock,
        CoverBlock,
        // SlideshowBlock,
      },
    },
  ],
}

// {blocks &&
//     blocks.map(({ _template, ...data }, i) => {
//       switch (_template) {
//         case "CoverBlock":
//           return <Cover data={data} />
//         case "SlideshowBlock":
//           return <Sildeshow data={data} />
//         case "CopyBlock":
//           return (
//             <Copy
//               data={
//                 selection.childrenDataJsonBlockMarkdown[i]
//                   .childMarkdownRemark.html
//               }
//             />
//           )
//           break
//         default:
//           return true
//       }
//     })}

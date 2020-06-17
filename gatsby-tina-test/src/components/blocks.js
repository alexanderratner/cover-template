import React from "react"
import { useLocalJsonForm } from "gatsby-tinacms-json"
import { Copy, CopyBlock } from "../blocks/copy"
import { Quote, QuoteBlock } from "../blocks/quote"
import { Cover, CoverBlock } from "../blocks/cover"
import { Slideshow, SlideshowBlock } from "../blocks/slideshow"
import { Ad, AdBlock } from "../blocks/ad"

const Blocks = props => {
  const [selection] = useLocalJsonForm(props.info, PageForm)
  const blocks = selection.blocks ? selection.blocks : []

  return (
    <>
      {blocks &&
        blocks.map(({ _template, ...data }, i) => {
          switch (_template) {
            case "CoverBlock":
              return <Cover key={i} data={data} />
              break
            case "CopyBlock":
              return <Copy key={i} data={data} />
              break
            case "QuoteBlock":
              return <Quote key={i} data={data} />
              break
            case "AdBlock":
              return <Ad key={i} data={data} />
              break
            case "SlideshowBlock":
              return <Slideshow key={i} data={data} />
            default:
              return true
          }
        })}
    </>
  )
}
export default Blocks

const PageForm = {
  label: "Body",
  fields: [
    {
      label: "Sections",
      name: "rawJson.blocks",
      component: "blocks",
      templates: {
        CopyBlock,
        QuoteBlock,
        CoverBlock,
        SlideshowBlock,
        AdBlock,
      },
    },
  ],
}

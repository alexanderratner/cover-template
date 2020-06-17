import React from "react"

export function Ad({ data }) {
  return <div className={data.ad_placement + " " + data.margin}></div>
}

export const AdBlock = {
  label: "Ad Placement",
  name: "ad",
  defaultItem: {
    ad_placement: "ad__slot--mid-content",
    margin: "margin-top",
  },
  fields: [
    {
      component: "select",
      name: "ad_placement",
      label: "Ad Placement Type",
      description:
        "Select an ad type from the following. Note: ads will only load on Copilot",
      options: ["ad__slot--mid-content", "ad__slot--footer"],
    },
    {
      component: "select",
      name: "margin",
      label: "Margin",
      description:
        "Select margin: top, bottom, both (top and bottom), or none",
      options: ["margin-top", "margin-bottom", "margin-both", "margin-none"],
    },
  ],
}

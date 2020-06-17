import "./src/styles/global.css"

import { SliderField } from './src/components/SliderField'
import { PositionField } from './src/components/PositionField'

export const onClientEntry = () => {
  window.tinacms.fields.add({
    name: 'slider',
    Component: SliderField,
  })
  window.tinacms.fields.add({
    name: 'position',
    Component: PositionField,
  })
}
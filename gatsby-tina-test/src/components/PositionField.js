import React from "react"
import styled from "styled-components"

const Label = styled.label`
  display: block;
  font-size: var(--tina-font-size-1);
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.35;
  color: var(--tina-color-grey-8);
  margin-bottom: 8px;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`
const Description = styled.p`
  color: var(--tina-color-grey-6);
  font-size: var(--tina-font-size-0);
  font-style: italic;
  font-weight: lighter;
  padding-top: 4px;
  white-space: normal;
  margin: 0;
`
const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: var(--tina-padding-big);
`
const Number = styled.input`
  padding: 12px 8px 12px 12px;
  border-radius: var(--tina-radius-small);
  background: var(--tina-color-grey-0);
  font-size: var(--tina-font-size-2);
  line-height: 1.35;
  position: relative;
  background-color: var(--tina-color-grey-0);
  transition: all 85ms ease-out;
  border: 1px solid var(--tina-color-grey-2);
  width: 76px;
  margin: 0;
  outline: none;
  box-shadow: 0 0 0 2px transparent;
`

export function PositionField({ input, meta, field }) {
  return (
    <FieldWrapper>
      <Label htmlFor={input.name}>
        {field.label || field.name}
        <Description>{field.description}</Description>
      </Label>
      <div>
        <Number
          type="number"
          min="-100"
          max="100"
          value="50"
          step="1"
          {...input}
        />
      </div>

      <div className="field-error">{meta.error}</div>
    </FieldWrapper>
  )
}

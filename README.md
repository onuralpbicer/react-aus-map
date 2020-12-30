# React Aus Map

A react component that renders an SVG map of Australia

Inspired by [react-australia-map](https://www.npmjs.com/package/react-australia-map). There are a couple reasons why I decided to make this component. The original react-austrlaia-map component customizes the states using a customize prop that is a one big object to pass to the internals. With this approach, since the object options were not documented or typed with TypeScript, customizing was not an easy task. This component is written fully in TypeScript, and uses a callback for the per-state customization which exposes the state's name and it's hover status.

It can also be used as a controlled component using hoveredState and setHoveredState props. If those props are not supplied, internal logic is used to keep track of the hovered status.

## Props

```typescript
interface AustraliaMapProps {
    height?: number | string // Height of the svg component
    width?: number | string // Width of the svg component
    onClick?: (payload: CallbackPayload) => void // Callback that is triggered when a state is clicked
    stroke?: Property.Stroke // Color of the svg stroke (the lines separating the states)
    strokeWidth?: Property.StrokeWidth | number // Width of the svg stroke (the lines separating the states)
    getStateStyles?: (payload: CallbackPayload) => CSSProperties // Callback to customize each state

    // For controlled usage
    hoveredState?: States | null // state
    setHoveredState?: (state: States | null) => void // update state
}

interface CallbackPayload {
    state: States // Abbreviation of the state
    hover: boolean // Hover status of the state
}

// Union of state abbreviations
type States = 'NSW' | 'NT' | 'QLD' | 'WA' | 'SA' | 'TAS' | 'ACT'
```

import React, { CSSProperties } from 'react'
import {
    BaseProps,
    CallbackPayload,
    StateInfo,
    StateOptions,
} from '../model/model'

const DEFAULT_FILL = '#000000'
const DEFAULT_HOVER = '#000000'

interface StateComponentProps extends BaseProps {
    state: StateInfo
    onClick?: (payload: CallbackPayload) => void
    options?: StateOptions
    getStateStyles?: (payload: CallbackPayload) => CSSProperties
}

const StateComponent = (props: StateComponentProps): JSX.Element => {
    const {
        state,
        onClick,
        options,
        setHoveredState,
        hover,
        getStateStyles,
    } = props

    const handleClick = () => {
        if (onClick) onClick({ state: state.abbreviation, hover })
    }

    const currentColor = hover ? DEFAULT_HOVER : DEFAULT_FILL
    const customStyle =
        getStateStyles && getStateStyles({ state: state.abbreviation, hover })

    return (
        <path
            style={customStyle}
            d={state.dimensions}
            stroke={options?.stroke || currentColor}
            strokeWidth={options?.strokeWidth}
            fill={currentColor}
            onClick={handleClick}
            onMouseEnter={() => setHoveredState(state.abbreviation)}
            onMouseLeave={() => setHoveredState(null)}
        ></path>
    )
}

export default StateComponent

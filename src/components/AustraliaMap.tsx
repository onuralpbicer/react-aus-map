import React, { useState, CSSProperties } from 'react'
import StateComponent from './StateComponent'
import { CallbackPayload, States } from '../model/model'
import data from '../model/data'
import { Property } from 'csstype'

export interface AustraliaMapProps {
    height?: number | string
    width?: number | string
    onClick?: (payload: CallbackPayload) => void
    stroke?: Property.Stroke
    strokeWidth?: Property.StrokeWidth | number
    getStateStyles?: (payload: CallbackPayload) => CSSProperties
    hoveredState?: States | null
    setHoveredState?: (state: States | null) => void
}

const AustraliaMap = (props: AustraliaMapProps): JSX.Element => {
    const {
        height,
        width,
        onClick,
        stroke,
        strokeWidth,
        getStateStyles,
        hoveredState,
        setHoveredState,
    } = props

    const [
        uncontrolledHoveredState,
        setUncontrolledHoveredState,
    ] = useState<States | null>(null)

    const stateList = Object.keys(data) as States[]
    return (
        <svg height={height} width={width} viewBox="0 0 300 270">
            <g>
                {stateList.map((stateKey) => (
                    <StateComponent
                        key={stateKey}
                        state={data[stateKey]}
                        onClick={onClick}
                        options={{
                            stroke,
                            strokeWidth,
                        }}
                        hover={
                            hoveredState
                                ? hoveredState === stateKey
                                : uncontrolledHoveredState === stateKey
                        }
                        setHoveredState={
                            setHoveredState || setUncontrolledHoveredState
                        }
                        getStateStyles={getStateStyles}
                    />
                ))}
            </g>
        </svg>
    )
}

export default AustraliaMap

import { Property } from 'csstype'

export type States = 'NSW' | 'NT' | 'QLD' | 'WA' | 'SA' | 'TAS' | 'ACT'

export interface BaseProps {
    hover: boolean
    setHoveredState: (state: States | null) => void
}

export interface StateInfo {
    dimensions: string
    abbreviation: States
    label: {
        name: string
        x: number
        y: number
    }
}

export type StatesJson = {
    [key in States]: StateInfo
}

export interface StateOptions {
    stroke?: Property.Stroke
    strokeWidth?: Property.StrokeWidth | number
}

export interface CallbackPayload {
    state: States
    hover: boolean
}

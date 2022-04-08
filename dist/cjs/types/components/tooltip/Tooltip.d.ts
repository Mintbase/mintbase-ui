/// <reference types="react" />
import { Place } from 'react-tooltip';
import './tooltip.css';
export declare const MbTooltip: ({ text, id, place, component, extraProps }: {
    text: string;
    id: string;
    place: Place;
    component: JSX.Element;
    extraProps?: Record<string, any> | undefined;
}) => JSX.Element;

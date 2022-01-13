import React from 'react';
import { TThingCard } from '../../../types/cards.type';
import './thingcard.css';
import './../cards.css';
interface CardProps extends React.ComponentProps<'div'> {
    loading?: boolean;
    cardInfo: TThingCard;
}
export declare const MbThingCard: ({ loading, cardInfo }: CardProps) => JSX.Element;
export {};

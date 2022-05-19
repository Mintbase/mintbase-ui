import React from 'react';
import './smallcard.css';
import './../cards.css';
import { TSmallCard } from '../../../types/cards.type';
import { ESmallCardType } from '../../../consts/properties';
interface CardProps extends React.ComponentProps<'div'> {
    loading?: boolean;
    card: TSmallCard;
    cardType: ESmallCardType;
    isBigStoreCard?: boolean;
}
export declare const MbSmallCard: ({ loading, cardType, card, isBigStoreCard, }: CardProps) => JSX.Element;
export {};

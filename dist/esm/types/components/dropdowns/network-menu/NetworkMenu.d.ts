/// <reference types="react" />
import './networkmenu.css';
import { TNetworkOption } from '../../../types/network.type';
interface NetworkMenuProps {
    options: TNetworkOption[];
    isOpen: boolean;
    direction: 'col' | 'row';
    onOptionChange: (selected: string) => void;
}
export declare const MbNetworkMenu: (props: NetworkMenuProps) => JSX.Element | null;
export {};

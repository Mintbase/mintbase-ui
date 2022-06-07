/// <reference types="react" />
import './modal.css';
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    topTitle: string | JSX.Element;
    subtitle?: string;
    topElement?: JSX.Element;
    open: boolean;
    onClose: () => void;
}
export declare const MbModal: (props: ModalProps) => JSX.Element;
export {};

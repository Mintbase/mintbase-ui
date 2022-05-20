/// <reference types="react" />
import './modal.css';
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    topElement?: JSX.Element;
    open: boolean;
    onClose: () => void;
}
export declare const MbModal: (props: ModalProps) => JSX.Element;
export {};

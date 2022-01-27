/// <reference types="react" />
interface MenuWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const MbMenuWrapper: (props: MenuWrapperProps) => JSX.Element;
export {};

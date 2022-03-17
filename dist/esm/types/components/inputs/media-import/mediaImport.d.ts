/// <reference types="react" />
interface MediaImportProps {
    isProfileImage?: boolean;
    isHeaderImage?: boolean;
    acceptedFormats: string[];
    idealDimensions: string;
    maxSize: number;
    uploadedFile: File;
    placeholderImageURL?: string;
    errorMessage?: string;
    handleFileAdd: (file: File) => void;
    handleFileRemove: () => void;
}
export declare const MbMediaImport: (props: MediaImportProps) => JSX.Element;
export {};

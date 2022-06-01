/// <reference types="react" />
interface MediaImportProps {
    isProfileImage?: boolean;
    isHeaderImage?: boolean;
    acceptedFormats: string[];
    idealDimensions: string;
    uploadedFile: File;
    placeholderImageURL?: string;
    handleFileAdd: (file: File) => void;
    handleFileRemove: () => void;
    maxFileSize?: number;
}
export declare const MbMediaImport: (props: MediaImportProps) => JSX.Element;
export {};

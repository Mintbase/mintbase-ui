/// <reference types="react" />
interface MediaImportProps {
    isProfileImage: boolean;
    acceptedFormats: string[];
    idealDimensions: string;
    maxSize: number;
    uploadedFile: File;
    errorMessage?: string;
    handleFileAdd: (file: File) => void;
    handleFileRemove: () => void;
}
declare const MbMediaImport: (props: MediaImportProps) => JSX.Element;
export default MbMediaImport;

/// <reference types="react" />
interface MediaImportProps {
    isProfileImage: boolean;
    uploadText: string;
    acceptedFormats: string[];
    idealDimensions: string;
    maxSize: number;
}
declare const MbMediaImport: (props: MediaImportProps) => JSX.Element;
export default MbMediaImport;

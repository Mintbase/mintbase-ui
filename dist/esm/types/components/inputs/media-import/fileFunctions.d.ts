import { EIconName } from '../../../consts/icons';
export declare const iconType: (fileType: string) => EIconName.THREED | EIconName.VIDEO | EIconName.FILE | EIconName.IMAGE | EIconName.AUDIO;
export declare const modelsHandler: (originalFile: File) => Promise<File>;

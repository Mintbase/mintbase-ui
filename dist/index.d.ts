/// <reference types="react" />
import * as React$1 from 'react';
import React__default from 'react';
import { Place } from 'react-tooltip';

interface AccordionProps extends React__default.HTMLAttributes<HTMLDivElement> {
    title: string;
    isOpen?: boolean;
    isFixedAccordion?: boolean;
    isVerifiedToken?: boolean;
    extraIcon?: JSX.Element;
}
declare const MbAccordion: (props: AccordionProps) => JSX.Element;

declare enum EType {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
declare enum EState {
    ACTIVE = "active",
    CAUTION = "caution",
    DISABLED = "disabled",
    LOADING = "loading"
}
declare enum ESize {
    SMALL = "small",
    MEDIUM = "medium",
    BIG = "big"
}
declare enum ESmallCardType {
    PROFILE = "profile",
    STORE = "store"
}

interface ActionProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    state?: EState.ACTIVE | EState.DISABLED | EState.CAUTION;
    size?: ESize;
}
declare const MbAction: ({ state, size, className, ...props }: ActionProps) => JSX.Element;

interface ButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    btnType?: EType;
    state?: EState;
    size?: ESize;
}
declare const MbButton: ({ label, state, size, btnType, ...props }: ButtonProps) => JSX.Element;

declare enum EIconName {
    CHECK = "check",
    VERIFIED = "verified",
    CLOSE = "close",
    ARROW_UP = "arrow_upward",
    MOON = "nightlight_round",
    SUN = "light_mode",
    TICKET = "local_activity",
    THREED = "3d_rotation",
    VIDEO = "videocam",
    FILE = "insert_drive_file",
    IMAGE = "image",
    AUDIO = "music_note",
    COMPARE_ARROWS = "compare_arrows",
    REPORT = "report_problem",
    ARROW_DROP_DOWN = "arrow_drop_down",
    ARROW_DROP_UP = "arrow_drop_up",
    FULLSCREEN = "fullscreen",
    FULLSCREEN_EXIT = "fullscreen_exit",
    MORE = "more_horiz",
    DELETE = "delete_forever",
    SHARE = "share",
    MENU = "menu",
    SEARCH = "search",
    CIRCLE = "circle",
    ARROW_BACK_BIG = "arrow_back_ios",
    ARROW_FORWARD_BIG = "arrow_forward_ios",
    ARROW_BACK_SMALL = "navigate_before",
    ARROW_FORWARD_SMALL = "navigate_next",
    ARROW_EXPAND_MORE = "expand_more",
    ARROW_EXPAND_LESS = "expand_less",
    SELECT_ARROWS = "unfold_more",
    OPEN_NEW_TAB = "launch",
    LINK = "link",
    UNLINK = "link_off",
    LIKE = "favorite_border",
    LIKE_FILLED = "favorite",
    INFO = "info",
    ERROR = "error",
    SUCCESS = "check_circle",
    EDITIONS = "filter_none",
    COPY = "copy",
    BURN = "local_fire_department",
    FACEBOOK = "facebook",
    INSTAGRAM = "instagram",
    PINTEREST = "pinterest",
    TWITTER = "twitter",
    TELEGRAM = "telegram",
    MEDIUM = "medium",
    LINKEDIN = "linkedin",
    YOUTUBE = "youtube",
    GITHUB = "github",
    DISCORD = "discord",
    MINTBASE = "mintbase",
    PLAY = "play",
    PAUSE = "pause",
    NONE = "none"
}

declare type TThingCard = {
    upperLeftIcon?: EIconName;
    upperLeftText?: string;
    upperRightElement?: JSX.Element;
    centerElement: JSX.Element;
    nftTypeIcon?: EIconName;
    midLeftText: string;
    midRightText: string;
    botLeftImage?: string;
    botRightText?: string;
    botRightIcon?: EIconName;
    onUpperLeftClick?: () => void;
    onCenterElementClick?: () => void;
    onBotLeftImageClick?: () => void;
};
declare type TSmallCard = {
    centerElement: JSX.Element;
    title: string;
    onCardClick?: () => void;
};
declare type TInfoCard = {
    loading?: boolean;
    title: string;
    description?: string;
    upperIcon?: EIconName;
    descriptionIcon?: EIconName;
    descriptionImage?: string;
    lowerLeftText?: string;
    isBigDescription?: boolean;
    isNumber?: boolean;
    size?: ESize;
    isVerifiedStore?: boolean;
    handleDescriptionClick?: () => void;
};

declare const MbInfoCard: ({ boxInfo }: {
    boxInfo: TInfoCard;
}) => JSX.Element;

interface CardProps$1 extends React__default.ComponentProps<'div'> {
    loading?: boolean;
    card: TSmallCard;
    cardType: ESmallCardType;
}
declare const MbSmallCard: ({ loading, cardType, card, }: CardProps$1) => JSX.Element;

interface CardProps extends React__default.ComponentProps<'div'> {
    loading?: boolean;
    cardInfo: TThingCard;
}
declare const MbThingCard: ({ loading, cardInfo }: CardProps) => JSX.Element;

declare const MbIcon: ({ name, color, darkColor, size, className, }: {
    name: EIconName;
    color: string;
    darkColor?: string | undefined;
    size?: string | undefined;
    className?: string | undefined;
}) => JSX.Element;

declare enum EControlStatus {
    NORMAL = "normal",
    VALID = "valid",
    INVALID = "invalid"
}
interface InputProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hasIcon?: boolean;
    controlStatus: EControlStatus;
    inputSize?: ESize;
    hasPercentageLabel?: boolean;
}
declare const MbInput: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    controlStatus: EControlStatus;
    inputSize?: ESize;
}
declare const MbTextArea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

interface InputTagsProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    maxTags: number;
    inputSize?: ESize;
    onTagsChange: (tags: string[]) => void;
    onMaxTags: () => void;
}
declare const MbInputTags: React$1.ForwardRefExoticComponent<InputTagsProps & React$1.RefAttributes<HTMLInputElement>>;

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: TSelectOption[];
    onValueChange: (value: string) => void;
    value?: string;
}
declare type TSelectOption = {
    value: string;
    label: string;
};
declare const MbInputSelect: (props: SelectProps) => JSX.Element;

declare const MbItemsPerPage: ({ onItemsPage, currentValue, }: {
    onItemsPage: (page: number) => void;
    currentValue: number;
}) => JSX.Element;

interface PaginationProps {
    onPageChange: (currentPage: number) => void;
    totalItems: number;
    currentPage: any;
    itemsPerPage: number;
    hasLabel?: boolean;
    altDisplayType?: string;
}
declare const MbPagination: (props: PaginationProps) => JSX.Element | null;

interface TableProps extends React__default.HTMLAttributes<HTMLDivElement> {
    title?: string;
    pagination?: PaginationProps;
    onAmountItemsChange?: (page: number) => void;
}
declare const MbHead: (props: React__default.HTMLAttributes<HTMLDivElement>) => JSX.Element;
declare const MbBody: (props: React__default.HTMLAttributes<HTMLDivElement>) => JSX.Element;
declare const MbTable: (props: TableProps) => JSX.Element;

interface TabProps extends React__default.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    extraFilter?: string;
    onExtraFilterChange?: (isSelected: boolean) => void;
}
declare const MbTab: (props: TabProps) => JSX.Element;

interface TabsProps extends React__default.HTMLAttributes<HTMLDivElement> {
    activeIndex: number;
    filterOptions?: TFilterOptions;
    onTabChange: (index: number) => void;
    onOrderByChange: (selected: string) => void;
}
declare type TFilterOptions = {
    label: string;
    defaultOptionId?: string;
    options: {
        id: string;
        label: string;
    }[];
};
declare const MbTabs: (props: TabsProps) => JSX.Element;

declare type TextProps = React__default.HTMLAttributes<HTMLDivElement>;
declare const MbText: (props: TextProps) => JSX.Element;

declare const MbTooltip: ({ text, id, place, component, }: {
    text: string;
    id: string;
    place: Place;
    component: JSX.Element;
}) => JSX.Element;

interface LogoProps {
    src: string;
    width?: string;
    className?: string;
}
declare const MbLogo: ({ src, width, className, }: LogoProps) => JSX.Element;

interface Item {
    content: JSX.Element;
    selected?: boolean;
    icon?: JSX.Element;
    onClick?: () => void;
}
interface DropdownMenuProps {
    items: Item[];
    isOpen: boolean;
    className?: string;
}
declare const MbDropdownMenu: (props: DropdownMenuProps) => JSX.Element | null;

interface MbStatefulButtonProps {
    indicator: JSX.Element;
    content: JSX.Element;
    className?: string;
    hasEmptyStatus?: boolean;
    onClick?: React__default.MouseEventHandler<HTMLDivElement>;
}
declare const MbStatefulButton: ({ indicator, content, className, hasEmptyStatus, onClick, }: MbStatefulButtonProps) => JSX.Element;

declare const MbSwitch: React$1.ForwardRefExoticComponent<ToggleProps & React$1.RefAttributes<HTMLInputElement>>;

declare const MbCheckbox: React$1.ForwardRefExoticComponent<ToggleProps & React$1.RefAttributes<HTMLInputElement>>;

interface ChipProps extends ToggleProps {
    isChecked: boolean;
    disabled: boolean;
    handleClick: () => void;
}
declare const MbChip: (props: ChipProps) => JSX.Element;

declare const MbRadioButton: React$1.ForwardRefExoticComponent<ToggleProps & React$1.RefAttributes<HTMLInputElement>>;

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    open: boolean;
    onClose: () => void;
}
declare const MbModal: (props: ModalProps) => JSX.Element;

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
    maxFileSize?: number;
}
declare const MbMediaImport: (props: MediaImportProps) => JSX.Element;

interface InputAccountProps {
    subtitle: string;
    smallSubtitle: string;
    inputs: JSX.Element;
    footer: JSX.Element;
}
declare const MbInputAccount: (props: InputAccountProps) => JSX.Element;

interface AmountButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    maxAmount: number;
    btnSize?: ESize;
    controlStatus?: EControlStatus;
    onValueChange: (amount: string) => void;
}
declare const MbAmountInput: React$1.ForwardRefExoticComponent<AmountButtonProps & React$1.RefAttributes<HTMLInputElement>>;

declare type TNetworkOption = {
    label: string;
    value: string;
    indicator: JSX.Element;
};

interface NetworkMenuProps {
    options: TNetworkOption[];
    isOpen?: boolean;
    isInline?: boolean;
    menuClassName?: string;
    itemClassName?: string;
    onOptionChange: (selected: string) => void;
}
declare const MbNetworkMenu: (props: NetworkMenuProps) => JSX.Element | null;

interface MenuWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const MbMenuWrapper: (props: MenuWrapperProps) => JSX.Element;

interface ColorIndicatorProps {
    parentClassName?: string;
    childClassName?: string;
}
declare const MbColorIndicator: (props: ColorIndicatorProps) => JSX.Element;

declare const MbAudioPlayer: ({ src }: {
    src: string;
}) => JSX.Element;

declare const MbModelPlayer: ({ modelSrc, posterImg, ...restProps }: {
    modelSrc: string;
    posterImg: JSX.Element;
}) => JSX.Element;

declare const MbVideoPlayer: ({ src, type, }: {
    src: string;
    type: string;
}) => JSX.Element;

declare type TColorDetail = {
    sectionTitle: string;
    colors: TColor[];
};
declare type TColor = {
    class: string;
    hex: string;
};

declare const colorsArray: TColorDetail[];

declare const getFontType: (size: string) => "p-big-90" | "p-med-90" | "p-small-90" | undefined;
declare const getInputLabelFontType: (inputSize: string) => "cap-big-90" | "p-med-90" | "p-small-90" | undefined;

declare const AUDIO_TYPES: string[];
declare const VIDEO_TYPES: string[];
declare const IMAGE_TYPES: string[];
declare const THREED_TYPES: string[];
declare const FILE_TYPES: string[];
declare const ALL_TYPES: string[];

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export { ALL_TYPES, AUDIO_TYPES, EControlStatus, EIconName, ESize, ESmallCardType, EState, EType, FILE_TYPES, IMAGE_TYPES, Item, MbAccordion, MbAction, MbAmountInput, MbAudioPlayer, MbBody, MbButton, MbCheckbox, MbChip, MbColorIndicator, MbDropdownMenu, MbHead, MbIcon, MbInfoCard, MbInput, MbInputAccount, MbInputSelect, MbInputTags, MbItemsPerPage, MbLogo, MbMediaImport, MbMenuWrapper, MbModal, MbModelPlayer, MbNetworkMenu, MbPagination, MbRadioButton, MbSmallCard, MbStatefulButton, MbSwitch, MbTab, MbTable, MbTabs, MbText, MbTextArea, MbThingCard, MbTooltip, MbVideoPlayer, TColor, TColorDetail, THREED_TYPES, TInfoCard, TNetworkOption, TSmallCard, TThingCard, ToggleProps, VIDEO_TYPES, colorsArray, getFontType, getInputLabelFontType };

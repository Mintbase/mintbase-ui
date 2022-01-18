/// <reference types="react" />
import React$1 from 'react';
import { Place } from 'react-tooltip';

interface AccordionProps extends React$1.HTMLAttributes<HTMLDivElement> {
    title: string;
    hasInfoIcon?: boolean;
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

interface ActionProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    state?: EState.ACTIVE | EState.DISABLED;
    size?: ESize;
}
declare const MbAction: ({ label, state, size, ...props }: ActionProps) => JSX.Element;

interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
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
    ARROW_LEFT_BIG = "arrow_back_ios",
    ARROW_RIGHT_BIG = "arrow_forward_ios",
    ARROW_LEFT_SMALL = "navigate_before",
    ARROW_RIGHT_SMALL = "navigate_next",
    ARROW_EXPAND_MORE = "expand_more",
    ARROW_EXPAND_LESS = "expand_less",
    OPEN_NEW_TAB = "launch",
    LINK = "link",
    UNLINK = "link_off",
    LIKE = "favorite_border",
    LIKE_FILLED = "favorite",
    INFO = "info",
    ERROR = "error",
    SUCCESS = "check_circle",
    EDITIONS = "filter_none",
    BURN = "local_fire_department",
    FACEBOOK = "facebook",
    INSTAGRAM = "instagram",
    PINTEREST = "pinterest",
    TWITTER = "twitter",
    TELEGRAM = "telegram",
    MEDIUM = "medium",
    LINKEDIN = "linkedin",
    YOUTUBE = "youtube",
    MINTBASE = "mintbase",
    NONE = "none"
}

declare type TThingCard = {
    upperLeftIcon?: EIconName;
    upperLeftText?: string;
    upperRightIcon?: EIconName;
    centerElement: JSX.Element;
    isCenterImage: boolean;
    midLeftText: string;
    midRightText: string;
    botLeftImage?: string;
    botRightText?: string;
    botRightIcon?: EIconName;
    onUpperLeftClick?: () => void;
    onUpperRightClick?: () => void;
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
    isBigDescription?: boolean;
    size?: ESize;
    handleDescriptionClick?: () => void;
};

declare const MbInfoCard: ({ boxInfo }: {
    boxInfo: TInfoCard;
}) => JSX.Element;

interface CardProps$1 extends React$1.ComponentProps<'div'> {
    loading?: boolean;
    card: TSmallCard;
    cardType: ESmallCardType;
}
declare const MbSmallCard: ({ loading, cardType, card, }: CardProps$1) => JSX.Element;

interface CardProps extends React$1.ComponentProps<'div'> {
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
interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hasIcon?: boolean;
    controlStatus: EControlStatus;
    inputSize: ESize;
    hasPercentageLabel?: boolean;
}
declare const MbInput: ({ label, hasIcon, controlStatus, inputSize, ...props }: InputProps) => JSX.Element;

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
}
declare const MbPagination: (props: PaginationProps) => JSX.Element | null;

interface TableProps extends React$1.HTMLAttributes<HTMLDivElement> {
    title: string;
    pagination?: PaginationProps;
    onAmountItemsChange?: (page: number) => void;
}
declare const MbTable: (props: TableProps) => JSX.Element;

interface TabProps extends React$1.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}
declare const MbTab: (props: TabProps) => JSX.Element;

interface TabsProps extends React$1.HTMLAttributes<HTMLDivElement> {
    hasFilters: boolean;
}
declare const MbTabs: (props: TabsProps) => JSX.Element;

declare type TextProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const MbText: (props: TextProps) => JSX.Element;

declare const MbTooltip: ({ text, place, component, }: {
    text: string;
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
    text: string;
    icon?: JSX.Element;
    onClick: () => void;
}
declare const MbDropdownMenu: ({ items, isOpen, className, }: {
    items: Item[];
    isOpen: boolean;
    className?: string | undefined;
}) => JSX.Element | null;

interface MbStatefulButtonProps {
    indicator: JSX.Element;
    content: JSX.Element;
    className?: string;
    onClick?: React$1.MouseEventHandler<HTMLDivElement>;
}
declare const MbStatefulButton: ({ indicator, content, className, onClick, }: MbStatefulButtonProps) => JSX.Element;

declare type TToggle = {
    label: string;
    id?: string;
    isChecked: boolean;
    disabled: boolean;
};

interface SwitchProps extends TToggle {
    handleChange: (checked: boolean) => void;
}
declare const MbSwitch: (props: SwitchProps) => JSX.Element;

interface CheckboxProps extends TToggle {
    handleChange: (checked: boolean) => void;
}
declare const MbCheckbox: (props: CheckboxProps) => JSX.Element;

interface ChipProps extends TToggle {
    handleClick: () => void;
}
declare const MbChip: (props: ChipProps) => JSX.Element;

interface RadioButtonProps extends TToggle {
    handleChange: (id: string) => void;
}
declare const MbRadioButton: (props: RadioButtonProps) => JSX.Element;

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    open: boolean;
    onClose: () => void;
}
declare const MbModal: (props: ModalProps) => JSX.Element;

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

declare type TInputListGroup = {
    amount?: TInput;
    account: TInput;
};
declare type TInput = {
    placeholder: string;
    value: string | number;
    status: EControlStatus;
};
interface InputAccountProps {
    maxAmount: number;
    title: string;
    subtitle: string;
    smallSubtitle: string;
    inputList: TInputListGroup[];
    footerTitle: string;
    leftFooterContent?: JSX.Element;
    removeInputHandler: (index: number) => void;
    accountInputChangeHandler: (e: any, index: number) => void;
    amountInputChangeHandler?: (e: any, index: number) => void;
    footerAction: () => void;
}
declare const MbInputAccount: (props: InputAccountProps) => JSX.Element;

interface AmountButtonProps {
    max: number;
    disabled: boolean;
    onValueChange: (amount: number) => void;
}
declare const MbAmountButton: (props: AmountButtonProps) => JSX.Element;

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

export { EControlStatus, EIconName, ESize, ESmallCardType, EState, EType, MbAccordion, MbAction, MbAmountButton, MbButton, MbCheckbox, MbChip, MbDropdownMenu, MbIcon, MbInfoCard, MbInput, MbInputAccount, MbItemsPerPage, MbLogo, MbMediaImport, MbModal, MbPagination, MbRadioButton, MbSmallCard, MbStatefulButton, MbSwitch, MbTab, MbTable, MbTabs, MbText, MbThingCard, MbTooltip, TColor, TColorDetail, TInfoCard, TSmallCard, TThingCard, colorsArray, getFontType };

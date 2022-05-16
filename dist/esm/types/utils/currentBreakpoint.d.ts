export declare enum ScreenBreakpoint {
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl"
}
export declare type TScreenBreakpoint = ScreenBreakpoint.LG | ScreenBreakpoint.MD | ScreenBreakpoint.SM | ScreenBreakpoint.XL;
export declare const getBreakpointValue: (value: ScreenBreakpoint) => number;
export declare const getCurrentBreakpoint: () => TScreenBreakpoint;

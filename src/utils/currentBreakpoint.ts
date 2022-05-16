import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../mintbase-theme'

export enum ScreenBreakpoint {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

export type TScreenBreakpoint =
  | ScreenBreakpoint.LG
  | ScreenBreakpoint.MD
  | ScreenBreakpoint.SM
  | ScreenBreakpoint.XL

export const getBreakpointValue = (value: ScreenBreakpoint): number => {
  return +tailwindConfig.screens[value].slice(
    0,
    tailwindConfig.screens[value].indexOf('px')
  )
}

export const getCurrentBreakpoint = (): TScreenBreakpoint => {
  let currentBreakpoint: TScreenBreakpoint = ScreenBreakpoint.SM
  let biggestBreakpointValue = 0
  for (const breakpoint of Object.keys(tailwindConfig.screens)) {
    const auxBreakpoint = breakpoint as TScreenBreakpoint
    const breakpointValue = getBreakpointValue(auxBreakpoint)
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue
      currentBreakpoint = auxBreakpoint
    }
  }
  return currentBreakpoint
}

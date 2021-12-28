import tailwindConfig from '../mintbase-theme'

export const isMobile = () => {
  return window.innerWidth < Number(tailwindConfig.screens.sm.replace('px', ''))
}

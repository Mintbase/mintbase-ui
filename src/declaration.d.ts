declare module '@google/model-viewer/dist/model-viewer'

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': ModelViewerJSX &
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  }
}

interface ModelViewerJSX {
  src: string
  poster?: string
  reveal: string
  'animation-name': string
  'shadow-intensity': string
  autoplay: boolean
  ar: boolean
  'ar-modes': string
  'camera-controls': boolean
}

interface ModelViewerElement extends Element {
  model: {
    materials: Array<{
      name: string
      pbrMetallicRoughness: {
        setBaseColorFactor: (x: [number, number, number, number]) => void
        setMetallicFactor: (x: number) => void
        setRoughnessFactor: (x: number) => void

        baseColorTexture: null | {
          texture: {
            source: {
              setURI: (x: string) => void
            }
          }
        }
        metallicRoughnessTexture: null | {
          texture: {
            source: {
              setURI: (x: string) => void
            }
          }
        }
        // ... others
      }
    }>
  }
}

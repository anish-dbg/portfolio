/** Props every widget on the canvas receives from page.tsx */
export interface CanvasWidgetProps {
  defaultX?: number
  defaultY?: number
  width?: number
  zIndex?: number
  delay?: number
  onFocus?: () => void
}

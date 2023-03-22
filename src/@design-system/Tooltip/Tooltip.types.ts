export interface TooltipProps {
    title?: any
    children: string | string[] | JSX.Element | JSX.Element[]
    delay?: number
    direction?: 'top' | 'left' | 'rigth' | 'bottom'
 }
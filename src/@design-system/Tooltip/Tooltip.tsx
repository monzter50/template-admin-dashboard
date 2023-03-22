"use client"; // this is a client component 👈🏽

import React from 'react'
import styles from './Tooltip.module.css'
import { TooltipProps } from "./Tooltip.types"
import { Tooltip } from 'flowbite-react'
import classNames from 'classnames'
const direction = {
    top: styles.top
}
export default function TooltipCustom({ title = '', children, delay, direction = 'top' }: TooltipProps): JSX.Element {
    const tooltip = classNames(direction, styles.tooltip)


    return (
        <Tooltip content={title}>
            {children}
        </Tooltip>



    )
}

"use client";
import styles from "./Aside.module.css"
import {Sidebar} from "flowbite-react"
export default function Aside({ children }: any) {
    return (
        <Sidebar className={styles.aside}>
            {children}
        </Sidebar>
    )
}
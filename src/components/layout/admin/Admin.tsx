import React from "react";
import styles from "./Admin.module.css"
import Aside from "./Aside";
export default function Admin({ children }: any) {
    return (
        <div className={styles.root}>
            <Aside>
                <div>
                    <ul>
                        <li>Hola</li>
                        <li>Hola</li>
                        <li>Hola</li>
                        <li>Hola</li>
                    </ul>
                </div>
            </Aside>
            <main className={styles.body}>
                {children}
            </main>
        </div>
    )
}
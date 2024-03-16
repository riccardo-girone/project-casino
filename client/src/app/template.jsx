"use client"
import styles from "./template.module.css"

export default function Template({ children }) {
    return (
        <div>
            <div 
                id="banner-1" 
                className={styles.banner1}
            />

            <div 
                id="banner-2" 
                className={styles.banner2}
            />

            <div 
                id="banner-3" 
                className={styles.banner3}
            />

            <div 
                id="banner-4" 
                className={styles.banner4}
            />
            
            { children }
        </div>
    );
  }
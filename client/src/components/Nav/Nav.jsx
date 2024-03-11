'use client'
import styles from './Nav.module.scss'
import { useState } from 'react';

export default function Nav() {

    const [isActive, setIsActive] = useState(false);

    return (
      <>
          <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
              <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
  
          <AnimatePresence mode="wait">
             {isActive && <Nav />}
         </AnimatePresence>
  
     </>
    )
}
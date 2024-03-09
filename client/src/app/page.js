'use client';
import { useEffect } from 'react';
import styles from "./page.module.css";
import Intro from '../components/Home/Intro.jsx';
import Content from '../components/Content/Content.jsx';

export default function Home() {
    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    return (
        <main className={styles.main}>
            <Intro/>
            <Content/>
        </main>
    );
}

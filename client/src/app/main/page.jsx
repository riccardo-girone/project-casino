'use client';
import { useEffect } from 'react';
import Main from '../../components/Project-main/Main.jsx';

export default function Gallery() {
    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    return (
        <main>
            <Main/>
        </main> 
    );
}
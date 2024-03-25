'use client';
import { useEffect } from 'react';
import Mainp from '../../components/Project-main/Main.jsx';

export default function page() {
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
            <Mainp/>
        </main> 
    );
}
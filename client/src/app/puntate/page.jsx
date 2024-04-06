'use client';
import { useEffect } from 'react';
import Puntate from '../../components/Puntate/Puntate.jsx'

export default function Page() {
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
            <Puntate/>
        </main> 
    );
}
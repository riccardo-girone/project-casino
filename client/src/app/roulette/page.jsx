'use client';
import { useEffect } from 'react';
import Roulette from '../../components/Project-roulette/Roulette'

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
            <Roulette/>
        </main> 
    );
}
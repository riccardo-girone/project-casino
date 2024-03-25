'use client'
import { useEffect } from 'react';
import Bj from '../../components/Project-BJ/Bj'

export default function Page() {
    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    return(
        <main>
            <Bj/>
        </main>
    );
}
'use client';
import { useEffect } from 'react';
import Utente from '../../components/Utente/Utente'

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
            <Utente/>
        </main> 
    );
}
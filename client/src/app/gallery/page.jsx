'use client';
import { useEffect } from 'react';
import Code from '@/components/CodeProject/Code';

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
            <Code/>
        </main> 
    );
}
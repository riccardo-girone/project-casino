import styles from './Code.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger from correct path
import Link from 'next/link'

const projects = [
    {
        title: "Main",
        src: "img1.jpg",
        link: "/main"
        
    },
    {
        title: "Roulette",
        src: "img2.jpg",
        link: "/Roulette"
    },
    {
        title: "Black jack",
        src: "img1.jpg",
        link: "/Blackjack"
    },
    {
        title: "Login & Menu",
        src: "img2.jpg",
        link: "/Login&Menu"
    },
    {
        title: "Scommesse",
        src: "img1.jpg",
        link: "/Scommesse"
    },
];

export default function Code() {
    const [selectedProject, setSelectedProject] = useState(0);
    const imageContainer = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: imageContainer.current, // Use imageContainer.current as trigger
                pin: true,
                start: "top top",
                end: "500",
                markers: true,
            },
        });
    }, []); // Run only once after component mount

    return (
        <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/home-img/${projects[selectedProject].src}`}
                        fill={true}
                        alt="image"
                        priority={true}
                    />
                </div>
            </div>
            <div className={styles.projectList}>
                {projects.map((project, index) => (
                    <div key={index} onMouseOver={() => setSelectedProject(index)} className={styles.projectEl}>
                        <Link href={project.link} style={{ textDecoration: 'none', color: '#1e1e1e'}}>
                            <h2>{project.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import styles from './Code.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import Footer from '../footer/Footer.jsx'

const projects = [
    {
        title: "Intro",
        src: "img1.jpg",
        link: "/main"
        
    },
    {
        title: "Utente & Utenti",
        src: "img2.jpg",
        link: "/utente"
    },
    {
        title: "Blackjack",
        src: "img1.jpg",
        link: "/blackjack"
    },
    {
        title: "Roulette",
        src: "img2.jpg",
        link: "/roulette"
    },
    {
        title: "Puntate",
        src: "img1.jpg",
        link: "/puntate"
    },
];

export default function Code() {
    const [selectedProject, setSelectedProject] = useState(0);

    return (
        <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={`/home-img/${projects[selectedProject].src}`}
                        fill={true}
                        alt="image"
                        priority={true}
                    />
                </div>

                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <div> 
                            project gallery
                        </div>
                    </div>
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

            <Footer/>
        </div>
    );
}

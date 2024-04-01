import React, { useState } from 'react';
import styles from './Code.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import Footer from '../footer/Footer.jsx'

const projects = [
    {
        title: "Main",
        src: "img1.jpg",
        link: "/main"
        
    },
    {
        title: "Roulette",
        src: "img2.jpg",
        link: "/roulette"
    },
    {
        title: "Black jack",
        src: "img1.jpg",
        link: "/blackjack"
    },
    {
        title: "Utente",
        src: "img2.jpg",
        link: "/Login&Menu"
    },
    {
        title: "Puntate",
        src: "img1.jpg",
        link: "/Scommesse"
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

import React, { useState } from 'react';
import styles from './Code.module.scss';
import Image from 'next/image';
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

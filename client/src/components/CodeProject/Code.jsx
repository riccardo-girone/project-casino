import styles from './Code.module.scss'
import React, { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Main",
        src: "img1.jpg"
    },

    {
        title: "Roulette",
        src: "img2.jpg"
    },

    {
        title: "Black jack",
        src: "img1.jpg"
    },

    {
        title: "Login & Menu",
        src: "img2.jpg"
    },

    {
        title: "Scommesse",
        src: "img1.jpg"
    },
]

export default function Code() {
    
    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                   <div ref={imageContainer} className={styles.imageContainer}>
                        <Image 
                            src={`/home-img/${projects[selectedProject].src}`}
                            fill={true}
                            alt="image"
                            priority={true}
                        />
                    </div>

                    <div className={styles.column}>
                        <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                    </div>

                    <div className={styles.column}>
                        <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                    </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    );
}
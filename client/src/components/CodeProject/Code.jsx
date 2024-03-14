import styles from './Code.module.scss'
import React, { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image';

const projects = [
    {
        title: "Salar de Atacama",
        src: "salar_de_atacama.jpg"
    },

    {
        title: "Valle de la luna",
        src: "valle_de_la_muerte.jpeg"
    },

    {
        title: "Miscanti Lake",
        src: "miscani_lake.jpeg"
    },

    {
        title: "Miniques Lagoons",
        src: "miniques_lagoon.jpg"
    },
]

export default function Code() {
    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                   <div ref={imageContainer} className={styles.imageContainer}>
                        <Image 
                            src={`/images/${projects[selectedProject].src}`}
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
                            return <div className={styles.projectEl}>
                                <h2>{project.title}</h2>
                            </div>
                        })
                    }
            </div>
        </div>
    );
}
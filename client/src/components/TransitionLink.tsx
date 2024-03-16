"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/animate"
import React from "react"


interface Props {
    href: string
    label: string
}

const TransitionLInk = ({ href, label }: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handlClick = () => {
        if (pathname != href) {
            animatePageOut(href, router)
        }
    }

    return (
        <button onClick={handlClick}> {label} </button>
    );
}

export default TransitionLInk
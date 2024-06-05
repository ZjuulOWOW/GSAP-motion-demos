"use client"

import "./style.scss"
import React, { useEffect } from "react"
import { useRef } from "react"

export default function PBM({ children, className }) {
    const ref = useRef()

    useEffect(() => {
        const targetElement = ref.current
    }, [])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}

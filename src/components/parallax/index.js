import "./style.scss"
import React, { useEffect } from "react"
import { useRef } from "react"
import Image from "next/image"
import { createParallax } from "@owowagency/gsap-motion"

export default function Parallax({src, alt, height, width, style}) {
    const ref = useRef()

    useEffect(() => {
        const targetElement = ref.current
    }, [])

    return (
        <Image
            ref={ref}
            className="parallax-image"
            src={src}
            alt={alt}
            height={height}
            width={width}
            style={style}
        />
    )
}

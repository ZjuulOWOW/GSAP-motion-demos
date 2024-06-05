import "./style.scss"
import React, { useEffect } from "react"
import { useRef } from "react"
import Image from "next/image"
import { createParallax } from "@owowagency/gsap-motion"

export default function Parallax({src, alt, height, width, style, speed}) {
    const ref = useRef()

    useEffect(() => {
        const targetElement = ref.current
        createParallax(targetElement, {
            speed: speed
        })
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

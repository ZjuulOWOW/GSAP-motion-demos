import "./style.scss"
import React, { useEffect } from "react"
import { useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import { createMarquee } from "@owowagency/gsap-motion"

export default function Marquee({offset, direction = "scroll"}) {
    const ref = useRef()
    useEffect(() => {
        const targetElement = ref.current
            createMarquee(targetElement, {
                speed: 0,
                scrollVelocity: 0.05,
                direction: direction,
            })
    }, [])

    return (
        <div className="marquee" ref={ref}>
            <p className="marquee-text">Front end developer</p>
                <div className="marquee-image">
                    <Image
                        src="/assets/placeholder.jpg"
                        alt="placeholder"
                        fill={true}
                    />
                </div>
        </div>
    )
}

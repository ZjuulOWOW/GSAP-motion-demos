import "./style.scss"
import React, { useEffect } from "react"
import { useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

export default function Marquee({offset}) {
    const ref = useRef()

    useEffect(() => {
        gsap.set(ref.current, {
            x: offset,
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

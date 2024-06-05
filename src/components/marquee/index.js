import "./style.scss"
import React, { useEffect } from "react"
import { useRef } from "react"
import Image from "next/image"

export default function Marquee({ direction = "scroll" }) {
    const ref = useRef()

    useEffect(() => {
        const targetElement = ref.current
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

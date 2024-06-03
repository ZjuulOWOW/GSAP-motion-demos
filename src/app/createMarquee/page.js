"use client"

import "./style.scss"
import Marquee from "@/components/marquee"
import Lenis from "lenis"

export default function page() {
    const lenis = new Lenis()
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return (
        <main>
            <Marquee offset="-240" />
            <Marquee offset="-160" />
            <Marquee offset="-80" />
        </main>
    )
}

"use client"

import "./style.scss"
import Marquee from "@/components/marquee"
import Lenis from "lenis"

export default function page() {
    return (
        <main>
            <Marquee/>
            <Marquee direction="scroll-reverse" />
            <Marquee/>
        </main>
    )
}

"use client"

import Parallax from "@/components/parallax"
import "./style.scss"

export default function page() {
    return (
        <main>
            <Parallax
                src="/assets/placeholder.jpg"
                alt="placeholder"
                height={640}
                width={560}
            />
            <Parallax
                src="/assets/placeholder.jpg"
                alt="placeholder"
                height={320}
                width={240}
                style={{
                    marginRight: "30vw",
                }}
            />
            <Parallax
                src="/assets/placeholder.jpg"
                alt="placeholder"
                height={400}
                width={320}
                style={{
                    marginLeft: "40vw",
                }}
            />
        </main>
    )
}

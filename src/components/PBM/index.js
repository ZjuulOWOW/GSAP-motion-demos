"use client"

import "./style.scss"
import React, { useEffect } from "react"
import { useRef } from "react"
import {
    createPhysicsBasedMotion,
    getMousePosition,
} from "@owowagency/gsap-motion"

export default function PBM({ children, className, intensity }) {
    const ref = useRef()

    useEffect(() => {
        const speed = 1
        const damping = .3
        const response = 0
        const x0 = 0
        let prevTime = 0
        const targetElement = ref.current

        const dynamicsX = createPhysicsBasedMotion(speed, damping, response, x0)
        const dynamicsY = createPhysicsBasedMotion(speed, damping, response, x0)

        const update = (currentTime) => {
            const deltaTime = (currentTime - prevTime) / 1000
            const mouseX = getMousePosition().client.x 
            const mouseY = getMousePosition().client.y
            const elX = (dynamicsX.update(deltaTime, mouseX) - window.innerWidth / 2 ) / intensity
            const elY = (dynamicsY.update(deltaTime, mouseY) - window.innerHeight / 2 ) / intensity
            targetElement.style.transform = `translate3d(${elX}px, ${elY}px, 0)`
            window.requestAnimationFrame(update)
            prevTime = currentTime
        }
        window.requestAnimationFrame(update)
    }, [])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}

"use client"

import "./style.scss"
import React, { useEffect } from "react"
import { useRef } from "react"
import { createPhysicsBasedMotion, getMousePosition } from "@owowagency/gsap-motion"

export default function PBM({ children, className, intensity=0 }) {
    const ref = useRef()

    useEffect(() => {
        const speed = .5
        const damping = .5
        const response = 1
        const dynamicsX = createPhysicsBasedMotion(speed, damping, response, 0)
        const dynamicsY = createPhysicsBasedMotion(speed, damping, response, 0)

        let prevTime = 0
        const targetElement = ref.current
        const update = (currentTime) => {
            const deltaTime = (currentTime - prevTime) / 1000
            const mouseX = getMousePosition().page.x - window.innerWidth / 2
            const mouseY = getMousePosition().page.y - window.innerHeight / 2
            const targetX = dynamicsX.update(deltaTime, mouseX) / (100 / intensity)
            const targetY = dynamicsY.update(deltaTime, mouseY) / (100 / intensity)
            targetElement.style.transform = `translate(${targetX}px, ${targetY}px)`
            requestAnimationFrame(update)
            prevTime = currentTime
        }
        requestAnimationFrame(update)
    }, [])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}

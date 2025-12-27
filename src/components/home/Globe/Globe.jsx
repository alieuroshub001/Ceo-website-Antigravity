"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { useMotionValue, useSpring } from "motion/react"

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [1, 1, 1],
  markerColor: [0, 1, 1],
  glowColor: [0.1, 0.1, 0.1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [30.3753, 69.3451], size: 0.08 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0
  let width = 0
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005
        state.phi = phi + rs.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => (canvasRef.current.style.opacity = "1"), 0)
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  const stats = [
    { number: "50+", label: "Countries Reached" },
    { number: "100+", label: "Global Clients" },
    { number: "7+", label: "Years Experience" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a09] to-black py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Globe */}
          <div className="relative order-2 lg:order-1">
            <div className={`relative mx-auto aspect-[1/1] w-full max-w-[500px] ${className || ''}`}>
              <canvas
                className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
                ref={canvasRef}
                onPointerDown={(e) => {
                  pointerInteracting.current = e.clientX
                  updatePointerInteraction(e.clientX)
                }}
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                  e.touches[0] && updateMovement(e.touches[0].clientX)
                }
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Section Header */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                  <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium">Global Reach</span>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-tight mb-4">
                Trusted Worldwide
              </h2>

              <p className="text-base text-white/50 leading-relaxed max-w-xl">
                Working with organizations across continents to deliver strategic solutions and transformative results
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-sm text-white/50 tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-3xl lg:text-4xl font-light text-white">
                    {stat.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

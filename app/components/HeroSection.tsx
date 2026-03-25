'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${y * 0.9}px)`
        }
        if (textRef.current) {
          textRef.current.style.transform = `translateY(${y * 0.55}px)`
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section style={{
      background: '#FFF127',
      padding: '80px 24px 60px',
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Couche parallax — image de fond (se déplace plus vite) */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-30% 0',
          zIndex: 0,
          opacity: 0.06,
          willChange: 'transform',
        }}
      >
        <Image src="/images/hero-bg.png" alt="" fill style={{ objectFit: 'cover' }} />
      </div>

      {/* Contenu — se déplace légèrement moins vite */}
      <div
        ref={textRef}
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          willChange: 'transform',
        }}
      >
        <h1
          className="font-anton"
          style={{
            fontSize: 'clamp(4rem, 12vw, 11rem)',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            color: '#0a0a0a',
            margin: 0,
          }}
        >
          <span style={{ display: 'block' }}>CREATIVE</span>
          <span style={{ display: 'block', fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px #0a0a0a' }}>THINKING</span>
          <span style={{ display: 'block' }}>AU SERVICE</span>
          <span style={{ display: 'block' }}>DES MARQUES</span>
        </h1>
      </div>
    </section>
  )
}

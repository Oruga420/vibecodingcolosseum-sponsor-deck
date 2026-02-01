'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBG() {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 0, 10)

    // Particles
    const count = 1800
    const geom = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3 + 0] = (Math.random() - 0.5) * 18
      positions[i3 + 1] = (Math.random() - 0.5) * 12
      positions[i3 + 2] = (Math.random() - 0.5) * 12
      sizes[i] = Math.random() * 1.2 + 0.2
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geom.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        // Match VibeCoding_Coliseo palette
        uColorA: { value: new THREE.Color('#00c46a') },
        uColorB: { value: new THREE.Color('#ff2d2d') },
        uColorC: { value: new THREE.Color('#e3f1ea') }
      },
      vertexShader: `
        uniform float uTime;
        attribute float aSize;
        varying float vZ;
        void main() {
          vec3 p = position;
          p.x += sin(uTime * 0.35 + position.y) * 0.15;
          p.y += cos(uTime * 0.25 + position.x) * 0.10;
          vZ = p.z;
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = aSize * (18.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;
        varying float vZ;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          float alpha = smoothstep(0.5, 0.0, d);
          vec3 col = mix(uColorA, uColorB, clamp((vZ + 6.0) / 12.0, 0.0, 1.0));
          col = mix(col, uColorC, clamp((6.0 - vZ) / 12.0, 0.0, 1.0) * 0.35);
          gl_FragColor = vec4(col, alpha * 0.85);
        }
      `
    })

    const points = new THREE.Points(geom, material)
    scene.add(points)

    // subtle wireframe ring
    const ring = new THREE.TorusKnotGeometry(2.5, 0.45, 130, 12)
    const ringMat = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      wireframe: true,
      transparent: true,
      opacity: 0.10
    })
    const ringMesh = new THREE.Mesh(ring, ringMat)
    ringMesh.position.z = -1.0
    scene.add(ringMesh)

    let raf = 0
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    const start = performance.now()
    const animate = () => {
      const t = (performance.now() - start) / 1000
      material.uniforms.uTime.value = t
      points.rotation.y = t * 0.05
      points.rotation.x = t * 0.03
      ringMesh.rotation.x = t * 0.15
      ringMesh.rotation.y = t * 0.12
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geom.dispose()
      material.dispose()
      ring.dispose()
      ringMat.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="bg" />
}

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial, OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'

function FloatingMesh({ position, color = '#7fb8ff', radius = 1 }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.y = 0.2 * t
    ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.25
  })
  return (
    <mesh ref={ref} position={position} castShadow>
      <torusKnotGeometry args={[radius, radius * 0.3, 128, 32]} />
      <MeshWobbleMaterial factor={2} speed={2} color={color} envMapIntensity={0.8} clearcoat={1} metalness={0.2} />
    </mesh>
  )
}

export default function BackgroundCanvas() {
  const lights = useMemo(() => {
    return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
      </>
    )
  }, [])

  return (
    <div className="bg-canvas">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} shadows>
        {lights}
        <FloatingMesh position={[ -2.5, 0.2, 0 ]} radius={1.2} color="#a0d8ff" />
        <FloatingMesh position={[ 1.5, -0.3, -1 ]} radius={0.9} color="#7fb8ff" />
        <FloatingMesh position={[ 0.6, 1.0, -0.5 ]} radius={0.7} color="#cfeeff" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}

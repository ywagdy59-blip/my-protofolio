import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const Shape = () => {
  const groupRef = useRef();
  const autoRotation = useRef({ x: 0, y: 0 });

  const prefersReducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Wireframe edges built once from the same geometry as the glass core,
  // scaled up slightly so the outline reads as a shell around it.
  const edges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.75, 1)),
    []
  );

  useFrame((state, delta) => {
    const { mouse } = state;
    if (!groupRef.current) return;

    if (!prefersReducedMotion) {
      autoRotation.current.x += delta * 0.12;
      autoRotation.current.y += delta * 0.2;
    }

    const targetX = (mouse.x * Math.PI) / 6;
    const targetY = (mouse.y * Math.PI) / 6;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      autoRotation.current.y + targetX,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      autoRotation.current.x - targetY,
      0.05
    );
  });

  return (
    <>
      {/* Ambient dust for depth. Sits outside the rotating group so it
          drifts independently rather than spinning with the shape. */}
      <Sparkles
        count={50}
        scale={7}
        size={1.6}
        speed={0.25}
        color="#6e8cff"
        opacity={0.5}
      />

      {/* floatIntensity only (rotationIntensity is 0) so Float handles the
          gentle vertical bob while our own useFrame above owns rotation —
          letting both drive rotation would fight every frame. */}
      <Float speed={1.6} rotationIntensity={0} floatIntensity={0.55}>
        <group ref={groupRef} scale={0.85}>
          {/* Glass core */}
          <mesh>
            <icosahedronGeometry args={[1.6, 1]} />
            <MeshDistortMaterial
              color="#6e8cff"
              distort={0.35}
              speed={1.6}
              roughness={0.15}
              metalness={0.4}
              transparent
              opacity={0.85}
            />
          </mesh>

          {/* Wireframe shell */}
          <lineSegments geometry={edges}>
            <lineBasicMaterial color="#edeef2" transparent opacity={0.35} />
          </lineSegments>
        </group>
      </Float>
    </>
  );
};

const Scene = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#6e8cff" />
        <Shape />
      </Canvas>
    </div>
  );
};

export default Scene;
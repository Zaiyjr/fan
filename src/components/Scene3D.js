import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

function FloatingHeart({ position, color, onClick }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3;
    mesh.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    mesh.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    
    if (hovered) {
      mesh.current.scale.set(1.2, 1.2, 1.2);
    } else {
      mesh.current.scale.set(1, 1, 1);
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Sphere args={[0.2, 32, 32]}>
        <meshStandardMaterial
          color={color}
          metalness={0.5}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </Sphere>
    </mesh>
  );
}

function FloatingText({ position, text }) {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(time) * 0.1;
  });

  return (
    <Text
      ref={mesh}
      position={position}
      fontSize={0.3}
      color="#ff69b4"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
}

function Scene3D() {
  const [clickedHeart, setClickedHeart] = useState(null);
  const messages = [
    "I Love You!",
    "Happy Birthday!",
    "Forever Yours",
    "My Everything"
  ];

  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingHeart
          position={[-2, 0, 0]}
          color="#ff69b4"
          onClick={() => setClickedHeart(0)}
        />
        <FloatingHeart
          position={[0, 1, 0]}
          color="#ff1493"
          onClick={() => setClickedHeart(1)}
        />
        <FloatingHeart
          position={[2, -1, 0]}
          color="#ff69b4"
          onClick={() => setClickedHeart(2)}
        />
        <FloatingHeart
          position={[-1, -1, 0]}
          color="#ff1493"
          onClick={() => setClickedHeart(3)}
        />
        
        {clickedHeart !== null && (
          <FloatingText
            position={[0, 2, 0]}
            text={messages[clickedHeart]}
          />
        )}
        
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Scene3D; 
import React, { useRef, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import useCanvasWheel from '../hooks/useCanvasWheel'; // Import the custom hook

const Dodecahedron = () => {
  const dodecahedronRef = useRef();
  const [radius, setRadius] = useState(4);

  useFrame(() => {
    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.x += 0.01;
      dodecahedronRef.current.rotation.y += 0.01;
    }
  });

  const handleWheel = useCallback((event) => {
    const newRadius = radius + event.deltaY * -0.01;
    setRadius(Math.max(2, Math.min(newRadius, 5)));
  }, [radius]);

  useCanvasWheel(handleWheel); // Use the custom hook

  return (
    <mesh ref={dodecahedronRef} onWheel={handleWheel}>
      <dodecahedronGeometry args={[radius]} />
      <meshNormalMaterial />
      <Text position={[0, 0, 0]} fontSize={1} color="black">
        Face 1
      </Text>
      {/* ... */}
    </mesh>
  );
};

export default Dodecahedron;

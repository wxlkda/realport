import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const useCanvasWheel = (callback) => {
  const { gl } = useThree();

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      callback(event);
    };

    const canvas = gl.domElement;
    canvas.addEventListener('wheel', handleWheel);

    return () => {
      canvas.removeEventListener('wheel', handleWheel);
    };
  }, [gl, callback]);
};

export default useCanvasWheel;
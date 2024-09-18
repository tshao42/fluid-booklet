import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect';
import * as THREE from 'three';

extend({ OutlineEffect });

function Scene() {
  const { gl, scene, camera } = useThree();
  const outlineEffect = useRef();

  useEffect(() => {
    outlineEffect.current = new OutlineEffect(gl);
  }, [gl]);

  useFrame(() => {
    if (outlineEffect.current) {
      outlineEffect.current.render(scene, camera);
    }
  }, 1);

  return (
    <>
      <OrbitControls enablePan enableRotate />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>
    </>
  );
}

const ThreeScene = () => {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#999999'));
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
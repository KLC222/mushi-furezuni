// src/Scene.tsx
import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// https://medium.com/@kr4ckhe4d/loading-gltf-and-glb-models-in-reactjs-three-js-dcb3ac28231c


function Loader() {
  const { progress } = useProgress()
  console.log(progress)
  return <Html center>{progress} % loaded</Html>
}

const ModelViewer: React.FC = () => {
  const gltf = useLoader(GLTFLoader, '/models/testV1.glb')

  return (
    <Suspense fallback={<Loader />}>
      <div style={{ width: "50vw", height: "50vh" }}>
      {/* Canvas camera position */}
      <Canvas camera={{ position: [-7, 1, -4] }} shadows>
        {/* directional light simulating sunlight with shadows */}
        <directionalLight
          position={[-1.3, 6.0, 4.4]}
          castShadow
          intensity={Math.PI * 1}
        />
        <directionalLight
          position={[1.3, -6.0, -4.4]}
          castShadow
          intensity={Math.PI * 1}
        />
        <primitive
          object={gltf.scene}
          position={[0, 0, 0]}
       
        />
        
        <OrbitControls target={[0, 1, 0]} enableZoom={false}/>

      </Canvas>
      </div>
    </Suspense>
  );
};

export default ModelViewer;
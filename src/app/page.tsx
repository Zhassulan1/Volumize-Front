'use client'

import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const obj = useLoader(OBJLoader, "https://volumize-bucket.s3.amazonaws.com/userobj_8000106_1719914302.04095_tmpfd7btaj2.obj", loader => {
    loader.manager.onError = function (url: string) {
      console.error(`There was an error loading ${url}`);
    };
  });

  console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};

export default function App() {
  return (
    <div className="App">
      <Canvas 
        shadows
        className="w-full min-h-screen"
      >
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={1} 
          castShadow 
        />

        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

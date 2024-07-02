'use client'
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { MTLLoader } from "three/examples/jsm/Addons.js";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  // const materials = useLoader(MTLLoader, "Poimandres.mtl");
  const obj = useLoader(OBJLoader, "fox.obj", (loader) => {
    // materials.preload();
    // loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};

// import EarthCanvas from "./components/preview";

export default function App() {
  return (
    <div className="App">
      <Canvas className="w-full h-full">
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
          {/* <Environment preset="sunset" background /> */}
      </Canvas>
    </div>
  );
}
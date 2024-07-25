import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Scene from "./scene";

interface Props{
    url: string;
    rotate: number[];
    height?: number;
    width?: number;
}

export default function Viewer({url, rotate, height, width}: Props) {
    return (
        <div className="content-center flex flex-fol items-center justify-center">
            <Canvas 
                shadows
                style={{ height: height || 250, width: width || 600 }}
                className="flex items-center justify-center"
            >
                <ambientLight intensity={2} />
                <directionalLight 
                    position={[0, 0, 0]} 
                    intensity={1} 
                    castShadow 
                    scale={5}
                />

                <Suspense fallback={null}>
                    <Scene url={url} rotate={rotate}/>
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    )
}
"use client"

import React, { useState } from 'react';
import './upload.css';
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = ({url}: {url: string}) => {
  const obj = useLoader(OBJLoader, url, loader => {
    loader.manager.onError = function (url: string) {
      console.error(`There was an error loading ${url}`);
    };
  });

  console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};

const BACKEND_URL = 'http://localhost:8000';

export default function UploadSection() {
  const [file, setFile] = useState<File>();
  const [objURL, setObjURL] = useState('');


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      return;
    }

    try {
      const data = new FormData();
      data.set('image', file);


      const res = await fetch(`${BACKEND_URL}/upload`, {
        method: 'POST',
        body: data
      })

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const result = await res.json();
      if (res.ok) {
        console.log('File URL:', result.obj_url);
        setObjURL(result.obj_url);
      } else {
        console.error('Upload failed:', result.error);
      }


    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <>
    <div className=' w-1/3 px-5' >
      <form onSubmit={onSubmit} className='flex flex-col m-auto '>
        
        <div className="flex items-center justify-center w-full m-15">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" name="image"
                  multiple
                  onChange={(e) => {setFile(e.target.files?.[0])}} className="hidden" />
            </label>
        </div> 


        <button
          type="submit"
          value=""
          className="my-15 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Upload
        </button>

      </form>
    
    </div>
    {
      objURL && <a href={objURL} className='w-1/3' > Download </a> &&
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
          <Scene url={objURL}></Scene>
          <OrbitControls />
        </Suspense>
      </Canvas>

    }
    </>
  )
}
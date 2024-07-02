// "use client"; // Указываем, что это клиентский компонент

// import React, { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { useFBX, OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// type FBXModelProps = {
//   url: string;
// };

// const FBXModel: React.FC<FBXModelProps> = ({ url }) => {
//   const fbx = useFBX(url);
//   const mixer = useRef<THREE.AnimationMixer | null>(null);

//   useEffect(() => {
//     if (fbx.animations.length > 0) {
//       mixer.current = new THREE.AnimationMixer(fbx);
//       const action = mixer.current.clipAction(fbx.animations[0]);
//       action.play();

//       return () => {
//         if (mixer.current) {
//           mixer.current.stopAllAction();
//           mixer.current.uncacheClip(fbx.animations[0]);
//         }
//       };
//     }
//   }, [fbx]);

//   useFrame((state, delta) => {
//     if (mixer.current) {
//       mixer.current.update(delta);
//     }
//   });

//   return <primitive object={fbx} scale={[6, 6, 6]} />;
// };

// type FBXViewerProps = {
//   url: string;
// };

// const FBXViewer: React.FC<FBXViewerProps> = ({ url }) => {
//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 6, 10], fov: 75 }} // Настройка камеры: начальная позиция и угол обзора (fov)
//       style={{ height: '100%', width: '100%'}} // Стили для контейнера с 3D-сценой
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
//       <FBXModel url={url} />
//       <OrbitControls
//         target={[.4, 5, 0]}
//         minDistance={1}
//         maxDistance={20}
//         enableRotate={false}
//         enableZoom={false}
//         enableDamping={true}
//       />
//     </Canvas>
//   );
// };

// export default FBXViewer;
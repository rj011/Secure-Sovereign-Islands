import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three'

import { useFrame, useLoader } from "@react-three/fiber";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  
  
  const computer = useGLTF("./Butterflymodel/scene.gltf");
  let mixer

  useEffect(()=>{
    if (computer.animations.length) {
        mixer = new THREE.AnimationMixer(computer.scene);
        computer.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }
  
  
  })

  useFrame((state, delta) => {
    mixer?.update(delta)
})



  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-80, 100, 50]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 4 : 6
        }
        position={isMobile ? [0, -5, -0.2] : [0, -5, -0.3]}
        rotation={[0, 0, -0.2]}
        
      />
    </mesh>
  );
};


const Butterfly = () => {




  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  
  return (
    <div> 
      <div className={'text-container'} style={{position:'relative'}}>
      </div>
    
    <Canvas style={{height:500}}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [26, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
    </div>
  );
};

export default Butterfly;
import React, { useState, useRef, useEffect } from "react";
import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";
import "./App.css";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function App() {
  const laptop = useGLTF("./laptop.gltf");

  const [clicked, setClicked] = useState(false);
  const markerRef = useRef();
  const vec = new THREE.Vector3();

  useFrame((state) => {
    if (clicked) {
      state.camera.lookAt(vec.set(0, 0, 0), 0.2);
      state.camera.position.lerp(vec.set(0.2, 1, 4), 0.2);
      state.camera.updateProjectionMatrix();
    }
    if (!clicked) {
      state.camera.lookAt(vec.set(0, 0, 0), 0.2);
      state.camera.position.lerp(vec.set(-3, 1.5, 5), 0.2);
      state.camera.updateProjectionMatrix();
    }
    return null;
  });

  return (
    <>
      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#eeeeee"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            object={laptop.scene}
            ref={markerRef}
            onClick={() => setClicked(!clicked)}
            onPointerMissed={() => setClicked(clicked)}
            position-y={-1.2}
          />

          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 0.36, -1.4]}
            rotation-x={-0.256}
          >
            <iframe src="https://danish.dev"></iframe>
          </Html>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

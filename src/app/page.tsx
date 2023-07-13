'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current || document.createElement('canvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);

    const loader = new GLTFLoader();
    loader.load('/Lion.glb', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      //Center the model in the scene
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);

      // Add animation or manipulation logic for the model here

    }, undefined, (error) => {
      console.error('Error loading model:', error);
    });

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    camera.position.set(0, 0, 15);

    const animate = () => {
      requestAnimationFrame(animate);

      // Add animation logic using GSAP here


      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up resources if needed
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Home;

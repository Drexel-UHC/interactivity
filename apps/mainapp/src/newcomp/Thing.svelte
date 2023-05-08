<!-- src/components/Thing.svelte -->
<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    
    let camera, scene, renderer, cube;
  
    onMount(() => {
      // Create the scene
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
      // Create a renderer and add it to the DOM
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Add a cube to the scene
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0xff745f });
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
  
      // Position the camera
      camera.position.z = 5;
  
      // Animate the cube
      const animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    });
  </script>
  
  <style>
    canvas {
      display: block;
    }
  </style>
  
  <div id="thing-container"></div>
  
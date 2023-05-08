<svelte:head>
    <title>My Three Thing</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  
  let camera, scene, renderer, cube;
  
  onMount(() => {
    // Create the scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
    // Create a renderer and add it to the cube-container div
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const cubeContainer = document.getElementById('cube-container');
    cubeContainer.appendChild(renderer.domElement);
  
    // Add a cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff745f });
    cube = new THREE.Mesh(geometry, material);
    
    // Add a wireframe border to the cube
    const wireframe = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x0F0064 });
    const wireframeCube = new THREE.LineSegments(wireframe, wireframeMaterial);
    cube.add(wireframeCube);
    
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
  #cube-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  canvas {
    display: block;
  }
</style>

<div id="cube-container"></div>


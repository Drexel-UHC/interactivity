import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a group for the city
const city = new THREE.Group();
scene.add(city);

// Function to create a building
function createBuilding(x, y, z, width, height, depth, color) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshBasicMaterial({color: color});
    const building = new THREE.Mesh(geometry, material);
    building.position.set(x, y + height / 2, z);
    city.add(building);
}

// Create a simple city with randomly placed buildings
const citySize = 10;
const buildingColors = [0xFF0000, 0x00FF00, 0x0000FF, 0xFFFF00, 0xFF00FF, 0x00FFFF];

for (let i = 0; i < citySize; i++) {
    for (let j = 0; j < citySize; j++) {
        let height;

        // Generate a random number between 0 and 1
        const skyscraperChance = Math.random();

        if (skyscraperChance < 0.9) {
          // 90% chance to generate a normal building
          height = Math.random() * 10 + 5;
        } else {
          // 10% chance to generate a skyscraper
          height = Math.random() * 40 + 40;
        }

        const color = buildingColors[Math.floor(Math.random() * buildingColors.length)];
        createBuilding(i * 15 - (citySize * 7.5), 0, j * 15 - (citySize * 7.5), 10, height, 10, color);
    }
}
camera.position.set(citySize * 7.5, citySize * 3, citySize * 12);
camera.lookAt(scene.position);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable smooth rotation
controls.dampingFactor = 0.1;
controls.rotateSpeed = 0.3;

// Resize the renderer when the window is resized
window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update OrbitControls
    controls.update();

    renderer.render(scene, camera);
}

animate();
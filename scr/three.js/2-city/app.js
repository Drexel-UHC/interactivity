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
        const height = Math.random() * 10 + 5;
        const color = buildingColors[Math.floor(Math.random() * buildingColors.length)];
        createBuilding(i * 15 - (citySize * 7.5), 0, j * 15 - (citySize * 7.5), 10, height, 10, color);
    }
}

camera.position.set(citySize * 7.5, citySize * 3, citySize * 12);
camera.lookAt(scene.position);

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

    // Rotate the city
    city.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();

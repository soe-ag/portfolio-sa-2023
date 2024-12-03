
import * as THREE from "three"
// import GUI from "lil-gui";
import {OrbitControls} from "three/addons/controls/OrbitControls.js"
import {FontLoader} from "three/examples/jsm/loaders/FontLoader"
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"

console.log("loaded 3js script");
// const gui = new GUI()
const canvas = document.querySelector("canvas.board")
const scene = new THREE.Scene()
// scene.background = new THREE.Color(0xffffff); // Replace 0xffffff with your desired color

const axesHelper = new THREE.AxesHelper(4)
// gui.add(axesHelper, "visible").name("axes");
// scene.add(axesHelper)

const sizes = {
  width: 768,
  height: 600
};

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 3;
camera.position.y = 3.5;
camera.position.z = 4.5;
scene.add(camera);

//Texture
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/yellow1.png')

//Fonts
const fontLoader = new FontLoader()
let text = [];

// const textCoordinates = [
//   { x: -1.8, y: 1.2, z: 0.2 },
//   { x: 0.7, y: 1.6, z: 0.1 },
//   { x: -1.3, y: -0.2, z: -1.2 },
//   { x: 0.1, y: 0.3, z: -1.9 },
//   { x: 0.5, y: -1.8, z: 0.1 },
//   { x: 1.9, y: -0.1, z: -0.2 },
//   { x: -0.4, y: -0.9, z: 1.7 },
//   { x: -0.3, y: 1.7, z: -1.1 },
//   { x: 1.5, y: 0.8, z: 0.7 },
//   { x: -1.1, y: 1.5, z: -0.8 },
//   { x: -0.7, y: -1.7, z: -0.5 },
//   { x: 1.2, y: -0.6, z: 1.3 },
//   { x: -0.6, y: -0.1, z: 1.8 },
// ];

const textCoordinates = [
  { x: -2.8, y: 1.5, z: 0.5 },
  { x: 1.5, y: 2.0, z: 0.3 },
  { x: -2.0, y: -1.2, z: -2.2 },
  { x: 0.0, y: -0.1, z: -2.8 },
  { x: 0.9, y: -2.7, z: 0.4 },
  { x: 3.0, y: -0.3, z: -0.8 },
  { x: -1.2, y: -1.8, z: 2.5 },
  { x: -1.0, y: 2.5, z: -1.5 },
  { x: 2.5, y: 1.0, z: 2.0 },
  { x: -2.0, y: 2.2, z: -1.0 },
  { x: -1.5, y: -2.5, z: -1.5 },
  { x: 2.0, y: -1.0, z: 2.5 },
  { x: -1.0, y: 0.0, z: 2.8 },
];

const shuffledCoordinates = textCoordinates.sort(() => Math.random() - 0.5);

const main = new THREE.Object3D();
scene.add(main);

fontLoader.load("/fonts/Comfortaa_Regular.json", (font) => {
  const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture});
  // const textMaterial = new THREE.MeshNormalMaterial()
  // const textMaterial = new THREE.MeshStandardMaterial({ wireframe: true });

  let textArray = ["JavaScript","CSS","HTML","SASS","Bootstrap","jQuery","Three.js",
  "Figma","React","TypeScript","Node","Photoshop","WordPress",];

  textArray = textArray.sort(() => Math.random() - 0.5);

  
  for(let i=0; i<textArray.length; i++){
    const textGeometry = new TextGeometry(textArray[i], {
      font: font,
      size: 0.35,
      height: 0.07,
      curveSegments: 3,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.01,
      bevelOffset: 0,
      bevelSegments: 1,
    });

    textGeometry.center();
    text.push(new THREE.Mesh(textGeometry, textMaterial));
    main.add(text[i]);
    text[i].position.set(
      shuffledCoordinates[i].x,
      shuffledCoordinates[i].y,
      shuffledCoordinates[i].z
    );
    // text[i].scale.set(2,2,2)

      // const randomIndex = Math.floor(Math.random() * textCoordinates.length);
      // const { x, y, z } = textCoordinates[randomIndex];
      // text[i].position.set(x, y, z);
  }
  //   const textMaterial = new THREE.MeshNormalMaterial()
  
});

// console.log(text);



// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enableZoom = false

//Light
// const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3);
// scene.add(hemisphereLight);


// Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setClearColor(0x000000, 0); // 0 alpha value makes the background transparent

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// const cube = new THREE.Mesh(new THREE.BoxGeometry(1,1,1,2),new THREE.MeshStandardMaterial({emissive:0xff00ff}))
// scene.add(cube)


window.addEventListener("resize", ()=>{
    // sizes.width = window.innerWidth
    // sizes.height = window.innerHeight

    camera.aspect = sizes.width/ sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width,sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

})


const clock = new THREE.Clock();

// let increment; 
// const randomNumber = () => {
//   increment = Math.random()
// }

// setInterval(randomNumber,3000)

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // if(text){

  for(let i=0; i<text.length; i++){
    let increment = i+1;
    if(i<4){
      increment = i+3
    }
    // text[i].rotation.x = increment * elapsedTime;
    text[i].rotation.y = increment * 0.05 * elapsedTime;
    text[i].rotation.x = increment * 0.05 * elapsedTime;
    // text[i].rotation.z = (i+1) * 0.05 * elapsedTime;
  }
  // }

  main.rotation.y = 0.3 * elapsedTime

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();





let i = 0;
let j = 0;
let text1 = "SOE AUNG";
let text2 = "FRONTEND DEVELOPER";
let speed = 180;

setTimeout(typeWriter, 500);
function typeWriter() {
  if (i < text1.length) {
    document.getElementById("typeout1").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter2, 2500);
function typeWriter2() {
  if (j < text2.length) {
    document.getElementById("typeout2").innerHTML += text2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}

setTimeout(addclass, 3500);
function addclass() {
  document.getElementById("iconleft").classList.add("fromleft");
  document.getElementById("iconright").classList.add("fromright");
  // console.log("sadf");
}

// --for loading screen
// let timer;

// function loading() {
//   timer = setTimeout(showPage, 500);
//   console.log(timer);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("wholediv").style.display = "block";
// }



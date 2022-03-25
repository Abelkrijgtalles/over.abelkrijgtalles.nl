import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 })
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture

const abelTexture = new THREE.TextureLoader().load('abel.jpg')

const abel = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: abelTexture })
)

scene.add(abel)

const sunTexture = new THREE.TextureLoader().load('sun.jpg')

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
  })
)

scene.add(sun)

const mercuryTexture = new THREE.TextureLoader().load('mercury.jpg')
const mercuryBump = new THREE.TextureLoader().load('mercurybump.jpg')

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
    bumpMap: mercuryBump
  })
)

scene.add(mercury)

const venusTexture = new THREE.TextureLoader().load('venus.jpg')
const venusBump = new THREE.TextureLoader().load('venusbump.jpg')

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
    bumpMap: venusBump,
  })
)

scene.add(venus)

const earthTexture = new THREE.TextureLoader().load('earth.jpg')
const earthBump = new THREE.TextureLoader().load('earthbump.jpg')

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    bumpMap: earthBump,
  })
)

scene.add(earth)

const moonTexture = new THREE.TextureLoader().load('moon.jpg')
const moonBump = new THREE.TextureLoader().load('moonbump.jpg')

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    bumpMap: moonBump,
  })
)

scene.add(moon)

const marsTexture = new THREE.TextureLoader().load('mars.jpg')
const marsBump = new THREE.TextureLoader().load('marsbump.jpg')
const marsNormal = new THREE.TextureLoader().load('marsnormal.jpg')

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    bumpMap: marsBump,
    normalMap: marsNormal
  })
)

scene.add(mars)

const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg')

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
  })
)

scene.add(jupiter)

const saturnTexture = new THREE.TextureLoader().load('saturn.jpg')

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: saturnTexture,
  })
)

scene.add(saturn)

const ringTexture = new THREE.TextureLoader().load('ring.jpg')

const ring = new THREE.Mesh(
  new THREE.TorusGeometry(4, 1, 2, 100),
  new THREE.MeshStandardMaterial({
    map: ringTexture
  })
)

scene.add(ring)

const uranusTexture = new THREE.TextureLoader().load('uranus.jpg')

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture,
  })
)

scene.add(uranus)

const uranusRingTexture = new THREE.TextureLoader().load('uranusring.jpg')

const uranusRing = new THREE.Mesh(
  new THREE.TorusGeometry(4, 1, 2, 100),
  new THREE.MeshStandardMaterial({
    map: uranusRingTexture
  })
)

scene.add(uranusRing)

const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg')

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture
  })
)

scene.add(neptune)

sun.position.z = 10
sun.position.setX(-10)

mercury.position.z = 20
mercury.position.setX(-10)

venus.position.z = 30
venus.position.setX(-10)

earth.position.z = 40
earth.position.setX(-10)

moon.position.z = 50
moon.position.setX(-10)

mars.position.z = 60
mars.position.setX(-10)

jupiter.position.z = 70
jupiter.position.setX(-10)

saturn.position.z = 80
saturn.position.setX(-10)

ring.position.z = 80
ring.position.setX(-10)
ring.rotation.x = 180

uranus.position.z = 90
uranus.position.setX(-10)

uranusRing.position.z = 90
uranusRing.position.setX(-10)
uranusRing.rotation.x = 100

neptune.position.z = 100
neptune.position.setX(-10)

function moveCamera() {
  const t = document.body.getBoundingClientRect().top
  sun.rotation.y += 0.075

  mercury.rotation.y += 0.075

  venus.rotation.y += 0.075

  earth.rotation.y += 0.075

  moon.rotation.y += 0.075

  mars.rotation.y += 0.075

  jupiter.rotation.y += 0.075

  saturn.rotation.y += 0.075

  ring.rotation.z += 0.075

  uranus.rotation.y += 0.075

  uranusRing.rotation.z += 0.075

  neptune.rotation.y += 0.075

  abel.rotation.y += 0.01
  abel.rotation.z += 0.01

  camera.position.z = t * -0.01
  camera.position.x = t * -0.0002
  camera.rotation.y = t * -0.0002
}

document.body.onscroll = moveCamera
moveCamera()

function animate() {
  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  renderer.render(scene, camera)
}

animate()
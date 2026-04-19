import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass }from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass }     from 'three/addons/postprocessing/OutputPass.js';

export function initHeroScene() {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const isMobile = window.innerWidth < 768;
  const COLS = isMobile ? 24 : 44;
  const ROWS = isMobile ? 16 : 28;
  const count = COLS * ROWS;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setClearColor(0x000000, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 28, 0.001);
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();

  const hexW = 1.0;
  const hexH = Math.sqrt(3) * 0.5;
  const cx   = new Float32Array(count);
  const cz   = new Float32Array(count);
  const distFromCenter = new Float32Array(count);
  const phase          = new Float32Array(count);
  let maxGridRadius = 0;

  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      const i = col * ROWS + row;
      const x = col * hexW - (COLS * hexW) / 2 + hexW / 2;
      const z = row * hexH - (ROWS * hexH) / 2 + hexH / 2
                + (col % 2 === 1 ? hexH / 2 : 0);
      cx[i] = x;
      cz[i] = z;
      const d = Math.sqrt(x * x + z * z);
      distFromCenter[i] = d;
      if (d > maxGridRadius) maxGridRadius = d;
      phase[i] = Math.random() * Math.PI * 2;
    }
  }

  const brightness       = new Float32Array(count).fill(0);
  const targetBrightness = new Float32Array(count).fill(0);
  const currentHeight    = new Float32Array(count).fill(0.3);

  const topGeo  = new THREE.CylinderGeometry(0.45, 0.45, 0.06, 6, 1, false);
  const bodyGeo = new THREE.CylinderGeometry(0.44, 0.44, 1.0, 6, 1, true);

  const topMat  = new THREE.MeshBasicMaterial({ toneMapped: false });
  const bodyMat = new THREE.MeshBasicMaterial({ toneMapped: false });

  const hexTops   = new THREE.InstancedMesh(topGeo,  topMat,  count);
  const hexBodies = new THREE.InstancedMesh(bodyGeo, bodyMat, count);
  hexTops.frustumCulled   = false;
  hexBodies.frustumCulled = false;
  scene.add(hexTops);
  scene.add(hexBodies);

  const dummy     = new THREE.Object3D();
  const darkColor = new THREE.Color(0, 0.004, 0.002);
  for (let i = 0; i < count; i++) {
    dummy.position.set(cx[i], 0.15, cz[i]);
    dummy.scale.set(1, 0.3, 1);
    dummy.updateMatrix();
    hexBodies.setMatrixAt(i, dummy.matrix);

    dummy.position.set(cx[i], 0.33, cz[i]);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    hexTops.setMatrixAt(i, dummy.matrix);

    hexBodies.setColorAt(i, darkColor);
    hexTops.setColorAt(i, darkColor);
  }
  hexBodies.instanceMatrix.needsUpdate = true;
  hexTops.instanceMatrix.needsUpdate   = true;
  hexBodies.instanceColor!.needsUpdate = true;
  hexTops.instanceColor!.needsUpdate   = true;

  scene.add(new THREE.AmbientLight(0x000805, 0.6));

  let composer: InstanceType<typeof EffectComposer> | null = null;
  if (!isMobile) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.4,
      0.6,
      0.2
    );
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }

  const raycaster   = new THREE.Raycaster();
  const mouseVec    = new THREE.Vector2(-9999, -9999);
  const mouseWorld  = new THREE.Vector3();
  const floorPlane  = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  if (!isMobile) {
    window.addEventListener('mousemove', (e) => {
      mouseVec.set(
        (e.clientX / window.innerWidth)  * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      );
      raycaster.setFromCamera(mouseVec, camera);
      if (raycaster.ray.intersectPlane(floorPlane, mouseWorld)) {
        for (let i = 0; i < count; i++) {
          const dx = cx[i] - mouseWorld.x;
          const dz = cz[i] - mouseWorld.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          if (dist < 3.5) {
            const inf = Math.pow(1 - dist / 3.5, 2) * 0.95;
            if (inf > targetBrightness[i]) targetBrightness[i] = inf;
          }
        }
      }
    }, { passive: true });
  }

  const topBuf  = new THREE.Color();
  const bodyBuf = new THREE.Color();

  function getColor(b: number, distRatio: number, out: THREE.Color): void {
    let r: number, g: number, bl: number;
    if (b < 0.15) {
      r = 0; g = b * 0.47; bl = b * 0.21;
    } else if (b < 0.45) {
      r = 0; g = b * 1.8; bl = b * 1.3;
    } else if (b < 0.72) {
      r = 0; g = b * 1.0; bl = b * 0.706;
    } else if (b < 0.88) {
      const t = (b - 0.72) / 0.16;
      r = t; g = 1.0; bl = 0.7 + t * 0.3;
    } else {
      r = 1; g = 1; bl = 1;
    }
    if (distRatio > 0.7) {
      const pm = (distRatio - 0.7) / 0.3;
      r  += (0.486 * b - r)  * pm;
      g  += (0.424 * b - g)  * pm;
      bl += (0.960 * b - bl) * pm;
    }
    out.setRGB(r, g, bl);
  }

  const WAVE_SPEED = 0.06;
  const WAVE_WIDTH = 2.8;
  const DECAY      = 0.96;
  let waveRadius = 0;
  let time = 0;

  renderer.setAnimationLoop(() => {
    time += 0.016;
    waveRadius += WAVE_SPEED;
    if (waveRadius > maxGridRadius + 5) waveRadius = 0;

    for (let i = 0; i < count; i++) {
      const diff = waveRadius - distFromCenter[i];
      if (diff > 0 && diff < WAVE_WIDTH) {
        const wb = Math.sin((diff / WAVE_WIDTH) * Math.PI);
        if (wb > targetBrightness[i]) targetBrightness[i] = wb;
      }
      const ambient = 0.04 + 0.025 * Math.sin(phase[i] + time * 0.5);
      brightness[i] = Math.max(ambient, brightness[i] * DECAY);
      if (targetBrightness[i] > brightness[i]) {
        brightness[i] = targetBrightness[i];
      }
      targetBrightness[i] *= 0.92;

      const targetH = 0.3 + brightness[i] * 2.2;
      currentHeight[i] += (targetH - currentHeight[i]) * 0.12;
      const h = currentHeight[i];

      const dr = distFromCenter[i] / maxGridRadius;
      getColor(brightness[i], dr, topBuf);
      bodyBuf.copy(topBuf).multiplyScalar(0.22);

      hexTops.setColorAt(i, topBuf);
      hexBodies.setColorAt(i, bodyBuf);

      dummy.position.set(cx[i], h * 0.5, cz[i]);
      dummy.scale.set(1, h, 1);
      dummy.updateMatrix();
      hexBodies.setMatrixAt(i, dummy.matrix);

      dummy.position.set(cx[i], h + 0.03, cz[i]);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      hexTops.setMatrixAt(i, dummy.matrix);
    }

    hexTops.instanceMatrix.needsUpdate   = true;
    hexTops.instanceColor!.needsUpdate   = true;
    hexBodies.instanceMatrix.needsUpdate = true;
    hexBodies.instanceColor!.needsUpdate = true;

    if (composer) composer.render();
    else renderer.render(scene, camera);
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer?.setSize(window.innerWidth, window.innerHeight);
  });
}

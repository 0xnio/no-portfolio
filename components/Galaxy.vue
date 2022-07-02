<template>
  <canvas ref="webglCanvas" class="webgl"></canvas>
</template>

<script>
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/dist/tween.esm';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import ChromaticPass from 'assets/shaders/chromatic-aberration.js';

export default {
  mounted() {
    // const gui = new dat.GUI();
    const canvas = this.$refs.webglCanvas;
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load('/textures/particle.webp');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    const stars_count = 1500;
    const uniforms = {
      uTime: { value: 0.0 },
      uSize: { value: 8 * Math.min(window.devicePixelRatio, 2) }
    };

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(stars_count * 3);
    const scales = new Float32Array(stars_count * 1);

    for (let i = 0; i < stars_count; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 16;
      positions.set([x, y, z], i * 3);
      scales[i] = Math.random() * 12;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.PointsMaterial({
      color: new THREE.Color('#67E8F9'),
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      alphaMap: particleTexture,
    });

    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = uniforms.uTime;
      shader.uniforms.uSize = uniforms.uSize;
      shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        `
             #include <common>
             uniform float uTime;
             uniform float uSize;
             attribute float aScale;
             mat2 get2dRotateMatrix(float _angle) {
                 return mat2(cos(_angle), - sin(_angle), sin(_angle), cos(_angle));
             }
         `
      );

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
             #include <begin_vertex>
             float angle = uTime * 0.11;
             mat2 rotateMatrix = get2dRotateMatrix(angle);
             transformed.xz = transformed.xz * rotateMatrix;
         `
      );

      shader.vertexShader = shader.vertexShader.replace(
        `#include <logdepthbuf_vertex>`,
        `
        gl_PointSize = uSize * aScale;
        gl_PointSize *= ( 1.0 / - mvPosition.z );
        #include <logdepthbuf_vertex>
         `
      );
    };

    const points = new THREE.Points(geometry, material);
    points.rotateZ(Math.PI * 0.1);
    scene.add(points);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Update effect composer
      effectComposer.setSize(sizes.width, sizes.height);
      effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Mouse Movement / Cursor
    const cursor = {
      x: 0,
      y: 0
    };

    window.addEventListener('mousemove', event => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    });

    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enabled = false;

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;

    /**
     * Post Processing
     */
    const effectComposer = new EffectComposer(renderer);
    effectComposer.setSize(sizes.width, sizes.height);
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    const chromaticPass = new ShaderPass(ChromaticPass);
    effectComposer.addPass(chromaticPass);

    /**
     * Animation
     */
    const clock = new THREE.Clock();
    let prevTime = 0;

    const introAnimation = new TWEEN.Tween(camera.position.set(0, -15, 15))
      .to(
        {
          x: 2,
          y: 0,
          z: 5
        },
        1900
      )
      .easing(TWEEN.Easing.Quartic.Out)
      .start()
      .onComplete(() => {
        TWEEN.remove(introAnimation); // remove the animation from memory
      });

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - prevTime;
      prevTime = elapsedTime;

      // Animate camera by mouse movement on Y axis
      const parallaxY = - cursor.y * 0.5;
      camera.position.y += (parallaxY - camera.position.y) * 20 * deltaTime;

      TWEEN.update(); // update animations
      uniforms.uTime.value = elapsedTime;
      controls.update();
      effectComposer.render();
      window.requestAnimationFrame(tick);
    };
    tick();

  }
};
</script>

<style scoped>
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  /* pointer-events: none; */
}
</style>

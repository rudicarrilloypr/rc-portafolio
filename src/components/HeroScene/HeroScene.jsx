import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './heroScene.module.css';

function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = styles.canvas;
    mount.appendChild(renderer.domElement);

    const rig = new THREE.Group();
    rig.position.set(1.25, 0.02, 0);
    scene.add(rig);

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x46f0ff,
      emissive: 0x0e7490,
      emissiveIntensity: 0.55,
      metalness: 0.38,
      roughness: 0.22,
      wireframe: true,
    });
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.34, 2),
      coreMaterial
    );
    rig.add(core);

    const shellMaterial = new THREE.MeshBasicMaterial({
      color: 0xa3e635,
      opacity: 0.22,
      transparent: true,
      wireframe: true,
    });
    const shell = new THREE.Mesh(
      new THREE.DodecahedronGeometry(2.05, 1),
      shellMaterial
    );
    rig.add(shell);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      opacity: 0.42,
      transparent: true,
    });

    const ringA = new THREE.Mesh(
      new THREE.TorusGeometry(2.72, 0.012, 10, 180),
      ringMaterial
    );
    ringA.rotation.x = Math.PI / 2.25;
    rig.add(ringA);

    const ringB = new THREE.Mesh(
      new THREE.TorusGeometry(2.28, 0.01, 10, 180),
      ringMaterial.clone()
    );
    ringB.material.color.set(0x46f0ff);
    ringB.material.opacity = 0.28;
    ringB.rotation.y = Math.PI / 2.5;
    rig.add(ringB);

    const ringC = new THREE.Mesh(
      new THREE.TorusGeometry(1.82, 0.008, 10, 160),
      ringMaterial.clone()
    );
    ringC.material.color.set(0xa3e635);
    ringC.material.opacity = 0.22;
    ringC.rotation.z = Math.PI / 3;
    rig.add(ringC);

    const starCount = 780;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 12;
      positions[i3 + 1] = (Math.random() - 0.5) * 7;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: 0xe5f7ff,
        size: 0.018,
        opacity: 0.68,
        transparent: true,
      })
    );
    scene.add(stars);

    const ambientLight = new THREE.AmbientLight(0x7dd3fc, 0.62);
    scene.add(ambientLight);
    const keyLight = new THREE.PointLight(0x46f0ff, 2.1, 16);
    keyLight.position.set(-3.2, 2.4, 5);
    scene.add(keyLight);
    const warmLight = new THREE.PointLight(0xfbbf24, 1.2, 12);
    warmLight.position.set(3.4, -2.2, 4);
    scene.add(warmLight);

    const applyTheme = () => {
      const isLight = document.documentElement.classList.contains('theme-light');

      if (isLight) {
        coreMaterial.color.set(0x0e7490);
        coreMaterial.emissive.set(0x67e8f9);
        coreMaterial.emissiveIntensity = 0.18;
        shellMaterial.color.set(0x65a30d);
        shellMaterial.opacity = 0.2;
        ringA.material.color.set(0xf59e0b);
        ringA.material.opacity = 0.32;
        ringB.material.color.set(0x0891b2);
        ringB.material.opacity = 0.26;
        ringC.material.color.set(0x84cc16);
        ringC.material.opacity = 0.24;
        stars.material.color.set(0x0f172a);
        stars.material.opacity = 0.26;
        ambientLight.color.set(0xffffff);
        ambientLight.intensity = 0.72;
        keyLight.color.set(0x0891b2);
        keyLight.intensity = 1.55;
        warmLight.color.set(0xf59e0b);
        warmLight.intensity = 0.95;
      } else {
        coreMaterial.color.set(0x46f0ff);
        coreMaterial.emissive.set(0x0e7490);
        coreMaterial.emissiveIntensity = 0.55;
        shellMaterial.color.set(0xa3e635);
        shellMaterial.opacity = 0.22;
        ringA.material.color.set(0xfbbf24);
        ringA.material.opacity = 0.42;
        ringB.material.color.set(0x46f0ff);
        ringB.material.opacity = 0.28;
        ringC.material.color.set(0xa3e635);
        ringC.material.opacity = 0.22;
        stars.material.color.set(0xe5f7ff);
        stars.material.opacity = 0.68;
        ambientLight.color.set(0x7dd3fc);
        ambientLight.intensity = 0.62;
        keyLight.color.set(0x46f0ff);
        keyLight.intensity = 2.1;
        warmLight.color.set(0xfbbf24);
        warmLight.intensity = 1.2;
      }
    };

    applyTheme();
    const themeObserver = new MutationObserver(applyTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const pointer = { x: 0, y: 0 };

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    resize();

    let frameId = 0;
    const animate = () => {
      if (!reducedMotion) {
        frameId = window.requestAnimationFrame(animate);
      }

      core.rotation.x += reducedMotion ? 0 : 0.0026;
      core.rotation.y += reducedMotion ? 0 : 0.0048;
      shell.rotation.x -= reducedMotion ? 0 : 0.0016;
      shell.rotation.y += reducedMotion ? 0 : 0.0022;
      ringA.rotation.z += reducedMotion ? 0 : 0.0028;
      ringB.rotation.x -= reducedMotion ? 0 : 0.002;
      ringC.rotation.y += reducedMotion ? 0 : 0.0032;
      stars.rotation.y += reducedMotion ? 0 : 0.0005;

      rig.rotation.y += (pointer.x * 0.18 - rig.rotation.y) * 0.04;
      rig.rotation.x += (-pointer.y * 0.12 - rig.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.cancelAnimationFrame(frameId);
      themeObserver.disconnect();

      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className={styles.scene} ref={mountRef} aria-hidden="true" />;
}

export default HeroScene;

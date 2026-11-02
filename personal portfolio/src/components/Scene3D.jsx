import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Scene3D: An interactive, lightweight 3D technical sculpture.
 * Uses Three.js with an Icosahedron wireframe mesh, glowing core points,
 * orbital particle dust, and smooth mouse-follow parallax.
 * Includes automatic WebGL fallback and prefers-reduced-motion detection.
 */
export default function Scene3D({ className = '' }) {
  const containerRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // Outer wireframe geometric sculpture (Icosahedron)
    const geometry = new THREE.IcosahedronGeometry(2.1, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3B82F6,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });
    const icosahedron = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(icosahedron);

    // Inner glowing geometry (Octahedron)
    const innerGeo = new THREE.OctahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Glowing core point cloud
    const corePointsGeo = new THREE.BufferGeometry();
    const coreCount = 40;
    const corePositions = new Float32Array(coreCount * 3);
    for (let i = 0; i < coreCount * 3; i++) {
      corePositions[i] = (Math.random() - 0.5) * 1.5;
    }
    corePointsGeo.setAttribute('position', new THREE.BufferAttribute(corePositions, 3));
    const corePointsMat = new THREE.PointsMaterial({
      color: 0x22D3EE,
      size: 0.05,
      transparent: true,
      opacity: 0.85
    });
    const corePoints = new THREE.Points(corePointsGeo, corePointsMat);
    scene.add(corePoints);

    // Ambient floating particle dust ring
    const particleCount = 120;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0x94A3B8,
      size: 0.035,
      transparent: true,
      opacity: 0.4
    });
    const particleField = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleField);

    // Subtle mouse tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Rotations
      icosahedron.rotation.x = elapsedTime * 0.12 + currentY;
      icosahedron.rotation.y = elapsedTime * 0.16 + currentX;

      innerMesh.rotation.x = -elapsedTime * 0.2 + currentY * 0.5;
      innerMesh.rotation.y = -elapsedTime * 0.25 + currentX * 0.5;

      corePoints.rotation.y = elapsedTime * 0.08;
      particleField.rotation.y = elapsedTime * 0.04;
      particleField.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      corePointsGeo.dispose();
      corePointsMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-56 h-56 rounded-full border border-blue-500/30 bg-gradient-to-tr from-blue-950/40 via-violet-900/20 to-cyan-900/30 flex items-center justify-center animate-pulse">
          <div className="w-36 h-36 rounded-full border border-cyan-400/40 flex items-center justify-center">
            <span className="font-mono text-xs text-cyan-300">P.M. // SYSTEM</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[320px] md:min-h-[440px] flex items-center justify-center pointer-events-auto ${className}`}
      aria-label="Interactive 3D geometry sculpture"
    />
  );
}

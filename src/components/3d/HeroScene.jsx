import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D scene elements
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // --- 1. Central Holographic Tech Core ---
    // Outer wireframe icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(5.2, 1);
    const coreWireMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.3
    });
    const coreWireMesh = new THREE.Mesh(coreGeo, coreWireMat);
    sceneGroup.add(coreWireMesh);

    // Inner glowing energy sphere
    const innerGeo = new THREE.SphereGeometry(2.8, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x9d4edd,
      roughness: 0.1,
      metalness: 0.8,
      emissive: 0x7928ca,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.85
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    sceneGroup.add(innerMesh);

    // Second concentric geometric ring
    const ringGeo = new THREE.TorusGeometry(7.2, 0.08, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.35
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh1.rotation.x = Math.PI / 3;
    sceneGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
      color: 0xf72585,
      transparent: true,
      opacity: 0.25
    }));
    ringMesh2.rotation.y = Math.PI / 3;
    sceneGroup.add(ringMesh2);

    // --- 2. Orbiting Tech Satellite Nodes ---
    const satelliteGroup = new THREE.Group();
    sceneGroup.add(satelliteGroup);

    const satelliteData = [
      { name: "AWS Cloud", color: 0xf59e0b, radius: 10, speed: 0.8, yOffset: 1.5, size: 0.8 },
      { name: "Data Analytics", color: 0x00f2fe, radius: 11.5, speed: -0.6, yOffset: -2, size: 0.9 },
      { name: "Python / AI", color: 0x10b981, radius: 13, speed: 0.5, yOffset: 2.8, size: 0.85 },
      { name: "Java Backend", color: 0x9d4edd, radius: 9, speed: -0.9, yOffset: -1.2, size: 0.75 }
    ];

    const satellites = satelliteData.map(data => {
      const satGeo = new THREE.OctahedronGeometry(data.size, 0);
      const satMat = new THREE.MeshStandardMaterial({
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.8
      });
      const mesh = new THREE.Mesh(satGeo, satMat);
      satelliteGroup.add(mesh);
      return { mesh, ...data, angle: Math.random() * Math.PI * 2 };
    });

    // Connecting laser line between satellites and center
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.18
    });
    const lineGeometries = satellites.map(() => new THREE.BufferGeometry());
    const lines = lineGeometries.map(geo => {
      const line = new THREE.Line(geo, lineMaterial);
      sceneGroup.add(line);
      return line;
    });

    // --- 3. Dynamic Cosmic Data Particle Field ---
    const particleCount = 1800;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleOriginals = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x00f2fe), // Cyan
      new THREE.Color(0x9d4edd), // Purple
      new THREE.Color(0x3b82f6), // Blue
      new THREE.Color(0xffffff)  // Bright white
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spread across a 3D sphere/cylinder
      const r = 10 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      const x = r * Math.cos(phi) * Math.cos(theta);
      const y = r * Math.sin(phi);
      const z = r * Math.cos(phi) * Math.sin(theta);

      particlePositions[i3] = x;
      particlePositions[i3 + 1] = y;
      particlePositions[i3 + 2] = z;

      particleOriginals[i3] = x;
      particleOriginals[i3 + 1] = y;
      particleOriginals[i3 + 2] = z;

      const c = palette[Math.floor(Math.random() * palette.length)];
      particleColors[i3] = c.r;
      particleColors[i3 + 1] = c.g;
      particleColors[i3 + 2] = c.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.7)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);

    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    sceneGroup.add(particles);

    // --- 4. Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00f2fe, 3, 50);
    pointLightCyan.position.set(12, 12, 10);
    scene.add(pointLightCyan);

    const pointLightPurple = new THREE.PointLight(0x9d4edd, 3, 50);
    pointLightPurple.position.set(-12, -10, 8);
    scene.add(pointLightPurple);

    // --- 5. Mouse Parallax & Interactivity ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.45;
    };

    window.addEventListener('mousemove', onMouseMove);

    // --- 6. Resize Handler ---
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // --- 7. Animation Loop ---
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / scene lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      sceneGroup.rotation.y = elapsedTime * 0.08 + mouseX;
      sceneGroup.rotation.x = mouseY * 0.6;

      // Rotate central core
      coreWireMesh.rotation.x = elapsedTime * 0.15;
      coreWireMesh.rotation.y = elapsedTime * 0.22;

      innerMesh.rotation.y = -elapsedTime * 0.3;
      const pulseScale = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      innerMesh.scale.set(pulseScale, pulseScale, pulseScale);

      ringMesh1.rotation.z = elapsedTime * 0.12;
      ringMesh2.rotation.z = -elapsedTime * 0.18;

      // Update Satellites & Laser connecting lines
      satellites.forEach((sat, i) => {
        sat.angle += 0.012 * sat.speed;
        const x = Math.cos(sat.angle) * sat.radius;
        const z = Math.sin(sat.angle) * sat.radius;
        const y = Math.sin(elapsedTime * 1.5 + i) * 1.5 + sat.yOffset;

        sat.mesh.position.set(x, y, z);
        sat.mesh.rotation.x = elapsedTime * 1.2;
        sat.mesh.rotation.y = elapsedTime * 0.8;

        // Update line from center to satellite
        const points = [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(x, y, z)
        ];
        lines[i].geometry.setFromPoints(points);
      });

      // Subtle particle oscillation
      const posAttr = particleGeometry.attributes.position;
      const posArray = posAttr.array;
      for (let i = 0; i < particleCount; i += 4) {
        const i3 = i * 3;
        posArray[i3 + 1] = particleOriginals[i3 + 1] + Math.sin(elapsedTime * 1.8 + particleOriginals[i3]) * 0.4;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreWireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    />
  );
}

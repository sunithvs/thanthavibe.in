"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for subtle parallax effect
  useEffect(() => {
    let frameId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    };
    
    const smoothMousePosition = () => {
      // Very gentle smoothing for natural movement
      const smoothingFactor = 0.02;
      currentX += (targetX - currentX) * smoothingFactor;
      currentY += (targetY - currentY) * smoothingFactor;
      
      setMousePosition({ x: currentX, y: currentY });
      frameId = requestAnimationFrame(smoothMousePosition);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    frameId = requestAnimationFrame(smoothMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Simplified confetti animation variants with more noticeable movement
  const confettiVariants = {
    initial: { opacity: 0.7 },
    animate: (i: number) => {
      // Create more subtle, natural movement
      const baseSpeed = 20 + (i % 8) * 3; // Slower, more varied speeds
      const amplitude = 3 + (i % 5) * 2; // Smaller, more subtle movements
      
      // Unique movement for each confetti piece with more randomness
      const pattern = i % 5;
      let xMovement, yMovement, rotateMovement;
      
      switch(pattern) {
        case 0: // Gentle float
          xMovement = [0, amplitude/3, -amplitude/4, 0];
          yMovement = [0, -amplitude/2, -amplitude/3, 0];
          rotateMovement = [0, 0.8, -0.5, 0];
          break;
        case 1: // Subtle drift
          xMovement = [0, amplitude/2, amplitude/3, 0];
          yMovement = [0, -amplitude/3, -amplitude/2, 0];
          rotateMovement = [0, -0.6, 0.4, 0];
          break;
        case 2: // Bobbing motion
          xMovement = [0, -amplitude/3, amplitude/4, 0];
          yMovement = [0, -amplitude*0.4, -amplitude/3, 0];
          rotateMovement = [0, 0.5, -0.3, 0];
          break;
        case 3: // Diagonal drift
          xMovement = [0, amplitude*0.4, amplitude*0.2, 0];
          yMovement = [0, -amplitude*0.3, -amplitude*0.5, 0];
          rotateMovement = [0, 0.7, -0.4, 0];
          break;
        default: // Gentle sway
          xMovement = [0, amplitude/4, -amplitude/3, 0];
          yMovement = [0, -amplitude/4, -amplitude*0.3, 0];
          rotateMovement = [0, 0.4, -0.3, 0];
      }
      
      return {
        opacity: [0.7, 0.8, 0.75, 0.7], // More subtle opacity change
        y: yMovement,
        x: xMovement,
        rotate: rotateMovement,
        transition: {
          duration: baseSpeed,
          repeat: Infinity,
          repeatType: "mirror" as const,
          ease: "easeInOut",
          delay: i * 0.7, // More staggered effect
        }
      };
    }
  };

  // Define confetti colors with reduced opacity
  const confettiColors = {
    purple: "rgba(118, 7, 210, 0.6)",
    lightPurple: "rgba(237, 210, 242, 0.7)",
    pink: "rgba(254, 52, 167, 0.6)",
    green: "rgba(219, 254, 152, 0.7)",
    yellow: "rgba(255, 207, 0, 0.6)"
  };

  // Create more confetti with wider spread
  const topRightConfetti = [
    { d: "M2201.89,1087.33l1.455,95.893l23.425,-33.979l60.916,34.732", color: confettiColors.purple, translateX: -120, translateY: -80, scale: 0.6 },
    { d: "M2339.84,1153.8l1.455,-95.893l23.425,33.979l60.917,-34.733", color: confettiColors.purple, translateX: 50, translateY: -150, scale: 0.5 },
    { d: "M2573.49,1286.57l-11.521,-70.214l-23.424,33.979l-60.917,-34.732", color: confettiColors.purple, translateX: -200, translateY: 100, scale: 0.7 },
    { d: "M2440.72,1337.34l-1.455,95.893l-23.425,-33.979l-60.917,34.732", color: confettiColors.purple, translateX: 150, translateY: 50, scale: 0.5 },
    { d: "M2364.72,1119.53l101.414,46.361l7.559,-56.051l55.39,-0.449l45.197,-102.102", color: confettiColors.lightPurple, translateX: -180, translateY: -200, scale: 0.6 },
    { d: "M2538.54,1277.98l-101.414,46.36l-7.56,-56.051l-55.389,-0.449l-45.197,-102.101", color: confettiColors.lightPurple, translateX: 100, translateY: 180, scale: 0.5 },
    { d: "M2086.35,1142.53l-0.15,-43.701l40.295,33.208l16.405,-38.343l-62.56,-35.369l-57.359,56.144l16.331,40.061", color: confettiColors.pink, translateX: -250, translateY: -120, scale: 0.6 },
    { d: "M2142.89,1178.92l14.401,-24.384l36.684,88.159l22.722,-18.92l15.76,-29.246l13.276,54.956l-69.138,34.428", color: confettiColors.green, translateX: 200, translateY: -50, scale: 0.5 },
    { d: "M2070.31,1154.53l-32.134,49.37l45.115,-26.095l0,47.665l21.695,-59.723l38.51,92.037l13.802,-62.597", color: confettiColors.yellow, translateX: -150, translateY: 150, scale: 0.6 },
    // Additional confetti with different positions
    { d: "M2201.89,1087.33l1.455,95.893l23.425,-33.979l60.916,34.732", color: confettiColors.lightPurple, translateX: 250, translateY: -100, scale: 0.4 },
    { d: "M2339.84,1153.8l1.455,-95.893l23.425,33.979l60.917,-34.733", color: confettiColors.green, translateX: -100, translateY: -150, scale: 0.5 },
    { d: "M2573.49,1286.57l-11.521,-70.214l-23.424,33.979l-60.917,-34.732", color: confettiColors.yellow, translateX: 180, translateY: 120, scale: 0.4 }
  ];

  const bottomLeftConfetti = [
    { d: "M115.965,-21.117l1.314,86.582l21.15,-30.68l55.001,31.36", color: confettiColors.purple, translateX: 120, translateY: 80, scale: 0.6 },
    { d: "M226.748,693.818l1.314,-86.582l21.15,30.68l55.002,-31.36", color: confettiColors.purple, translateX: -50, translateY: 150, scale: 0.5 },
    { d: "M249.212,662.879l91.567,41.858l6.825,-50.608l50.011,-0.405l40.808,-92.188", color: confettiColors.lightPurple, translateX: 200, translateY: -100, scale: 0.7 },
    { d: "M122.426,643.972l-0.136,39.457l36.383,-29.983l14.812,34.62l-56.486,31.934l-51.789,-50.693l14.745,-36.17", color: confettiColors.pink, translateX: -150, translateY: -50, scale: 0.5 },
    { d: "M62.701,61.581l13.003,-22.017l33.122,79.599l20.515,-17.083l14.23,-26.406l11.987,49.619l-62.425,31.085", color: confettiColors.green, translateX: 180, translateY: 200, scale: 0.6 },
    { d: "-2.837,39.564l-29.014,44.576l40.734,-23.561l0,43.036l19.589,-53.923l34.77,83.101l12.462,-56.52", color: confettiColors.yellow, translateX: -100, translateY: -180, scale: 0.5 },
    // Additional confetti with different positions
    { d: "M115.965,-21.117l1.314,86.582l21.15,-30.68l55.001,31.36", color: confettiColors.green, translateX: -150, translateY: 100, scale: 0.4 },
    { d: "M226.748,693.818l1.314,-86.582l21.15,30.68l55.002,-31.36", color: confettiColors.yellow, translateX: 100, translateY: 150, scale: 0.5 },
    { d: "M249.212,662.879l91.567,41.858l6.825,-50.608l50.011,-0.405l40.808,-92.188", color: confettiColors.pink, translateX: -80, translateY: -120, scale: 0.4 }
  ];

  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: "url('/thantha_vibe_bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative"
        }}
      >
        {/* Animated confetti overlay */}
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 2560 1440" 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none"
          }}
        >
          {/* Top right confetti */}
          <g style={{ 
            transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)`,
            transition: 'transform 2s cubic-bezier(0.2, 0.1, 0.1, 1)'
          }}>
            {topRightConfetti.map((confetti, index) => (
              <motion.path 
                key={`top-right-${index}`}
                d={confetti.d}
                style={{ 
                  fill: "none", 
                  stroke: confetti.color,
                  strokeWidth: "6px",
                  transform: `translate(${confetti.translateX}px, ${confetti.translateY}px) scale(${confetti.scale})`
                }}
                variants={confettiVariants}
                initial="initial"
                animate="animate"
                custom={index}
              />
            ))}
          </g>

          {/* Bottom left confetti */}
          <g style={{ 
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            transition: 'transform 2s cubic-bezier(0.2, 0.1, 0.1, 1)'
          }}>
            {bottomLeftConfetti.map((confetti, index) => (
              <motion.path 
                key={`bottom-left-${index}`}
                d={confetti.d}
                style={{ 
                  fill: "none", 
                  stroke: confetti.color,
                  strokeWidth: "6px",
                  transform: `translate(${confetti.translateX}px, ${confetti.translateY}px) scale(${confetti.scale})`
                }}
                variants={confettiVariants}
                initial="initial"
                animate="animate"
                custom={index + 15} // Increased offset for more staggering
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground; 
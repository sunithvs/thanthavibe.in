'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedThanthaVibe() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    console.log("AnimatedThanthaVibe component mounted");
    
    if (!svgRef.current) return;

    // Get references to elements we want to animate
    const wheelLeft = svgRef.current.getElementById('wheel-left');
    const wheelRight = svgRef.current.getElementById('wheel-right');

    // Wheel rotation animation - rotate from center of each wheel
    if (wheelLeft) {
      // Cast to SVGElement to access style property
      const wheelLeftSVG = wheelLeft as SVGElement;
      wheelLeftSVG.style.transformBox = 'fill-box';
      wheelLeftSVG.style.transformOrigin = 'center';
      
      wheelLeft.animate(
        [
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(360deg)' }
        ],
        {
          duration: 10000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    }

    if (wheelRight) {
      // Cast to SVGElement to access style property
      const wheelRightSVG = wheelRight as SVGElement;
      wheelRightSVG.style.transformBox = 'fill-box';
      wheelRightSVG.style.transformOrigin = 'center';
      
      wheelRight.animate(
        [
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(360deg)' }
        ],
        {
          duration: 10000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    }
  }, []);

  // Container animation variants - more organic movement
  const containerVariants = {
    initial: {
      scale: 0.995,
    },
    animate: {
      scale: [0.995, 1.005, 0.998, 1.003, 0.995],
      y: [0, -3, 1, -2, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: [0.33, 1, 0.68, 1], // cubic-bezier easing for more natural motion
        times: [0, 0.25, 0.5, 0.75, 1] // control timing of keyframes
      }
    }
  };

  // SVG glow animation variants - subtle pulsing
  const svgVariants = {
    initial: {
      filter: "drop-shadow(0px 0px 0px rgba(145, 38, 214, 0.2))",
    },
    animate: {
      filter: [
        "drop-shadow(0px 0px 0px rgba(145, 38, 214, 0.2))",
        "drop-shadow(0px 0px 8px rgba(145, 38, 214, 0.5))",
        "drop-shadow(0px 0px 4px rgba(145, 38, 214, 0.3))",
        "drop-shadow(0px 0px 10px rgba(145, 38, 214, 0.6))",
        "drop-shadow(0px 0px 0px rgba(145, 38, 214, 0.2))"
      ],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
        times: [0, 0.3, 0.5, 0.7, 1] // non-linear timing for more natural effect
      }
    }
  };

  // Body animation variants - organic color shifts
  const bodyVariants = {
    initial: {
      fill: "#9126d6",
    },
    animate: {
      fill: ["#9126d6", "#9e35e0", "#8a20c8", "#a53de8", "#9126d6"],
      filter: [
        "brightness(1)",
        "brightness(1.05)",
        "brightness(0.98)",
        "brightness(1.03)",
        "brightness(1)"
      ],
      transition: {
        duration: 9,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: [0.43, 0.13, 0.23, 0.96], // custom easing for organic movement
        times: [0, 0.2, 0.5, 0.8, 1] // non-uniform timing for natural feel
      }
    }
  };

  return (
    <div className="w-full h-[calc(100vh-2rem)] flex items-center justify-center">
      <motion.div 
        className="w-[90%] max-w-[1200px] min-h-[600px] flex items-center justify-center relative"
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        <motion.svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox="0 0 1962 1118"
          preserveAspectRatio="xMidYMid meet"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ 
            fillRule: 'evenodd', 
            clipRule: 'evenodd', 
            strokeLinejoin: 'round', 
            strokeMiterlimit: 2,
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
          variants={svgVariants}
        >
          <g>
            <motion.path
              id="body"
              d="M1911.33,0c13.713,0 26.824,5.632 36.265,15.578c9.44,9.946 14.382,23.332 13.668,37.027c-9.819,188.232 -43.118,826.604 -52.489,1006.26c-1.386,26.566 -23.33,47.396 -49.932,47.396l-1756.35,0c-26.602,0 -48.547,-20.83 -49.932,-47.396c-9.372,-179.653 -42.67,-818.025 -52.489,-1006.26c-0.714,-13.695 4.227,-27.081 13.668,-37.027c9.44,-9.946 22.551,-15.578 36.264,-15.578l1861.33,0l-0.003,-0Z"
              variants={bodyVariants}
            />
            <g id="bottom-tape">
              <path d="M1468.31,1117.91l-975.269,0l76.285,-232.433l822.698,0l76.286,232.433Z" style={{ fill: '#5b0493' }} />
              <path d="M493.033,1117.91l76.285,-232.433l-14.453,-11.528l-76.286,232.432l14.454,11.529Z" style={{ fill: '#401161' }} />
              <path d="M1468.41,1117.91l-76.286,-232.433l14.454,-11.528l76.285,232.432l-14.453,11.529Z" style={{ fill: '#401161' }} />
              <path d="M554.865,873.948l851.713,0l-14.454,11.857l-822.806,-0.329l-14.453,-11.528Z" style={{ fill: '#b26ae6' }} />
            </g>
            <g id="thantha-vibe-bg">
              <path
                d="M1838.78,57.173c13.674,0 26.752,5.601 36.188,15.498c9.436,9.897 14.407,23.226 13.755,36.885c-6.868,143.944 -25.953,543.966 -32.543,682.076c-1.272,26.657 -23.255,47.617 -49.943,47.617l-1665.56,0c-26.688,0 -48.671,-20.96 -49.943,-47.617c-6.589,-138.11 -25.675,-538.132 -32.543,-682.076c-0.651,-13.659 4.319,-26.988 13.755,-36.885c9.436,-9.897 22.514,-15.498 36.188,-15.498l1730.65,-0Z"
                style={{ fill: 'url(#_Linear1)' }}
              />
              <path
                d="M1820,85.515c13.514,0 26.452,5.47 35.868,15.164c9.415,9.695 14.505,22.787 14.11,36.296c-4.013,137.373 -14.939,511.368 -18.853,645.322c-0.79,27.034 -22.933,48.54 -49.979,48.54l-1655.37,0c-27.046,0 -49.189,-21.506 -49.979,-48.54c-3.913,-133.954 -14.84,-507.949 -18.853,-645.322c-0.395,-13.509 4.695,-26.601 14.111,-36.296c9.415,-9.694 22.354,-15.164 35.868,-15.164l1693.08,0l-0.003,-0Z"
                style={{ fill: 'url(#_Linear2)' }}
              />
            </g>
            <g id="thantha-vibe-text">
              <path
                d="M1763.28,830.837l-220.054,0l-0,-508.551l322.464,-38.687l-4.92,168.406l-97.49,9.355l-0,156.793l92.835,-6.796l-4.664,159.657l-88.171,4.443l-0,55.38Zm-306.911,0l-215.732,0l-7.893,-40.432l-60.633,-8.505l-0,48.937l-220.054,0l-0,-437.627l219.531,-26.338l157.593,-4.072l86.506,50.684c29.033,37.263 32.93,102.77 32.93,144.848l-23.26,98.161l-91.733,47.71c34.3,4.883 80.244,16.056 103.493,46.575l19.252,80.059Zm-592.648,0l-220.054,0l-0,-400.629l220.054,-26.4l-0,427.029Zm-322.087,0l-208.814,0l25.978,-244.051l15.158,-124.22l232.077,-27.843l-64.399,396.114Zm-231.011,0l-164.851,0c-27.046,0 -49.189,-21.506 -49.979,-48.54l-8.337,-285.358l177.78,-21.329l45.387,355.227Zm861.488,-334.691l-0,168.091l21.953,-2.067l41.293,-17.391l8.886,-83.078l-7.318,-49.594l-19.078,-16.277l-45.736,0.316Z"
                style={{ fill: 'url(#_Linear3)' }}
              />
              <path
                d="M1866.33,261.759l-57.886,6.72l-5.387,-34.738l-38.738,3.689l-6.414,36.917l-111.853,12.986l51.54,-201.818l122.409,0c13.513,0.001 26.45,5.471 35.865,15.164c9.415,9.695 14.505,22.787 14.11,36.296l-3.646,124.784Zm-66.352,-62.666l-16.418,-82.238l-20.524,84.996l36.942,-2.758Zm-172.65,-113.578l-0,203.992l-108.005,12.539l-0,-96.472l-32.324,2.176l-0,98.049l-108.005,12.539l-0,-232.823l108.005,0l-0,70.327l32.324,-1.342l-0,-68.985l108.005,0Zm-272.97,0l-0,36.641l-64.136,1.49l-0,204.998l-108.005,12.539l-0,-215.028l-63.88,1.484l-0,-42.124l236.021,0Zm-260.9,0l-0,265.973l-94.665,10.991l-56.183,-128.333l-0,134.855l-90.303,10.485l-0,-293.971l96.412,0l54.435,117.249l-0,-117.249l90.304,0Zm-1016.08,66.31l-0.434,-14.85c-0.395,-13.509 4.695,-26.601 14.111,-36.296c9.415,-9.694 22.354,-15.164 35.868,-15.164l142.26,0l-0,61.854l-64.135,1.49l-0,305.773l-108.005,12.539l-0,-315.803l-19.665,0.457Zm464.768,-66.31l-0,329.98l-108.005,12.539l-0,-149.389l-32.324,2.177l-0,150.965l-108.005,12.539l-0,-358.811l108.005,0l-0,115.384l32.324,-1.342l-0,-114.042l108.005,0Zm232.493,0l59.197,296.115l-110.57,12.837l-5.387,-57.383l-38.739,3.689l-6.413,59.562l-111.853,12.986l52.781,-327.806l160.984,0Zm-59.839,194.587l-16.419,-135.077l-20.523,137.835l36.942,-2.758Z"
                style={{ fill: 'url(#_Linear4)' }}
              />
            </g>
            <g id="wheels">
              <g id="wheel-right">
                <circle cx="401.119" cy="625.408" r="126.831" style={{ fill: '#690da4' }} />
                <path
                  d="M401.119,516.039c60.362,0 109.369,49.006 109.369,109.369c-0,60.362 -49.007,109.368 -109.369,109.368c-60.362,0 -109.368,-49.006 -109.368,-109.368c-0,-60.363 49.006,-109.369 109.368,-109.369Zm11.588,23.31l-11.588,27.977l-11.588,-27.977l-41.07,17.012l11.588,27.976l-27.976,-11.588l-17.012,41.07l27.976,11.589l-27.976,11.588l17.012,41.07l27.976,-11.588l-11.588,27.976l41.07,17.012l11.588,-27.976l11.588,27.976l41.071,-17.012l-11.588,-27.976l27.976,11.588l17.012,-41.07l-27.977,-11.588l27.977,-11.589l-17.012,-41.07l-27.976,11.588l11.588,-27.976l-41.071,-17.012Z"
                  style={{ fill: '#fbf4ee' }}
                />
                <path
                  d="M401.119,537.289c48.634,0 88.119,39.484 88.119,88.119c-0,48.634 -39.485,88.118 -88.119,88.118c-48.634,0 -88.119,-39.484 -88.119,-88.118c-0,-48.635 39.485,-88.119 88.119,-88.119Zm9.337,18.781l-9.337,22.54l-9.336,-22.54l-33.091,13.706l9.337,22.541l-22.541,-9.337l-13.707,33.091l22.541,9.337l-22.541,9.336l13.707,33.091l22.541,-9.337l-9.337,22.541l33.091,13.706l9.336,-22.54l9.337,22.54l33.091,-13.706l-9.337,-22.541l22.541,9.337l13.706,-33.091l-22.541,-9.336l22.541,-9.337l-13.706,-33.091l-22.54,9.337l9.336,-22.541l-33.09,-13.706Z"
                  style={{ fill: '#fbf4ee' }}
                />
                <path
                  d="M401.119,533.539c50.704,0 91.869,41.165 91.869,91.869c-0,50.703 -41.165,91.868 -91.869,91.868c-50.704,0 -91.869,-41.165 -91.869,-91.868c-0,-50.704 41.165,-91.869 91.869,-91.869Zm-0,3.75c-48.634,-0 -88.119,39.484 -88.119,88.119c-0,48.634 39.485,88.118 88.119,88.118c48.634,0 88.119,-39.484 88.119,-88.118c-0,-48.635 -39.485,-88.119 -88.119,-88.119Zm9.337,18.781l33.091,13.706l-9.337,22.541l22.541,-9.337l13.706,33.091l-22.541,9.337l22.541,9.336l-13.706,33.091l-22.541,-9.337l9.337,22.541l-33.091,13.706l-9.337,-22.54l-9.336,22.54l-33.091,-13.706l9.337,-22.541l-22.541,9.337l-13.707,-33.091l22.541,-9.336l-22.541,-9.337l13.707,-33.091l22.541,9.337l-9.337,-22.541l33.09,-13.706l9.337,22.54l9.337,-22.54Zm2.029,4.899l-7.901,19.077l-6.929,-0l-7.902,-19.077l-26.161,10.837l7.901,19.076l-4.899,4.9l-19.076,-7.902l-10.837,26.161l19.076,7.902l-0,6.929l-19.076,7.902l10.837,26.161l19.076,-7.901l4.899,4.899l-7.901,19.076l26.161,10.837l7.902,-19.076l6.929,0l7.901,19.076l26.162,-10.837l-7.902,-19.076l4.9,-4.899l19.076,7.901l10.837,-26.161l-19.076,-7.902l-0,-6.929l19.076,-7.902l-10.837,-26.161l-19.076,7.902l-4.9,-4.9l7.902,-19.076l-26.162,-10.837Z"
                  style={{ fill: 'url(#_Linear5)' }}
                />
              </g>
              <g id="wheel-left">
                <circle cx="1563.16" cy="625.408" r="126.831" style={{ fill: '#660ba1' }} />
                <path
                  d="M1563.16,516.039c60.362,0 109.369,49.006 109.369,109.369c-0,60.362 -49.007,109.368 -109.369,109.368c-60.362,0 -109.368,-49.006 -109.368,-109.368c-0,-60.363 49.006,-109.369 109.368,-109.369Zm11.588,23.31l-11.588,27.977l-11.588,-27.977l-41.07,17.012l11.588,27.976l-27.976,-11.588l-17.012,41.07l27.976,11.589l-27.976,11.588l17.012,41.07l27.976,-11.588l-11.588,27.976l41.07,17.012l11.588,-27.976l11.588,27.976l41.071,-17.012l-11.589,-27.976l27.977,11.588l17.011,-41.07l-27.976,-11.588l27.976,-11.589l-17.011,-41.07l-27.977,11.588l11.589,-27.976l-41.071,-17.012Z"
                  style={{ fill: '#fbf4ee' }}
                />
                <path
                  d="M1563.16,537.289c48.634,0 88.119,39.484 88.119,88.119c-0,48.634 -39.485,88.118 -88.119,88.118c-48.634,0 -88.119,-39.484 -88.119,-88.118c-0,-48.635 39.485,-88.119 88.119,-88.119Zm9.337,18.781l-9.337,22.54l-9.337,-22.54l-33.09,13.706l9.337,22.541l-22.541,-9.337l-13.707,33.091l22.541,9.337l-22.541,9.336l13.707,33.091l22.541,-9.337l-9.337,22.541l33.09,13.706l9.337,-22.54l9.337,22.54l33.09,-13.706l-9.337,-22.541l22.541,9.337l13.706,-33.091l-22.541,-9.336l22.541,-9.337l-13.707,-33.091l-22.54,9.337l9.336,-22.541l-33.09,-13.706Z"
                  style={{ fill: '#fbf4ee' }}
                />
                <path
                  d="M1563.16,533.539c50.704,0 91.869,41.165 91.869,91.869c-0,50.703 -41.165,91.868 -91.869,91.868c-50.704,0 -91.869,-41.165 -91.869,-91.868c-0,-50.704 41.165,-91.869 91.869,-91.869Zm-0,3.75c-48.634,-0 -88.119,39.484 -88.119,88.119c-0,48.634 39.485,88.118 88.119,88.118c48.634,0 88.119,-39.484 88.119,-88.118c-0,-48.635 -39.485,-88.119 -88.119,-88.119Zm9.337,18.781l33.09,13.706l-9.337,22.541l22.54,-9.337l13.707,33.091l-22.541,9.337l22.541,9.336l-13.707,33.091l-22.54,-9.337l9.336,22.541l-33.09,13.706l-9.337,-22.54l-9.337,22.54l-33.09,-13.706l9.337,-22.541l-22.541,9.337l-13.707,-33.091l22.541,-9.336l-22.541,-9.337l13.707,-33.091l22.541,9.337l-9.337,-22.541l33.09,-13.706l9.337,22.54l9.337,-22.54Zm2.029,4.899l-7.901,19.077l-6.929,-0l-7.902,-19.077l-26.161,10.837l7.901,19.076l-4.899,4.9l-19.076,-7.902l-10.837,26.161l19.076,7.902l-0,6.929l-19.076,7.902l10.837,26.161l19.076,-7.901l4.899,4.899l-7.901,19.076l26.161,10.837l7.902,-19.076l6.929,0l7.901,19.076l26.162,-10.837l-7.902,-19.076l4.9,-4.899l19.076,7.901l10.837,-26.161l-19.076,-7.902l-0,-6.929l19.076,-7.902l-10.837,-26.161l-19.076,7.902l-4.9,-4.9l7.902,-19.076l-26.162,-10.837Z"
                  style={{ fill: 'url(#_Linear6)' }}
                />
              </g>
            </g>
            <g id="screws">
              <circle cx="146.699" cy="1023.85" r="33.141" style={{ fill: 'url(#_Linear7)' }} />
              <circle cx="43.585" cy="44.887" r="33.141" style={{ fill: 'url(#_Linear8)' }} />
              <circle cx="1807.99" cy="1023.85" r="33.141" style={{ fill: 'url(#_Linear9)' }} />
              <circle cx="1914.69" cy="44.887" r="33.141" style={{ fill: 'url(#_Linear10)' }} />
            </g>
          </g>
          <defs>
            <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(141.25,750.048,-750.048,141.25,678.59,6.25278e-13)">
              <stop offset="0" style={{ stopColor: '#552680', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#b26ae6', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(234.465,922.401,-922.401,234.465,646.348,-116.28)">
              <stop offset="0" style={{ stopColor: '#9126d6', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#5b0493', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="_Linear3" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-2.18552e-13,361.302,-361.302,-2.18552e-13,952.058,640.391)">
              <stop offset="0" style={{ stopColor: '#fff', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#bf7bef', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="_Linear4" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(317.43,317.269,-317.269,317.43,919.048,32.2935)">
              <stop offset="0" style={{ stopColor: '#fff200', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#ef519d', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="_Linear5" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(128.644,163.723,-163.723,128.644,317.74,537.289)">
              <stop offset="0" style={{ stopColor: '#240039', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#fbf4ee', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="_Linear6" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(106.3,153.247,-153.247,106.3,1502.12,547.765)">
              <stop offset="0" style={{ stopColor: '#442454', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#fbf4ee', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="_Linear7" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(58.0101,106.08,-106.08,58.0101,121.83,967.268)">
              <stop offset="0" style={{ stopColor: '#b26ae6', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#fff', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="_Linear8" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(58.0101,106.08,-106.08,58.0101,18.716,-11.6944)">
              <stop offset="0" style={{ stopColor: '#b26ae6', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#fff', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="_Linear9" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(58.0101,106.08,-106.08,58.0101,1783.12,967.268)">
              <stop offset="0" style={{ stopColor: '#b26ae6', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#fff', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="_Linear10" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(58.0101,106.08,-106.08,58.0101,1889.82,-11.6944)">
              <stop offset="0" style={{ stopColor: '#b26ae6', stopOpacity: 1 }} />
              <stop offset="1" style={{ stopColor: '#fff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
} 
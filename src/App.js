import React, { useState, useEffect } from 'react';
import * as BABYLON from 'babylonjs';

const App = () => {
  const [engine, setEngine] = useState(null); // State for Babylon.js engine
  const [scene, setScene] = useState(null);   // State for Babylon.js scene

  useEffect(() => {
    let canvas = document.getElementById('renderCanvas');
    if (!canvas) {
      canvas = recreateCanvas(); // Create canvas if not found
    }

    const initializeEngine = async () => {
      try {
        if (engine) {
          console.warn('Disposing previous engine...');
          engine.dispose();
          setEngine(null);
        }

        // Clear WebGPU context
        const webgpuContext = canvas.getContext('webgpu');
        if (webgpuContext) {
          webgpuContext.unconfigure();
          console.log('Cleared WebGPU context.');
        }

        const newEngine = new BABYLON.WebGPUEngine(canvas);
        await newEngine.initAsync();
        setEngine(newEngine);

        const newScene = createScene(newEngine, canvas);
        setScene(newScene);
        console.log('WebGPU engine and scene initialized.');
      } catch (error) {
        console.error('Error initializing Babylon.js engine:', error);
      }
    };

    if (!engine) {
      initializeEngine();
    }

    const handleResize = () => {
      if (engine) {
        engine.resize(); // Dynamically resize canvas
        adjustCanvasSize(canvas); // Ensure canvas matches browser size
      }
    };

    window.addEventListener('resize', handleResize);
    adjustCanvasSize(canvas); // Initial adjustment on load

    return () => {
      // Cleanup on unmount
      if (scene) {
        scene.dispose();
        setScene(null);
      }

      if (engine) {
        engine.dispose();
        setEngine(null);
      }

      const oldCanvas = document.getElementById('renderCanvas');
      if (oldCanvas) {
        oldCanvas.parentNode.removeChild(oldCanvas);
      }

      window.removeEventListener('resize', handleResize); // Cleanup resize listener
    };
  }, []); // Only run once on mount

  const recreateCanvas = () => {
    const existingCanvas = document.getElementById('renderCanvas');
    if (existingCanvas) {
      existingCanvas.parentNode.removeChild(existingCanvas);
    }

    const newCanvas = document.createElement('canvas');
    newCanvas.id = 'renderCanvas';
    newCanvas.style.position = 'absolute';
    newCanvas.style.top = '0';
    newCanvas.style.left = '0';
    newCanvas.style.width = '100%';
    newCanvas.style.height = '100%';
    document.body.appendChild(newCanvas);
    return newCanvas;
  };

  const adjustCanvasSize = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const createScene = (engine, canvas) => {
    const newScene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera(
      'Camera',
      Math.PI / 2,
      Math.PI / 4,
      4,
      BABYLON.Vector3.Zero(),
      newScene
    );
    camera.attachControl(canvas, true);

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), newScene);
    BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 2 }, newScene);

    engine.runRenderLoop(() => {
      newScene.render();
    });

    return newScene;
  };

  return <canvas id="renderCanvas" />;
};

export default App;

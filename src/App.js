import React, { useEffect, useRef } from 'react';
import { Engine, Scene, ArcRotateCamera, Vector3 } from '@babylonjs/core';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const engine = new Engine(canvasRef.current, true, {
        adaptToDeviceRatio: true,
        disableWebGL2Support: false,
      });

      const scene = new Scene(engine);

      // Adding a camera to the scene
      const camera = new ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 4, 10, Vector3.Zero(), scene);
      camera.attachControl(canvasRef.current, true);

      // Add light, mesh, or other elements if needed
      
      engine.runRenderLoop(() => {
        scene.render();
      });

      window.addEventListener('resize', () => {
        engine.resize();
      });

      return () => {
        engine.dispose();
      };
    }
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />
      <Homepage />
    </div>
  );
}

export default App;

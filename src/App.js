import React from 'react';
import * as BABYLON from 'babylonjs';

const App = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('renderCanvas');
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = () => {
      const scene = new BABYLON.Scene(engine);
      const camera = new BABYLON.ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvas, true);
      const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene);
      const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene);
      return scene;
    };

    const scene = createScene();
    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener('resize', () => {
      engine.resize();
    });

    return () => {
      engine.dispose();
    };
  }, []);

  return <canvas id="renderCanvas" style={{ width: '100%', height: '100vh' }}></canvas>;
};

export default App;


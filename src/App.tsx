import React, { useState, useCallback } from "react";
import Canvas from "./components/Canvas";
import Toolbar from "./components/Toolbar";
import * as fabric from "fabric";

const App: React.FC = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  // useCallbackで新しい関数が作られるのを防ぐため
  const handleCanvasReady = useCallback((newCanvas: fabric.Canvas) => {
    console.log("Canvas Initialized:", newCanvas);
    setCanvas(newCanvas);
  }, []);

  return (
    <div style={{ textAlign: "center", background: "#ddd", padding: "20px" }}>
      <Toolbar canvas={canvas} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Canvas onCanvasReady={handleCanvasReady} />
      </div>
    </div>
  );
};

export default App;

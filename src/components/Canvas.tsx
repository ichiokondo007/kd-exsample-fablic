import React, { useEffect, useRef } from "react";
import * as fabric from "fabric";

const Canvas: React.FC<{ onCanvasReady: (canvas: fabric.Canvas) => void }> = ({ onCanvasReady }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "white", // ✅ 初期状態から白にする
      selection: true
    });

    canvas.renderAll(); // ✅ すぐに背景を反映
    onCanvasReady(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} width={800} height={500} style={{ border: "1px solid gray" }} />;
};

export default Canvas;

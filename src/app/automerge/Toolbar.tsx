import React, { useState } from "react";
import * as fabric from "fabric";

interface ToolbarProps {
  canvas: fabric.Canvas | null;
}

const Toolbar: React.FC<ToolbarProps> = ({ canvas }) => {
  const [selectedColor, setSelectedColor] = useState<string>("#000000");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);

    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject && "set" in activeObject) {
        activeObject.set("fill", event.target.value);
        canvas.renderAll();
      }
    }
  };

  const addCircle = () => {
    if (!canvas) return;
    const circle = new fabric.Circle({
      radius: 40,
      fill: selectedColor,
      left: 100,
      top: 50
    });
    canvas.add(circle);
    canvas.renderAll();
  };

  const deleteSelectedObject = () => {
    if (!canvas) return;
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.remove(activeObject);
      canvas.discardActiveObject();
      canvas.renderAll();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px", padding: "10px", background: "#ddd" }}> {/* ✅ 背景をグレーにする */}
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <button onClick={addCircle}>Add a Circle</button>
      <button onClick={deleteSelectedObject}>Delete</button>
    </div>
  );
};

export default Toolbar;

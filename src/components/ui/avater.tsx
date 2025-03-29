import React, { useState, CSSProperties } from "react";

export interface InitialAvatarProps {
  username: string;
  size?: number;
  backgroundColor?: string;
}

export const InitialAvatar: React.FC<InitialAvatarProps> = ({
  username,
  size = 55,
  backgroundColor = "#3498db",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const initial = username ? username.substring(0, 2).toUpperCase() : "?";

  const avatarStyle: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: backgroundColor,
    fontSize: `${size / 2}px`,
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    position: "relative",
    cursor: "pointer",
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + window.scrollY - 5,
      left: rect.left + window.scrollX + rect.width / 2 - 20,
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltip = showTooltip ? (
    <div
      style={{
        position: "absolute",
        top: `${tooltipPosition.top}px`,
        left: `${tooltipPosition.left}px`,
        transform: "translateX(-50%)",
        backgroundColor: "black",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "16px",
        whiteSpace: "nowrap",
        zIndex: 999,
        opacity: 1,
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      {username}
    </div>
  ) : null;

  return (
    <>
      <div
        className="avatar"
        style={avatarStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {initial}
      </div>
      {tooltip}
    </>
  );
};
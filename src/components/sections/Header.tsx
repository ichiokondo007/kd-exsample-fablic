import React, { useState, CSSProperties, useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { TitleContext } from "../../app/Layout";
import "../../styles.css";
import Dropdown from "../ui/Dropdown"; // Dropdownをインポート

interface InitialAvatarProps {
  username: string;
  size?: number;
  backgroundColor?: string;
}

const InitialAvatar: React.FC<InitialAvatarProps> = ({
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
      top: rect.top - 5,
      left: rect.left + rect.width / 2,
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
      {ReactDOM.createPortal(tooltip, document.body)}
    </>
  );
};

const Header: React.FC = () => {
  const { title, setTitle } = useContext(TitleContext);
  const navigate = useNavigate();

  const handleSelect = (selectedTitle: string) => {
    switch (selectedTitle) {
      case "TOP":
        setTitle("Top");
        navigate("/top");
        break;
      case "CanvasList":
        setTitle("CanvasList");
        navigate("/CanvasListPage");
        break;
      case "OTHERS":
        setTitle("Others");
        navigate("/others");
        break;
      case "LOGOFF":
        sessionStorage.clear();
        setTitle("");
        navigate("/");
        break;
      default:
        break;
    }
  };

  const sessionData = sessionStorage.getItem("kdlogininfo");
  let username = "?";
  let backgroundColor = "#3498db";

  if (sessionData) {
    const [storedUsername, storedColor] = JSON.parse(sessionData);
    username = storedUsername || "?";
    backgroundColor = storedColor || "#3498db";
  }

  return (
    <header className="header">
      <div className="header__inner">
        <img className="header__logo" src="./kd5_white.svg" alt="KD5 Logo" />
        <nav className="header__navgroup">
          <button
            onClick={() => handleSelect("TOP")}
            className="header__navitem"
          >
            TOP
          </button>
          <Dropdown
            buttonLabel="AUTOMERGE"
            options={[
              { label: "1-CANVAS-LIST", value: "CanvasList" },
              { label: "2-Input-test", value: "inputtest" },
            ]}
            onSelect={(value) => handleSelect(value)}
          />
          <button
            onClick={() => handleSelect("OTHERS")}
            className="header__navitem"
          >
            OTHERS
          </button>
          <button
            onClick={() => handleSelect("LOGOFF")}
            className="header__navitem"
          >
            LOGOFF
          </button>
          <InitialAvatar username={username} backgroundColor={backgroundColor} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
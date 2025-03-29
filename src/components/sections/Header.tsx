import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TitleContext } from "../../app/Layout";
import "../../styles.css";
import Dropdown from "../ui/Dropdown";
import { InitialAvatar } from "../ui/avater";

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
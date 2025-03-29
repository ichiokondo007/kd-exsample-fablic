import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TitleContext } from "../../app/Layout";
import "../../styles.css";
import Dropdown from "../ui/Dropdown";
import { InitialAvatar } from "../ui/avater";
import { getTitleObjectByKey, MenuKey, TOP, TOPPATH, CanvasList, InputFormTest, OTHERS, loginsessionName, LoginInfo } from "../../lib/commonType";

const Header: React.FC = () => {
  const { setTitle } = useContext(TitleContext);
  const navigate = useNavigate();
  const handleSelect = (selectedTitle: MenuKey) => {
    if (selectedTitle === "LOGOFF") {
      sessionStorage.removeItem("kdlogininfo");
      window.location.href = "/";
      return;
    }
    const titleObject = getTitleObjectByKey(selectedTitle);
    const titlename = titleObject?.titlename || TOP;
    const path = titleObject?.path || TOPPATH;
    setTitle(titlename);
    navigate(path);
  };
  const sessionData = sessionStorage.getItem(loginsessionName);
  let username = "?";
  let backgroundColor = "#3498db";
  if (sessionData) {
    const logininfo: LoginInfo = JSON.parse(sessionData);
    username = logininfo.username || "?";
    backgroundColor = logininfo.backgroundColor || "#3498db";
  }else{
    window.location.href = "/";
    return;
  }
  return (
    <header className="header">
      <div className="header__inner">
        <img className="header__logo" src="./kd5_white.svg" alt="KD5 Logo" />
        <nav className="header__navgroup">
          <button
            onClick={() => handleSelect(TOP)}
            className="header__navitem"
          >
            TOP
          </button>
          <Dropdown
            buttonLabel="AUTOMERGE"
            options={[
              { label: "1-CANVAS-LIST", value: CanvasList },
              { label: "2-Input-test", value: InputFormTest },
            ]}
            onSelect={(value) => handleSelect(value)}
          />
          <button
            onClick={() => handleSelect(OTHERS)}
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
import React, { useContext } from "react";
import { TitleContext } from "../../app/Layout";
import { OTHERS } from "../../lib/commonType";

const Others: React.FC = () => {
  const { setTitle } = useContext(TitleContext);
  setTitle(OTHERS);
  return (
    <div
      style={{
        paddingTop: "20px" // トップに余白を追加
      }}
    >
      <div
        className="header__inner login-form" // Header と同じクラスを適用
        style={{
          maxWidth: "1152px", // Header の幅と揃える
          width: "50%", // Header の幅と揃える
          margin: "0 auto", // 中央揃え
          display: "flex",
          alignItems: "center", // 垂直方向に中央揃え
          paddingLeft: "15px",
        }}
      >
        <img
          src="comingsoon.webp"
          alt="commingsoon"
          style={{
            borderRadius: "5%" // 画像に丸みを追加
          }}
        />
        <div />
      </div>
    </div>
  )
};
export default Others;

import React, { useContext } from "react";
import { TitleContext } from "../../app/Layout";
import { TOP } from "../../lib/commonType";

const TopPage: React.FC = () => {
  const { setTitle } = useContext(TitleContext);
  setTitle(TOP);

  return (
    <div
      style={{
        paddingTop: "20px"
      }}
    >
      <div
        className="header__inner login-form Z-888"
        style={{
          maxWidth: "1152px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <img
          src="comingsoon.webp"
          alt="commingsoon"
          style={{
            borderRadius: "5%",
          }}
        />
        <div />
      </div>
    </div>
  )
};
export default TopPage;

import React, { useContext } from "react";
import { TitleContext } from "../../app/Layout";
import { CanvasList } from "../../lib/commonType";
import Card from "../../components/ui/Card";

const CanvasListPage: React.FC = () => {
  const { setTitle } = useContext(TitleContext);
  setTitle(CanvasList);
  return (
    <div
      style={{
        paddingTop: "20px", // トップに余白を追加
        display: "flex",
        gap: "5px",
      }}
    >
      <div
        className="header__inner login-form"
        style={{
          maxWidth: "1152px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "5px",
          rowGap: "20px"
        }}
      >
        <button
          type="submit"
          className={`w-full bg-indigo-600 text-white font-medium py-2.5 rounded-lg transition-colors"
                }`}
        >
          ADD CANVAS
        </button>
        <Card
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{ "name": "ichio", "color": "red" }, { "name": "taro", "color": "blue" }]}
        />
        <Card
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{ "name": "ichio", "color": "red" }, { "name": "taro", "color": "blue" }]}
        />

        <Card
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{ "name": "ichio", "color": "red" }, { "name": "taro", "color": "blue" }]}
        />
        <Card
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{ "name": "ichio", "color": "red" }, { "name": "taro", "color": "blue" }]}
        />
        <div />
      </div>
    </div>
  )
};
export default CanvasListPage;

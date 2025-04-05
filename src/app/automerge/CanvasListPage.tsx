import React, { useContext } from "react";
import { TitleContext } from "../../app/Layout";
import { CanvasList } from "../../lib/commonType";
import Card from "../../components/ui/Card";
import styles from "./CanvasListPage.module.css";

const CanvasListPage: React.FC = () => {
  const { setTitle } = useContext(TitleContext);
  setTitle(CanvasList);
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
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


import Card from "../../components/ui/Card"; // 新しいDropdownコンポーネントをインポート
function CanvasListPage() {
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
          width: "100%", // Header の幅と揃える
          margin: "0 auto", // 中央揃え
          display: "flex",
          alignItems: "center", // 垂直方向に中央揃え
        }}
      >
        <Card
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{"name": "ichio", "color": "red"}, {"name": "taro", "color": "blue"}]}
        />
        <Card
          cardTitle="Canvas 1"
          lastUpdateUser="ichio"
          lastUpdateDate="2021-09-01"
          loginUserNames={[{"name": "ichio", "color": "red"}, {"name": "taro", "color": "blue"}]}
        />
        <div />
      </div>
    </div>
  )
};
export default CanvasListPage;

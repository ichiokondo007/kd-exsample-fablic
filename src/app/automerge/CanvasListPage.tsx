import React, { useContext, useState } from "react";
import { TitleContext } from "../../contexts/TitleContext";
import { CanvasList } from "../../lib/commonType";
import Card from "../../components/ui/Card";
import styles from "./CanvasListPage.module.css";
import { useSnackbar } from "../../components/ui/Snackbar"; // この行を追加

const CanvasListPage: React.FC = () => {
  const { setTitle } = useContext(TitleContext);
  const { showMessage } = useSnackbar(); // この行を追加
  setTitle(CanvasList);

  // モーダルの表示状態を管理
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 新しいキャンバスのタイトルを管理
  const [newCanvasTitle, setNewCanvasTitle] = useState("");

  // NEW CANVASボタンのクリックハンドラ
  const handleNewCanvas = () => {
    setNewCanvasTitle(""); // 入力内容をリセット
    setIsModalOpen(true);  // モーダルを開く
  };

  // キャンセルボタンのクリックハンドラ
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 保存ボタンのクリックハンドラ
  const handleSave = async () => {
    if (newCanvasTitle.trim()) {
      try {
        // ペイロードの作成
        const payload = {
          title: newCanvasTitle,
          createAt:"" ,
          createDate: Date.now(), // 現在のUNIXタイムスタンプ（ミリ秒）
          canvas: null
        };

        // APIエンドポイントへリクエスト送信
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/canvas`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('キャンバスの作成に失敗しました');
        }

        const data = await response.json();
        // console.logをSnackbarに置き換え
        showMessage(`新しいキャンバスが作成されました: ${data.title || 'キャンバス'}`);

        // 成功したら状態を更新、キャンバス一覧を再取得するなどの処理
        // キャンバス一覧を再取得する関数を呼び出すなど

        setIsModalOpen(false); // モーダルを閉じる
      } catch (error) {
        // console.errorをSnackbarに置き換え
        showMessage(`エラーが発生しました: ${error instanceof Error ? error.message : '不明なエラー'}`, 5000);
        console.error('エラーが発生しました:', error); // デバッグ用に残しておくのも可
      }
    }
  };

  // サンプルデータ（将来的にはDBから取得）
  const canvasData = [
    {
      cardImageUrl: "./noimage.png",
      id: "canvas-1",
      cardTitle: "Canvas 1qwertyuiopasdfghjklzxcvbnm",
      lastUpdateUser: "ichiokondo,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      lastUpdateDate: "2021-09-01",
      loginUserNames: [{ name: "ichio", color: "red" }, { name: "taro", color: "blue" }, { name: "hanako", color: "green" }]
    },
    {
      id: "canvas-2",
      cardTitle: "Canvas 2",
      lastUpdateUser: "taro",
      lastUpdateDate: "2021-10-15",
      loginUserNames: [{ name: "ichio", color: "red" }, { name: "hanako", color: "green" }]
    },
    {
      id: "canvas-3",
      cardTitle: "Canvas 3",
      lastUpdateUser: "hanako",
      lastUpdateDate: "2021-11-20",
      loginUserNames: [{ name: "taro", color: "blue" }, { name: "hanako", color: "green" }]
    },
    {
      id: "canvas-4",
      cardTitle: "Canvas 4",
      lastUpdateUser: "ichio",
      lastUpdateDate: "2021-12-05 01:04:59",
      loginUserNames: [{ name: "ichio", color: "red" }, { name: "taro", color: "blue" }, { name: "hanako", color: "green" }]
    },
    {
      id: "canvas-5",
      cardTitle: "Canvas 5",
      lastUpdateUser: "taro",
      lastUpdateDate: "2022-01-10",
      loginUserNames: [{ name: "ichio", color: "red" }]
    },
    {
      id: "canvas-6",
      cardTitle: "Canvas 5",
      lastUpdateUser: "taro",
      lastUpdateDate: "2022-01-10",
      loginUserNames: [{ name: "ichio", color: "red" }]
    }
  ];

  return (
    <div className={styles.container}>
      {/* NEW CANVASボタン - 左寄せ */}
      <div className={styles.newCanvasContainer}>
        <button
          onClick={handleNewCanvas}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          NEW CANVAS
        </button>
      </div>

      <div className={styles.cardContainer}>
        {canvasData.map((canvas, index) => (
          <div
            key={canvas.id}
            className={styles.animatedCard}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <Card
              id={canvas.id}
              cardImageUrl={canvas.cardImageUrl || "./noimage3.png"}
              cardTitle={canvas.cardTitle}
              lastUpdateUser={canvas.lastUpdateUser}
              lastUpdateDate={canvas.lastUpdateDate}
              loginUserNames={canvas.loginUserNames}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl w-96 max-w-md">
            <h2 className="text-xl font-bold mb-4">新しいキャンバスを作成</h2>

            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <div className="mb-4">
                <label htmlFor="canvasTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  キャンバスタイトル
                </label>
                <input
                  type="text"
                  id="canvasTitle"
                  value={newCanvasTitle}
                  onChange={(e) => setNewCanvasTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="タイトルを入力してください"
                  autoFocus
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                  disabled={!newCanvasTitle.trim()}
                >
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CanvasListPage;

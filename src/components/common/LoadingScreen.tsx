import React, { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css"; // CSS モジュールをインポート

const LoadingScreen: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800);
    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  if (hidden) return null; // 非表示時は何もレンダリングしない

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingScreen;

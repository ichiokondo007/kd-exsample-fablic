import React, { useEffect } from 'react';


const TopPage: React.FC = () => {
  // スクロール時のヘッダーや背景の挙動を再現
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      const icon = document.getElementById('hamburger-icon');
      const logo = document.getElementById('logo');
      const parallaxBg = document.getElementById('parallax-bg');
      if (header && icon && logo && parallaxBg) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
          icon.setAttribute('src', 'hamburger-black.svg');
          logo.setAttribute('src', 'images/kd5_black.svg');
          let opacity = 1 - window.scrollY / window.innerHeight;
          opacity = opacity < 0 ? 0 : opacity;
          parallaxBg.style.opacity = opacity.toString();
        } else {
          header.classList.remove('scrolled');
          icon.setAttribute('src', 'hamburger-white.svg');
          logo.setAttribute('src', 'images/kd5_white.svg');
          parallaxBg.style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // モバイルメニューのトグル処理
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.style.display =
        mobileMenu.style.display === 'block' ? 'none' : 'block';
    }
  };

  return (
    <>
      {/* ヘッダー */}
      <header
        id="header"
        className="fixed w-full z-10 left-0 bg-transparent text-white transition-all duration-100 py-6"
      >
        <div className="container mx-auto px-6 w-full header-container justify-between">
          {/* ロゴ */}
          <div className="logo-container text-2xl font-bold">
            <a href="#">
              <img
                id="logo"
                src="images/kd5_white.svg"
                alt="KD Lab Logo"
                className="h-16"
              />
            </a>
          </div>
          {/* ハンバーガーメニュー（モバイル） */}
          <button
            id="hamburger-btn"
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <img
              id="hamburger-icon"
              src="hamburger-white.svg"
              alt="Menu"
              className="w-10 h-10"
            />
          </button>
          {/* PC ナビゲーション */}
          <nav className="hidden md:flex space-x-10 pr-6 desktop-nav">
            <a href="#" className="hover:underline">
              TOP
            </a>
            <a href="#" className="hover:underline">
              CANVAS
            </a>
            <a href="#" className="hover:underline">
              Form
            </a>
            <a href="#" className="hover:underline">
              MEMO
            </a>
            <a href="#" className="hover:underline">
              LOGIN
            </a>
          </nav>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div id="mobile-menu" className="hidden">
        <a href="#">Top</a>
        <a href="#">CANVAS</a>
        <a href="#">CRDT</a>
        <a href="#">MEMO</a>
        <a href="#">LOGIN</a>
      </div>

      {/* 背景画像コンテナ */}
      <div className="background-container">
        <div className="parallax-bg" id="parallax-bg"></div>
        <div className="bg-overlay"></div>
      </div>

      {/* メインコンテンツ */}
      <main>
        {/* ヒーローセクション */}
        <section className="content-container">
          <div className="hero-content">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">
              Study Report
            </h2>
            <div className="card-container">
              {/* カード1 */}
              <div className="card">
                <img
                  src="/api/placeholder/320/180"
                  alt="Card Image 1"
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">Research</h3>
                  <p className="card-text">
                    最新テクノロジーの研究と革新的ソリューションの開発。データ分析や機械学習を活用した社会課題解決に取り組みます。
                  </p>
                </div>
              </div>
              {/* カード2 */}
              <div className="card">
                <img
                  src="/api/placeholder/320/180"
                  alt="Card Image 2"
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">Development</h3>
                  <p className="card-text">
                    クラウドネイティブなアプリケーション開発。最新フレームワークとツールを使用し、高品質なプロダクトを提供します。
                  </p>
                </div>
              </div>
              {/* カード3 */}
              <div className="card">
                <img
                  src="/api/placeholder/320/180"
                  alt="Card Image 3"
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">Collaboration</h3>
                  <p className="card-text">
                    オープンな共同研究とプロジェクト展開。様々な分野の専門家と協力し、独自の視点で新しい価値を創造します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 追加コンテンツエリア */}
        <section className="additional-content">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Canvas List</h2>
            <p className="text-center">
              これ以降のコンテンツは白背景で表示されます。
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default TopPage;

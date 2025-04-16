import React from "react";

interface loginUser {
    name: string;
    color: string;
}

interface CardProps {
    cardImageUrl?: string; // 画像URLを指定するプロパティ
    cardTitle: string; // ボタン名を指定するプロパティ
    lastUpdateDate: string;
    lastUpdateUser: string;
    loginUserNames: loginUser[];
    onClick?: () => void; // クリックハンドラを追加
}

//const defaultImageUrl = "https://via.placeholder.com/300x200.png?text=Default+Image";
const defaultImageUrl = "./nami.jpg"; // デフォルトの画像URLを指定
const Card: React.FC<CardProps> = ({ cardImageUrl, cardTitle, lastUpdateDate, lastUpdateUser, loginUserNames, onClick }) => {
    // 画像URLが指定されていない場合はデフォルトの画像URLを使用
    const imageUrl = cardImageUrl || defaultImageUrl;
    return (
        <button
            onClick={onClick}
            className="card-small rounded overflow-hidden shadow-ml transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer bg-white w-full text-left"
        >
            <img className="card-image w-full h-48 object-cover" src={imageUrl} alt="hoge" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{cardTitle}</div>
                <p className="text-gray-700 text-base">
                    LastUpdateUser: {lastUpdateUser}
                </p>
                <p className="text-gray-700 text-base">
                    LastUpdateDate: {lastUpdateDate}
                </p>
            </div>
            <div className="px-6 pt-2 pb-2">
                <p className="mb-2 text-gray-700 text-base">Login User</p>
                {loginUserNames.map((user, index) => (
                    <span key={index} className="inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {user.name}
                    </span>
                ))}
            </div>
        </button>
    );
};

export default Card;
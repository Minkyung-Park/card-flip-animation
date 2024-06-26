import React, { useState } from "react";
import frontimg from "../images/frontpic.png";
import backimg from "../images/backpic.png";

// MainPage 컴포넌트는 클릭 시 카드를 뒤집는 상태를 관리합니다
const MainPage = () => {
  const [isFlipped, setIsFlipped] = useState(false); // isFlipped : 카드가 뒤집혔는지 여부를 추적하는 상태입니다.
  const [isAnimating, setIsAnimating] = useState(false); // isAnimating : 카드가 애니메이션 중인지 여부를 추적하는 상태입니다. 애니메이션이 진행 중일 때 추가 클릭을 방지합니다.

  // handleCardClick 함수는 카드가 클릭될 때 호출됩니다. 카드가 애니메이션 중이 아니면, isFlipped 상태를 토글합니다. 그리고 애니메이션이 시작된 것을 표시합니다
  const handleCardClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  };

  // handleTransitionEnd 함수는 애니메이션이 끝났을 때 호출되어 isAnimating 상태를 다시 false로 설정합니다.
  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <main className="h-screen centered">
      <div
        className={`card-container ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="card">
          <div className="card-front">
            <img src={frontimg} alt="front" className="w-60 h-96" />
          </div>
          <div className="card-back">
            <img src={backimg} alt="back" className="w-60 h-96" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;

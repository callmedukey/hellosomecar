// File: components/ASCard.tsx

import React from "react";

const ASCard: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="mb-[1.19rem]">
          <div className="card-image-wrapper">
            <img
              src="/MaskG2.png"
              alt="Checklist Icon"
              className="w-[5rem] h-[5rem]"
            />
          </div>
        </div>
        <h3 className="card-heading">출고 후 A/S</h3>
        <div className="card-line"></div>
        <p className="card-paragraph">
          차량 출고 후 엔진미션 1개월, 2,000km까지
          <br />
          성능보험을 필수제공하며 발생하는
          <br />
          사소한 문제라도 1급 협력공업사를 통해
          <br />
          적극적으로 A/S 처리에 최선을 다합니다
        </p>
      </div>
    </div>
  );
};

export default ASCard;

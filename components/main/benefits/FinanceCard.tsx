// File: components/FinanceCard.tsx

import React from "react";

const FinanceCard: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="mb-[1.1875rem]">
          <div className="card-image-wrapper">
            <img
              src="/MaskG3.png"
              alt="Finance Icon"
              className="w-[5rem] h-[5rem]"
            />
          </div>
        </div>
        <h3 className="card-heading">금융상품</h3>
        <div className="card-line"></div>
        <p className="card-paragraph">
          15년 이상 헬로썸카와 연계하여
          <br />
          협력하는 20곳 이상의 금융사와
          <br />
          고객 맞춤형 상품으로
          <br />
          승인율 최고를 자랑합니다
        </p>
      </div>
    </div>
  );
};

export default FinanceCard;

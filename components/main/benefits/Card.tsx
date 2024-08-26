import React from "react";

const Card: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="mb-[1.1875rem]">
          <div className="card-image-wrapper">
            <img
              src="/MaskG1.png"
              alt="Car Check Icon"
              className="w-[5rem] h-[5rem]"
            />
          </div>
        </div>
        <h3 className="card-heading">
          차량인도
          <br /> 비대면 서비스
        </h3>
        <div className="card-line"></div>
        <p className="card-paragraph">
          할부승인부터 집 앞 배송까지
          <br />
          자체 20가지 항목의 안전점검 시스템 및<br />
          엔진오일교체 서비스 제공
          <br />
          고객님은 그냥 운행만 하세요
        </p>
      </div>
    </div>
  );
};

export default Card;

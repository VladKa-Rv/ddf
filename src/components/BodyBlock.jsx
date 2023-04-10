import React from "react";

const BodyBlock = () => {
  return (
<div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BC%D1%96%D1%81%D1%82%D0%B0_%D0%A0%D1%96%D0%B2%D0%BD%D0%B5.svg/864px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BC%D1%96%D1%81%D1%82%D0%B0_%D0%A0%D1%96%D0%B2%D0%BD%D0%B5.svg.png" className="max-w-sm" />
    <div>
      <h1 className="text-5xl font-bold">Управління комунальною власністю</h1>
      <p className="py-6">Інформаційний портал установи</p>
      <div className="flex mt-6 gap-6 justify-center">
      <button className="btn btn-outline btn-info">Бугалтерія</button>
      <button className="btn btn-outline btn-info">Юристи</button>
      <button className="btn btn-outline btn-info">Оренда</button>
      <button className="btn btn-outline btn-info">Приватизація</button>
      </div>

    </div>
  </div>
</div>
  );
};

export default BodyBlock;

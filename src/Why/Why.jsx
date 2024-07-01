import React from "react";
import Bottle1 from "../assets/Bottle1.png";
import Bottle2 from "../assets/Bottle2.png";
import Bottle3 from "../assets/Bottle3.png";
import Bottle4 from "../assets/Bottle4.png";
import BottleCap from "../assets/BottleCap.png";
import "./Why.css";

const Why = () => {
  return (
    <div className="flex flex-col mt-10 justify-between">
      <p className="text-3xl font-against pt-4 mx-auto mb-16">WHY BELLAVITA?</p>
      <div className="grid min-[1200px]:grid-cols-4 min-[650px]:grid-cols-2 h-full mx-auto mb-10 font-lexend justify-items-center">
        <div className="card_before mx-2 cursor-pointer">
          <div className="cap">
            <img src={BottleCap} alt="" />
          </div>
          <h2>CRUELTY FREE</h2>
          <h4>
            Kindness in every bottle: <br /> Our commitment to cruelty-free{" "}
            <br /> Products.
          </h4>
          <div className="bottle">
            <img src={Bottle2} alt="" />
          </div>
        </div>
        <div className="card_before mx-2 cursor-pointer">
          <div className="cap">
            <img src={BottleCap} alt="" />
          </div>
          <h2>AFFORDABLE</h2>
          <h4>
          Offering Premium Quality and <br /> Elegance at a Reasonable{" "}
            <br /> Price.
          </h4>
          <div className="bottle">
            <img src={Bottle3} alt="" />
          </div>
        </div>
        <div className="card_before mx-2 cursor-pointer">
          <div className="cap">
            <img src={BottleCap} alt="" />
          </div>
          <h2>FRAGRANCE</h2>
          <h4>
          Luxurious & imported perfume <br />oils in every product{" "}
            <br /> you love.
          </h4>
          <div className="bottle">
            <img src={Bottle4} alt="" />
          </div>
        </div>
        <div className="card_before mx-2 cursor-pointer">
          <div className="cap">
            <img src={BottleCap} alt="" />
          </div>
          <h2>GENDER NEUTRAL</h2>
          <h4>
          Elevate your self-care routine <br />with bath, body and personal{" "}
            <br />  care for all 
          </h4>
          <div className="bottle">
            <img src={Bottle1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

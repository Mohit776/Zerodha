import React from "react";
import { holdings, positions } from "../Data/data";

const Summary = () => {
  // calculate current value properly
  const currentValue = holdings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0

  );

   const investment = holdings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{(currentValue/1000).toFixed(2)}K</span>
            </p>
            <p>
             Investment  <span>{(investment/1000).toFixed(2)}k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;

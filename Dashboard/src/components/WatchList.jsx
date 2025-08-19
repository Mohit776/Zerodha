import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../Data/data";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const WatchList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ one state for all items

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search text-black"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list m-6">
        {watchlist.map((stock, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex justify-between w-full h-9 border-[0.5px] text-gray-600 border-gray-300"
          >
            <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

            <div className="itemInfo flex items-center gap-2">
              <span className="percent">{stock.percent}</span>
              <span className={stock.isDown ? "down" : "up"}>
                {stock.isDown ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
              </span>
              <span className={stock.isDown ? "down" : "up"}>{stock.price}</span>

              {/* ✅ Show actions only on hover */}
              {hoveredIndex === index && <WatchlistActions uid={stock.id} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const WatchlistActions = ({ uid }) => {
  return (
    <span className="action ml-2">
      <Tooltip title="buy (B)" placement="top" slots={{ transition: Grow }}>
        <button className="buy px-2 py-1 border rounded">Buy</button>
         <button className="sell px-2 mx-1 py-1 border rounded">Sell</button>
         
      </Tooltip>
      <Tooltip> <button className="action"> <BarChartOutlined/></button></Tooltip>
      <Tooltip>
         <button className="px-2 mx-1 py-1 text-sm border rounded">More</button>
      </Tooltip>
    </span>
  );
};

export default WatchList;

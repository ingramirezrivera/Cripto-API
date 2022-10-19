import React, { useState, useEffect } from "react";
import "./FeaturedStyles.css";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import axios from "axios";

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!data) return null;

  return (
    <div className="featured">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>
        {/* Right Side  */}

        <div className="right">
          {data.map((d, index) => {
            return (
              <div key={index} className="card">
                <div className="top">
                  {/* <img src={BTC} alt='/' /> */}
                  <img src={d.image} alt="" />
                </div>
                <div>
                  <h5>{d.name}</h5>
                  <p>${d.current_price.toLocaleString()}</p>
                </div>

                {d.price_change_percentage_24h < 0 ? (
                  <span className="red">
                    <FiArrowDownRight className="icon" />
                    {d.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className="green">
                    <FiArrowUpRight className="icon" />
                    {d.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;

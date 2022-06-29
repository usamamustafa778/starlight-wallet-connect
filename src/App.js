import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import SIcons from "./Components/SIcons";

export default function App() {
  const [wallet, setWallet] = useState(false);

  return (
    <div className="App">

      {/* Wallet */}
      <div className="wallet">
        {/* Logo */}
        <div className="logo">
          <img title="Starlight Logo" src="/assets/logo.png" alt="" />
        </div>

        {/* Roadmap */}
        <img src="/assets/raodmap.png" className="roadmap" alt="" />


        {/* Social Icons */}
        <SIcons />

        {/* Title */}
        <div className="containerTitle text-blue">
          <h1>MINT LITES</h1>
          <h3>8,888 SXS Lites NFT</h3>
        </div>
        <div>
          {wallet ? (
            <>
              {/* Wallet Details */}
              <div className="walletDetails">
                <div className="walletAddress">
                  <div>
                    <img src="/assets/entypo_wallet.png" alt="" />
                    <p className="text-gray">Wallet Address</p>
                  </div>
                  <div className="disconnect" onClick={() => setWallet(false)}>
                    <p>0x83....53B0</p>
                    <img src="/assets/X.png" alt="" />
                  </div>
                </div>

                {/* Balance */}
                <div className="walletBalance">
                  <div>
                    <img src="/assets/ri_coin-fill.png" alt="" />
                    <p className="text-gray">ETH Balance</p>
                  </div>
                  <p>0.24 ETH</p>
                </div>
              </div>

              {/* Counter */}
              <Counter />

              <div className="totalPrice">
                <h4>Total Price</h4>
                <div>
                  <div>
                    <img src="/assets/mdi_ethereum.png" alt="" />
                    0.05 ETH
                  </div>
                  <p className="text-gray gasFee">+Gas Fee</p>
                </div>
              </div>

              {/* Connect Button */}
              <br />
              <div className="connectWalletButton">
                <button>mint your lites</button>
              </div>
            </>
          ) : (
            <div className="connectWalletButton">
              <br />
              <button onClick={() => setWallet(true)}>Connect Wallet</button>
              <br />
              <p>
                If you’re connecting from mobile, <br /> please use the built in
                browser in MetaMask App
              </p>
            </div>
          )}
        </div>
      </div>
      {/* CopyRight */}
      <p className="copyright">© 2022 SXS. All Rights Reserved</p>

      {/* Bottom Images */}
      <div className="nftImages">
        <img src="/assets/img_bottom_left.png" className="img1" alt="" />
        <img src="/assets/img_bottom_right.png" className="img2" alt="" />
        <img src="/assets/img.png" className="img3" alt="" />
      </div>

      {/* Roadmap Phone */}
      <img src="/assets/raodmap.png" className="roadmapBottom" alt="" />
    </div>
  );
}

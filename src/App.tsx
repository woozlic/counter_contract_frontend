import "./App.css";
import { useEffect, useState } from "react";
import ShitcoinImage from './assets/Shitcoin.png';
import { WebApp } from "@grammyjs/web-app";

function App() {
  console.log(WebApp.initData);
  const [shitcoins, setShitcoins] = useState(0);

  const apiUrl = import.meta.env.VITE_APP_API_URL || "http://194.247.183.21:8080";
  console.log(apiUrl);

  useEffect(() => {
    WebApp.ready();
    ApiCounter(0);
  }, []);

  const ApiCounter = async (increment: number) => {
    try {
      const response = await fetch(`${apiUrl}/counter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ initData: WebApp.initData, increment }),
      });
      const data = await response.json();
      setShitcoins(data.shitcoins);
    } catch (error) {
      console.error('Error getting API counter:', error);
    }
  };

  return (
    <div className="app">
      {/* <div>
        <TonConnectButton />
      </div> */}
      <div>
        <div className='Card'>
          {/* <b>{WebApp. platform}</b>
          <br /> */}
          {/* <b>Our contract Address</b>
          <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
          <b>Our contract Balance</b>
          {contract_balance && (
            <div className='Hint'>{fromNano(contract_balance)}</div>
          )} */}
        </div>

        <div className='Card'>
          <h1>Shitcoin</h1>
          <div className="score-section">
            <h2>{shitcoins}</h2>
          </div>
          <div className="icon-section">
            <img onClick={() => ApiCounter(1)} src={ShitcoinImage} alt="icon" className="icon" />
          </div>
          <div className="actions-section">
            <button className="action-btn">💰 Earn</button>
            <button className="action-btn">🚀 Boosts</button>
            <button className="action-btn">👬 Friends</button>
          </div>
        </div>
      {/* 
        <a
          onClick={() => {
            showAlert();
          }}
        >
          Show Alert
        </a> */}

      <br />

      {/* {connected && (
           <a onClick={() => sendDeposit()}>Request deposit of 0.1 ton</a>
        )}

        <br/>

        {connected && (
          <a onClick={() => sendWithdrawalRequest()}>Request withdraw of 0.1 ton</a>
        )} */}
    </div>
    </div >
  );
}

export default App;
import "./App.css";
import { useState } from "react";
import ShitcoinImage from './assets/Shitcoin.png';

function App() {

  const [counter_value, setCounterValue] = useState(0);

  const incrementCounter = () => {
    setCounterValue(counter_value + 1);
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
            <h2>{counter_value}</h2>
          </div>
          <div className="icon-section">
            <img onClick={incrementCounter} src={ShitcoinImage} alt="icon" className="icon" />
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
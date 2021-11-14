import React, { useEffect, useState } from "react";

import useWebSocket from "react-use-websocket";
import {
  WS_URL,
} from "./constants";
import {
  getLast30Prices,
} from "./api";
import { buildSubscribeMessage } from "./utils";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Loader from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import OverView from "./pages/overView";

const App = () => {
  const [prices, setPrices] = useState({});
  const [product] = useState("cc-btc-usd-cccagg")
  const [data,setData] = useState([])
  const [time,setTime] = useState({type:'histominute',count:'1'})

  useEffect(() => {
    const set = async () => {
      const [prices] =  await Promise.all([
        getLast30Prices(time),
      ]);
      setData(prices)
    };
    set();
  }, [time]);

  const { sendJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      onOpen: () => {
        sendJsonMessage(buildSubscribeMessage("SUBSCRIBE", [product]));
      },
      onMessage: (event) => handleMessage(JSON.parse(event.data)),
      onError: (event) => console.log(event),
      shouldReconnect: (closeEvent) => true,
      retryOnError: true,
      reconnectAttempts: 50,
      reconnectInterval: 2000,
    },
    
  );

  const handleMessage = (message) => {
    console.log(message[product])
    let data = message[product]
    setPrices({...data});
  };
  const isLoaded =
    !!prices &&
    !!Object.keys(data).length

  if (!isLoaded)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader type="Rings" color="#00BFFF" height={256} width={256} />
      </div>
    );
  return(
    
    <Router>
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex flex-col h-full overflow-y-hidden">
        <Routes>
        <Route
          path="/"
          element={
          <OverView
            prices={prices}
            data={data}
            setTime = {setTime}
          />
        }
      />
        </Routes>
      </div>
    </div>
  </Router>
  )

}

export default App;

const nftFilter = [
  {
    status: "SUCCESS",
    account_id: "social.near",
  },
  {
    status: "SUCCESS",
    predecessor_id: "social.near",
  },
];

let reconnectTimeout: number | Timer | null | undefined = null;

function listenToNFT() {
  const scheduleReconnect = (timeOut: number | undefined) => {
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout);
      reconnectTimeout = null;
    }
    reconnectTimeout = setTimeout(() => {
      listenToNFT();
    }, timeOut);
  };

  const ws = new WebSocket("wss://events.near.stream/ws");

  ws.onopen = () => {
    console.log(`Connection to WS has been established`);
    ws.send(
      JSON.stringify({
        secret: "ohyeahnftsss",
        filter: nftFilter,
        fetch_past_events: 0,
      })
    );
  };
  ws.onclose = () => {
    console.log(`WS Connection has been closed`);
    scheduleReconnect(1);
  };
  ws.onmessage = (e) => {
    // @ts-ignore
    const data = JSON.parse(e.data);

    console.log("data", data);
  };
  ws.onerror = (err) => {
    console.log("WebSocket error", err);
  };
}

listenToNFT();

import config from '../configs'

const connections = {}

export const wsSubscribe = (type, onSubscribe, onRequest) => {
    const wss = new WebSocket(config.WS_PUBLIC_API);
    connections[type] = wss
    const msg = JSON.stringify({
        event: 'subscribe',
        channel: type,
        symbol: 'tBTCUSD'
    });
    wss.onopen = () => {
        wss.send(msg);
    };
    wss.onmessage = (e) => {
        onMessage(onSubscribe, onRequest, e)
    };
};

export const wsUnsubscribe = (type, chanId, onUnsubscribe) => {
    const wss = connections[type];
    const msg = JSON.stringify({
        "event": "unsubscribe",
        chanId: chanId,
    });
    wss.send(msg);
    wss.onmessage = (event) => {
        const response = JSON.parse(event.data);
        console.log(response)
        if(response.event === 'unsubscribed'){
            onUnsubscribe()
        }
    };
};

export const onMessage = (onSubscribe, onRequest, event) => {
    const response = JSON.parse(event.data);
    if (Array.isArray(response)) {
        const [chanId, data] = response;
        onRequest(data)
    } else {
        if (response.event === 'subscribed') {
            onSubscribe(response)
        }
    }
};
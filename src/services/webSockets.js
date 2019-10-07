import config from '../configs'

const connections = {}

export const wsInit = (chanelType) => {
    const wss = new WebSocket(config.WS_PUBLIC_API);
    connections[chanelType] = wss;
    wss.onopen = () => {
        setInterval(() => ping(chanelType), 1000);
    };
}

export const ping = (chanelType) =>{
    const wss = connections[chanelType];
    const msg = JSON.stringify({
        "event":"ping",
        "cid": 1234
    });
    wss.onopen = () => {
        wss.send(msg)
    }
};

export const wsSubscribe = (chanelType, onSubscribe, onRequest) => {
    const wss = connections[chanelType];
    const msg = JSON.stringify({
        event: 'subscribe',
        channel: chanelType,
        symbol: 'tBTCUSD'
    });
    wss.onopen = () => { wss.send(msg)};

    wss.onmessage = (e) => {
        onMessage(onSubscribe, onRequest, e)
    };
};

export const wsUnsubscribe = (chanelType, chanId, onUnsubscribe) => {
    const wss = connections[chanelType];
    const msg = JSON.stringify({
        "event": "unsubscribe",
        chanId: chanId,
    });
    wss.onopen = () => {
        wss.send(msg)
    };
    wss.onmessage = (event) => {
        const response = JSON.parse(event.data);
        if(response.event === 'unsubscribed'){
            onUnsubscribe()
        }
    };
};

export const onMessage = (onSubscribe, onRequest, event) => {
    const response = JSON.parse(event.data);
    if (Array.isArray(response)) {
        const [chanId, ...data] = response;
            onRequest(data)

    } else {
        if (response.event === 'subscribed') {
            onSubscribe(response)
        }
    }
};
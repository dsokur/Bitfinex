import config from '../configs'

export const wsSubscribe = (type, onSubscribe, onRequest) => {
    const wss = new WebSocket(config.WS_PUBLIC_API);
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

export const wsUnsubscribe = (type,chanId, unSubscribe) => {
    const wss = new WebSocket(config.WS_PUBLIC_API);
    const msg = JSON.stringify({
        event: 'unsubscribe',
        channel: chanId,
        symbol: 'tBTCUSD'
    });
    wss.onopen = () => {
        wss.send(msg);
    };
    wss.onmessage = (e) => {
        onMessage(dispatch, getState, e)
    };
};

const onMessage = (onSubscribe, onRequest, event) => {
    const response = JSON.parse(event.data);
    if (Array.isArray(response)) {
        const [chanId, data] = response
        onRequest(data)
    } else {
        if (response.event === 'subscribed') {
            onSubscribe(response)
        }
    }
};
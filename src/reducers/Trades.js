const TRADES_SUBSCRIBED = 'TRADES_SUBSCRIBED';
const TRADES_UNSUBSCRIBED = 'TRADES_UNSUBSCRIBED';
const REQUEST_TRADES_DATA = 'REQUEST_TRADES_DATA';

export type Trade = {
    ID: null,
    MTS: null,
    AMOUNT: null,
    PRICE: null,
    RATE: null,
    PERIOD: null,
}

export type Trades = Array<?Trade>
export type State = {
    chanId: string,
    trades: Trades
}

const initialState: State = {
    chanId: null,
    trades: []
};

export default (state = initialState, action) => {
    const {payload} = action;

    switch (action.type) {
        case(TRADES_SUBSCRIBED): {
            return {...state, chanId: payload.chanId}
        }
        case(TRADES_UNSUBSCRIBED): {
            return {...initialState}
        }
        case(REQUEST_TRADES_DATA): {
            const [data] = action.payload;
            if (Array.isArray(data)) {
                return {
                    ...state,
                    trades: [...state.trades, ...data.map(([ID, MTS, AMOUNT, PRICE, RATE, PERIOD]) =>
                        ({
                            ID,
                            MTS,
                            AMOUNT,
                            PRICE,
                            RATE,
                            PERIOD
                        })
                    )]
                }
            } else {
                const [flag] = action.payload;
                if (flag === 'hb') {
                    return state
                }
                const [, [ID,
                    MTS,
                    AMOUNT,
                    PRICE,
                    RATE,
                    PERIOD]] = action.payload;
                return {
                    ...state,
                    trades: state.trades.map(item => ID === item.ID ? {
                        ...item, ID,
                        MTS,
                        AMOUNT,
                        PRICE,
                        RATE,
                        PERIOD
                    } : item)
                }
            }
        }
        default:
            return state;
    }
};

export const onTradesSubscribe = (data) => ({
    type: TRADES_SUBSCRIBED,
    payload: data
})

export const onTradesUnsubscribe = () => ({
    type: TRADES_UNSUBSCRIBED,
})

export const onTradesRequestData = (data) => ({
    type: REQUEST_TRADES_DATA,
    payload: data
})
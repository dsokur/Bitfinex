const TICKER_SUBSCRIBED = 'TICKER_SUBSCRIBED';
const TICKER_UNSUBSCRIBED = 'TICKER_UNSUBSCRIBED';
const REQUEST_TICKER_DATA = 'REQUEST_TICKER_DATA';

const initialState = {
    chanId: null,
    BID: null,
    BID_SIZE: null,
    ASK: null,
    ASK_SIZE: null,
    DAILY_CHANGE: null,
    DAILY_CHANGE_PERC: null,
    LAST_PRICE: null,
    VOLUME: null,
    HIGH: null,
    LOW: null
};

export default (state = initialState, action) => {
    const {payload} = action;

    switch (action.type) {
        case(TICKER_SUBSCRIBED): {
            return {...state, chanId: payload.chanId}
        }
        case(TICKER_UNSUBSCRIBED): {
            return {...initialState}
        }
        case(REQUEST_TICKER_DATA): {
            const [
                [
                    BID,
                    BID_SIZE,
                    ASK,
                    ASK_SIZE,
                    DAILY_CHANGE,
                    DAILY_CHANGE_PERC,
                    LAST_PRICE,
                    VOLUME,
                    HIGH,
                    LOW
                ]
            ] = action.payload;
            return {
                ...state, BID,
                BID_SIZE,
                ASK,
                ASK_SIZE,
                DAILY_CHANGE,
                DAILY_CHANGE_PERC,
                LAST_PRICE,
                VOLUME,
                HIGH,
                LOW
            }
        }
        default:
            return state;
    }
};

export const onTickerSubscribe = (data) => ({
    type: TICKER_SUBSCRIBED,
    payload: data
})

export const onTickerUnsubscribe = () => ({
    type: TICKER_UNSUBSCRIBED,
})

export const onTickerRequestData = (data) => ({
    type: REQUEST_TICKER_DATA,
    payload: data
})
const TRADES_SUBSCRIBED = 'TRADES_SUBSCRIBED';
const TRADES_UNSUBSCRIBED = 'TRADES_UNSUBSCRIBED';
const REQUEST_TRADES_DATA = 'REQUEST_TRADES_DATA';

const initialState = {
	chanId: null,
	ID: null,
	MTS: null,
	AMOUNT: null,
	PRICE: null,
	RATE: null,
	PERIOD: null,
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
			const [ID,
				MTS,
				AMOUNT,
				PRICE,
				RATE,
				PERIOD] = action.payload;
			return {
				...state, ID,
				MTS,
				AMOUNT,
				PRICE,
				RATE,
				PERIOD
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
import {combineReducers} from 'redux'
import Ticker from './Ticker'
import OrderBook from './OrderBook'
import Trades from './Trades'

export default combineReducers({
	Ticker,
	OrderBook,
	Trades
});
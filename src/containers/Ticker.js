import {connect} from 'react-redux'
import Ticker from '../components/Ticker/Ticker';
import React, {Component} from 'react';
import {wsSubscribe, wsUnsubscribe} from "../services/webSockets";
import {onTickerRequestData, onTickerSubscribe, onTickerUnsubscribe} from "../reducers/Ticker";

class TickerContainer extends Component {
	componentDidMount() {
		wsSubscribe('ticker', this.props.onTickerSubscribe, this.props.onTickerRequestData)
	}

	componentWillUnmount() {
		wsUnsubscribe('ticker', this.props.chanId, this.props.onTickerUnsubscribe)
	}

	render() {
		return <Ticker {...this.props}/>
	}
}

const mapStateToProps = ({Ticker: {
	chanId, LAST_PRICE,VOLUME,DAILY_CHANGE,
	DAILY_CHANGE_PERC,
	LOW,
	HIGH}}) => {
    return {
	    chanId, LAST_PRICE,VOLUME,DAILY_CHANGE,
	    DAILY_CHANGE_PERC,
	    LOW,
	    HIGH
    };
};

export default connect(mapStateToProps, {onTickerRequestData, onTickerSubscribe, onTickerUnsubscribe})(TickerContainer);
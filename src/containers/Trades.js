import {connect} from 'react-redux'
import Trades from '../components/Trades/Trades';
import {wsSubscribe, wsUnsubscribe} from "../services/webSockets";
import {onTradesRequestData, onTradesSubscribe, onTradesUnsubscribe} from "../reducers/Trades";
import React, {Component} from 'react';

class TradesContainer extends Component {
	componentDidMount() {
		wsSubscribe('trade', this.props.onTradesSubscribe, this.props.onTradesRequestData)
	}

	componentWillUnmount() {
		wsUnsubscribe('trade', this.props.chanId, this.props.onTradesUnsubscribe)
	}

	render() {
		console.log('Trade', this.props)
		return <Trades {...this.props}/>
	}
}

const mapStateToProps = ({
	                         Trades: {
		                         chanId,
		                         ID,
		                         MTS,
		                         AMOUNT,
		                         PRICE,
		                         RATE,
		                         PERIOD
	                         }
                         }) => {
	return {
		chanId,
		ID,
		MTS,
		AMOUNT,
		PRICE,
		RATE,
		PERIOD
	};
};

export default connect(mapStateToProps, {onTradesRequestData, onTradesSubscribe, onTradesUnsubscribe})(TradesContainer);
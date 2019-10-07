import {connect} from 'react-redux'
import Trades from '../components/Trades/Trades';
import {wsInit, wsSubscribe, wsUnsubscribe} from "../services/webSockets";
import {onTradesRequestData, onTradesSubscribe, onTradesUnsubscribe} from "../reducers/Trades";
import React, {Component} from 'react';
import {chanelTypes} from "../constants";

class TradesContainer extends Component {
	constructor(props) {
		super(props);
		wsInit(chanelTypes.TRADES)
	}

	componentDidMount() {
		wsSubscribe(chanelTypes.TRADES, this.props.onTradesSubscribe, this.props.onTradesRequestData)
	}

	componentWillUnmount() {
		wsUnsubscribe(chanelTypes.TRADES, this.props.chanId, this.props.onTradesUnsubscribe)
	}

	render() {
		const {trades} = this.props;
		return <Trades trades={trades}/>
	}
}

const mapStateToProps = ({
	                         Trades: {
		                         trades
	                         }
                         }) => {
	return {
        trades
	};
};

export default connect(mapStateToProps, {onTradesRequestData, onTradesSubscribe, onTradesUnsubscribe})(TradesContainer);
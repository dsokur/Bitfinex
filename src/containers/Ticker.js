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
        wsUnsubscribe('ticker',this.props.chanId, this.props.onTickerUnsubscribe)
    }

    render() {
        console.log(this.props)
        return <Ticker/>
    }
}

const mapStateToProps = ({Ticker: {chanId}}) => {
    return {
        chanId
    };
};

export default connect(mapStateToProps, {onTickerRequestData, onTickerSubscribe, onTickerUnsubscribe})(TickerContainer);
import {connect} from 'react-redux'
import Ticker from '../components/Ticker/Ticker';
import React, {Component} from 'react';
import {wsInit, wsSubscribe, wsUnsubscribe} from "../services/webSockets";
import {onTickerRequestData, onTickerSubscribe, onTickerUnsubscribe} from "../reducers/Ticker";
import {chanelTypes} from "../constants";

class TickerContainer extends Component {
    constructor(props) {
        super(props);
        wsInit(chanelTypes.TICKER)
    }

    componentDidMount() {
        wsSubscribe(chanelTypes.TICKER, this.props.onTickerSubscribe, this.props.onTickerRequestData)
    }

    componentWillUnmount() {
        wsUnsubscribe(chanelTypes.TICKER, this.props.chanId, this.props.onTickerUnsubscribe)
    }

    render() {
        return <Ticker {...this.props}/>
    }
}

const mapStateToProps = ({
                             Ticker: {
                                 chanId, LAST_PRICE, VOLUME, DAILY_CHANGE,
                                 DAILY_CHANGE_PERC,
                                 LOW,
                                 HIGH
                             }
                         }) => {
    return {
        chanId, LAST_PRICE, VOLUME, DAILY_CHANGE,
        DAILY_CHANGE_PERC,
        LOW,
        HIGH
    };
};

export default connect(mapStateToProps, {onTickerRequestData, onTickerSubscribe, onTickerUnsubscribe})(TickerContainer);
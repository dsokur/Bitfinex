import {connect} from 'react-redux'
import Ticker from '../components/Ticker/Ticker';
import React, {Component} from 'react';
import {wsSubscribe} from "../services/webSockets";
import {onTickerRequestData, onTickerSubscribe} from "../reducers/Ticker";

class TickerContainer extends Component {
    componentDidMount() {
        wsSubscribe('ticker', this.props.onTickerSubscribe, this.props.onTickerRequestData)
    }

    render() {
        console.log(this.props)
        return <Ticker/>
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps, {onTickerRequestData, onTickerSubscribe})(TickerContainer);
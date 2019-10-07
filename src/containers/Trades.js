import {connect} from 'react-redux'
import Trades from '../components/Trades/Trades';
import {wsSubscribe} from "../services/webSockets";
import React, {Component} from 'react';

class TradesContainer extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <Trades/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps,)(TradesContainer);
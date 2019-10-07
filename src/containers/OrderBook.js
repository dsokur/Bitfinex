import {connect} from 'react-redux'
import OrderBook from '../components/OrderBook/OrderBook';

const mapStateToProps = (state) => {
	return {
		state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(OrderBook);
import {connect} from 'react-redux'
import Ticker from '../components/Ticker/Ticker';

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


export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
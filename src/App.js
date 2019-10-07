import React, {Component} from 'react';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Text,View, ScrollView} from 'react-native';
import Ticker from './containers/Ticker'
import OrderBook from './containers/OrderBook'
import Trades from './containers/Trades'


const store = configureStore();

class App extends Component {
	render() {
		return (
				<Provider store={store}>
					<ScrollView
						bounces={false}
						contentContainerStyle={{backgroundColor:'#2C3940'}}>
						<Ticker/>
						<OrderBook/>
						<Trades/>
					</ScrollView>
				</Provider>
		);
	};
}

export default App;

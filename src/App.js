import React, {Component} from 'react';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Text} from 'react-native';
import Ticker from './containers/Ticker'


const store = configureStore();

class App extends Component {
	render() {
		return (
				<Provider store={store}>
					<Text>App</Text>
					<Ticker/>
				</Provider>
		);
	};
}

export default App;

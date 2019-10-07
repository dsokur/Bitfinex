import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';


export default class Trades extends Component {

	renderHeader = () => {
		return (
			<View>
				<Text>TRADES BTC/USD</Text>
				<View>
					<Text>Time</Text>
					<Text>Price</Text>
					<Text>Amount</Text>
				</View>
			</View>
		)
	};

	renderRow = ({item}) => {
		return (
			<View></View>
		);
	};

	render() {
		const {data}=this.props;
		return (
			<FlatList
				data={data}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={this.renderHeader}
				renderItem={this.renderRow}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{backgroundColor:'white'}}
				bounces={false}
			/>
		);
	}
}
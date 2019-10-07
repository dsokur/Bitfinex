import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';


export default class Trades extends Component {

    renderHeader = () => {
        return (
            <View>
                <Text>TRADES BTC/USD</Text>
                <View style={{display: 'flex',  width:'100%', flexDirection: 'row'}}>
                    <Text style={{minWidth:'33%'}}>Time</Text>
                    <Text style={{minWidth:'33%'}}>Price</Text>
                    <Text style={{minWidth:'33%'}}>Amount</Text>
                </View>
            </View>
        )
    };

    renderRow = ({item}) => {
        return (
            <View style={{display: 'flex', width:'100%', flexDirection: 'row'}}>
                <Text style={{minWidth:'33%'}}>
                    {item.MTS}
                </Text>
                <Text style={{minWidth:'33%'}}>
                    {item.PRICE}
                </Text>
                <Text style={{minWidth:'33%'}}>
                    {item.AMOUNT}
                </Text>
            </View>
        );
    };

    render() {
        const {trades} = this.props;
        return (
            <FlatList
                data={trades}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={this.renderHeader}
                renderItem={this.renderRow}
                keyExtractor={(item) => item.ID.toString()}
                contentContainerStyle={{backgroundColor: 'white'}}
                bounces={false}
            />
        );
    }
}
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from './../../assets/svg/index';
import styles from './styles';


export default class Ticker extends Component {
    render() {
        const {LAST_PRICE, VOLUME, DAILY_CHANGE, DAILY_CHANGE_PERC, HIGH, LOW} = this.props;
        return (
            <View style={{
                paddingTop: 25,
                backgroundColor: '#1B262D',
                flex: 1,
                minHeight: 72,
                height: 'auto',
                flexDirection: 'row'
            }}>
                <Icon name='bitcoin'
                      width={40}
                      height={40}
                      fill='white'
                />
                <View style={styles.mainData}>
                    <View style={styles.mainDataRow}>
                        <View style={styles.mainDataRowCol}>
                            <Text style={styles.colorWhite}>BTC/USD</Text>
                        </View>
                        <View style={styles.mainDataRowCol}>
                            <Text style={styles.colorWhite}>{LAST_PRICE}</Text>
                        </View>
                    </View>
                    <View style={styles.mainDataRow}>
                        <View style={styles.mainDataRowCol}>
                            <Text style={styles.colorWhite}>
                                VOL {VOLUME} USD</Text>
                        </View>
                        <View style={styles.mainDataRowCol}>
                            <Text style={styles.colorWhite}>{DAILY_CHANGE} {DAILY_CHANGE_PERC}</Text>
                        </View>
                    </View>
                    <View style={styles.mainDataRow}>
                        <View style={styles.mainDataRowCol}>
                            <Text style={styles.colorWhite}>
                                LOW {LOW}</Text>
                        </View>
                        <View style={styles.mainDataRowCol}>
                            <Text style={styles.colorWhite}>HIGH {HIGH}</Text>
                        </View>
                    </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Icon name='sangraph'
                          width={12}
                          height={12}
                          fill='#FFFFFF'
                    />
                    <Icon name='sanicon'
                          width={15}
                          height={15}
                          fill='#FFFFFF'
                          stroke='#231F20'
                    />
                </View>
            </View>
        );
    }
}
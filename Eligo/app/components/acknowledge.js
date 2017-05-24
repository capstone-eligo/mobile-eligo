import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import {Card, Divider} from 'react-native-elements'

import {Actions} from 'react-native-router-flux';

import styles from '../styles'

export default class Acknowledge extends React.Component {
    render() {
        const cardDividerStyle = {height: 0}
        const cardTitleStyle = {textAlign: 'left', marginBottom: 0}
        const cardContainerStyle = {backgroundColor: '#F9F9F9'}

        return(
            <ScrollView style={styles.container}>
                <Card title="Nutritional data"
                    dividerStyle={cardDividerStyle}
                    titleStyle={cardTitleStyle}
                    containerStyle={cardContainerStyle}>
                    <Text>Powered by <Text style={{color:'blue'}} onPress={() => Linking.openURL('http://www.nutritionix.com/api')}>Nutritionix API</Text>
                    </Text>
                </Card>

                <Card title="App info"
                    dividerStyle={cardDividerStyle}
                    titleStyle={cardTitleStyle}
                    containerStyle={cardContainerStyle}>
                    <Text>Built with React Native and Node JS</Text>
                </Card>

                <Card title="Additional ingredients :)"
                    dividerStyle={cardDividerStyle}
                    titleStyle={cardTitleStyle}
                    containerStyle={cardContainerStyle}>
                    <Text>Built by the Eligo team with love</Text>
                </Card>
            </ScrollView>
      );
    }
}

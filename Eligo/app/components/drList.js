import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import {Card, Divider} from 'react-native-elements'

import {Actions} from 'react-native-router-flux';

import styles from '../styles'

export default class DRList extends React.Component {
    render() {
        const cardDividerStyle = {height: 0}
        const cardTitleStyle = {textAlign: 'left', marginBottom: 0}
        const cardContainerStyle = {backgroundColor: '#F9F9F9'}

        // dividerStyle={cardDividerStyle}
        // titleStyle={cardTitleStyle}
        // containerStyle={cardContainerStyle}

        return(
            <ScrollView style={styles.container}>
                <Card title="Dairy"
                    imageStyle={{flex: 1, width: 50,height: 50,resizeMode: 'contain'}}
                    image={require('../img/dairy.png')}>
                    <Text>Ingredient 1, Ingredient 2, Ingredient 3</Text>
                    <Text style={{color:'blue'}} onPress={() => Linking.openURL('#')}>Source</Text>
                </Card>
            </ScrollView>
      );
    }
}

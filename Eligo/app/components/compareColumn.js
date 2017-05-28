import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Avatar, List, ListItem, Row, Col, Divider} from 'react-native-elements';

import styles from '../styles'

export default class CompareColumn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { product, restrictionsMapped } = this.props;

        const nameTextStyle = {
            fontWeight: 'bold',
            borderRadius: 5,
            marginRight: 5,
        }

        const prodNameStyle = {
            marginBottom: 0,
            padding: 5,
        }

        const scrollStyle = {
            paddingLeft: 10,
            paddingRight: 10,
        }

        const userDRStyle = {
            marginBottom: 15,
            padding: 5,
            backgroundColor: '#F9F9F9'
        }


        return(
            <ScrollView style={scrollStyle}>
                <Text style={prodNameStyle}>{product.item_name}</Text>
                {
                    Object.keys(restrictionsMapped).map((d,i) => (
                        <TouchableOpacity key={i} style={userDRStyle}>
                            <Text style={nameTextStyle}>{restrictionsMapped[d].firstName + " " + restrictionsMapped[d].lastName}</Text>
                            { restrictionsMapped[d].alerts ?
                                <View>
                                    <Text style={{color: '#EA4C2F'}}>
                                        {Object.keys(restrictionsMapped[d].alerts).length} potential ingredients
                                    </Text>
                                </View>

                                : <Text style={{color: '#44B8AE'}}>No alert detected</Text>
                            }
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        )
    }
}
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, AlertIOS } from 'react-native';
import {Card, Avatar, List, ListItem, Row, Col, Divider} from 'react-native-elements';

import styles from '../styles'

export default class CompareColumn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    showDetails(d) {
        const {restrictionsMapped } = this.props;

        var content = "";
        if (restrictionsMapped[d].alerts) {
            Object.keys(restrictionsMapped[d].alerts).map((e, i) => {
                content = content + '- ' + e + ' (' + Array.from(restrictionsMapped[d].alerts[e]).join(', ') + ')\n';
            });
        } else {
            content = "No alerts detected."
        }

        AlertIOS.alert(
            restrictionsMapped[d].firstName + ' ' + restrictionsMapped[d].lastName,
            content
        );
    }

    render() {
        const { product, restrictionsMapped } = this.props;

        const nameTextStyle = {
            fontWeight: 'bold',
            borderRadius: 5,
            marginRight: 5,
        }

        const prodNameStyle = {
            marginBottom: 10,
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
                        <TouchableOpacity key={i} style={userDRStyle} onPress={() => this.showDetails(d)}>
                            <Text style={nameTextStyle}>{restrictionsMapped[d].firstName + " " + restrictionsMapped[d].lastName}</Text>
                            { restrictionsMapped[d].alerts ?
                                <View>
                                    <Text style={{color: '#EA4C2F'}}>
                                        {Object.keys(restrictionsMapped[d].alerts).length} potential ingredients
                                    </Text>
                                </View>

                                : <Text>No alert detected</Text>
                            }
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        )
    }
}
import React from 'react';
import { Modal, View, Text, PickerIOS } from 'react-native';
import {List, ListItem, Avatar, Grid, Row, Col, Button} from 'react-native-elements';

import styles from '../styles'

var PickerItemIOS = PickerIOS.Item;

export default class PetitionModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {dr: 'dairy'}
    }

    render() {

        const drs = [
            {name: "dairy", img: require("../img/dairy.png")},
            {name: "egg", img: require("../img/eggs.png")},
            {name: "fish", img: require("../img/fish.png")},
            {name: "gluten", img: require("../img/warning-outline.png")},
            {name: "peanut", img: require("../img/peanuts.png")},
            {name: "sesame", img: require("../img/sesame.png")},
            {name: "shellfish", img: require("../img/shellfish.png")},
            {name: "soy", img: require("../img/soy.png")},
            {name: "tree nut", img: require("../img/treenuts.png")},
            {name: "wheat", img: require("../img/wheat.png")}
        ];

        const viewStyle = {marginLeft: 15, marginTop: 10, marginBottom: 10};

        return(
            <Modal
                animationType={"fade"}
                transparent={false}
                visible={this.props.showModal}
                onRequestClose={() => {alert("Modal has been closed.")}}>
                <View style={{flex: 1, justifyContent:'center', backgroundColor: '#44B8AE'}}>
                    <View style={viewStyle}>
                        <Text style={{fontSize:20, color:'#FFF'}}>Submit a dietary restriction for:</Text>
                        <Text style={{fontSize: 14, color:'#FFF'}}>{this.props.ingredient}</Text>
                    </View>

                    <View style={{backgroundColor: '#EFF4F4', marginBottom: 10, marginLeft: 15, marginRight:15}}>
                        <PickerIOS
                            selectedValue={this.state.dr}
                            onValueChange={(dr) => this.setState({dr: dr})}>

                            {drs.map((d, i) => (
                                <PickerItemIOS
                                    key={'picker' + i}
                                    value={d.name}
                                    label={d.name}/>
                            ))}
                        </PickerIOS>
                    </View>

                    <View>
                        <Button
                            title="Cancel"
                            style={{marginBottom: 10}}
                            color="#000"
                            backgroundColor="#F9F9F9"
                            onPress={this.props.hideModal}/>

                        <Button
                            title="Submit"
                            backgroundColor="#B1D25E"
                            onPress={() => {
                                var suggestion = {
                                    "accountId": this.props.accountId,
                                    "dr": this.state.dr,
                                    "suggestion": this.props.ingredient
                                }

                                this.props.makeSuggestion(suggestion);
                                this.props.hideModal();
                            }}/>
                    </View>

                    <View style={{marginTop: 10, marginLeft: 15, marginRight: 15}}>
                        <Text style={{fontSize: 16, color:'#FFF', textAlign: 'center'}}>
                            Thank you for helping us improve Eligo!
                        </Text>
                        <Text style={{fontSize: 16, color:'#FFF', textAlign: 'center'}}>
                            {'<3 Eligo Team'}
                        </Text>
                    </View>
                </View>
            </Modal>
      );
    }
}




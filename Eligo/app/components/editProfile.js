import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {List, ListItem, Avatar, Grid, Row, Col, Card, Divider} from 'react-native-elements'


import {
    changeProfileName,
    changeProfileEmail,
    getProfile
} from '../actions';

import styles from '../styles'

mapStateToProps = (state) => ({
     profile: state.profileReducer.profile
});

mapDispatchToProps = (dispatch) => ({
    getProfile: (profileID) => { dispatch(getProfile(profileID)); },
    changeProfileName: (newName) => { dispatch(changeProfileName(newName)); },
    changeProfileEmail: (newEmail) => { dispatch(changeProfileEmail(newEmail)); },
});

class DietaryRestriction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};

        this.checkActive = () => {
            return {
                color: this.state.checked ? "green" : "red"
            }
        }
    }

    _toggleDR = function(d) {
        console.log(d)
        this.setState({checked: !this.state.checked})
    }

    render() {
        return(
            <TouchableOpacity style={{margin: 10, alignItems: "center"}} onPress={() => {this._toggleDR(this.props.name)}}>
                <Row size={10}>
                    <Text style={this.checkActive()}>{this.props.name}</Text>
                </Row>

                <Row size={90}>
                    <Image source={this.props.img} style={{flex: 1, width: 50,height: 50,resizeMode: 'contain'}}/>
                </Row>
            </TouchableOpacity>
        )
    }
}


class EditProfile extends React.Component {
    static renderRightButton = (props) => {
          return (
              <TouchableHighlight onPress={() => console.log('attempt to save')}>
                  <Text style={styles.rightButton}>Save</Text>
              </TouchableHighlight>
          );
    }

    render() {
        const headerSectionSize = 20;
        const drSize = (100 - headerSectionSize) / 2;

        const { profile, changeProfileName, changeProfileEmail } = this.props;

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

        return (
            <View style={styles.editProfileContainer}>
                <Grid>
                    <Row size={headerSectionSize}>
                        <Col size={25}>
                            <Avatar
                                large
                                rounded
                                source={{uri: "https://c1.staticflickr.com/9/8598/16590802906_95dd43fa9a.jpg"}}
                                onPress={(text) => console.log('test')}
                                activeOpacity={0.7}
                            />
                        </Col>
                        <Col size={5}></Col>
                        <Col size={70}>
                            <TextInput
                                style={styles.loginInput}
                                placeholder="Name"
                                onChangeText={(text) => changeProfileName(text)}
                                returnKeyType="done"
                                value={profile.name}/>
                            <TextInput
                                style={styles.loginInput}
                                placeholder="Email"
                                autoCapitalize="none"
                                returnKeyType="done"
                                onChangeText={(text) => changeProfileEmail(text)}
                                value={profile.email}
                            />
                        </Col>
                    </Row>
                    <Row size={5}>
                        <Text>Dietary restrictions (allergy-based)</Text>

                    </Row>
                    <Row size={50}>
                        <ScrollView horizontal={true}>
                            {drs.map((d, i) => (
                                <DietaryRestriction key={d.name} name={d.name} img={d.img}/>
                            ))}

                        </ScrollView>
                    </Row>
                </Grid>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {List, ListItem, Avatar, Grid, Row, Col, Card, Divider} from 'react-native-elements'

import {
    fetchNewUser,
    getProfile
} from '../actions';

import styles from '../styles'

mapStateToProps = (state) => ({
     profile: state.profileReducer.profile
});

mapDispatchToProps = (dispatch) => ({
    getProfile: (profileID) => { dispatch(getProfile(profileID)); },
    fetchNewUser: (newUser) => { dispatch(fetchNewUser(newUser)); }
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
        this.props.onPress();
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


class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {first: '', last: '', drs: {}}
    }

    componentDidMount() {
        Actions.refresh({renderRightButton: this.renderRightButton});
    }


    processNewUser = function() {
        // Takes JSON object with “accountId”, “subUserId”, “first”, “last”, and “dr”
        var newUser = {
            "accountId": this.props.profile.accountId,
            "subUserId": this.props.profile.users.length,
            "first": this.state.first,
            "last": this.state.last,
            "dr": Object.keys(this.state.drs)
        };

        // console.log(this.props.profile);
        this.props.fetchNewUser(newUser);
        Actions.profiles();
    }

    renderRightButton = () => {
        return (
            <TouchableHighlight onPress={() => {this.processNewUser()}}>
                <Text style={styles.rightButton}>Add</Text>
            </TouchableHighlight>
        );
    }

    render() {
        const headerSectionSize = 20;
        const drSize = (100 - headerSectionSize) / 2;

        _changeProfileFirst = (t) => {
            this.setState({first: t});
        }

        _changeProfileLast = (t) => {
            this.setState({last: t});
        }

        _toggleDR = (t) => {
            let newDR = Object.assign({}, this.state.drs);
            newDR[t] = !newDR[t];
            if (!newDR[t]) {
                delete newDR[t];
            }

            this.setState({drs: newDR});
        }

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
                                placeholder="First name"
                                onChangeText={(text) => _changeProfileFirst(text)}
                                returnKeyType="done"
                                value={this.state.first}/>
                            <TextInput
                                style={styles.loginInput}
                                placeholder="Last name"
                                autoCapitalize="none"
                                returnKeyType="done"
                                onChangeText={(text) => _changeProfileLast(text)}
                                value={this.state.last}
                            />
                        </Col>
                    </Row>
                    <Row size={5}>
                        <Text>Dietary restrictions (allergy-based)</Text>

                    </Row>
                    <Row size={50}>
                        <ScrollView horizontal={true}>
                            {drs.map((d, i) => (
                                <DietaryRestriction key={d.name} name={d.name} img={d.img}
                                    onPress={() => {_toggleDR(d.name)}}/>
                            ))}
                        </ScrollView>
                    </Row>
                </Grid>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
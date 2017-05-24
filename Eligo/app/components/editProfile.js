import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, TouchableHighlight, Image, AlertIOS} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {List, ListItem, Avatar, Grid, Row, Col, Button} from 'react-native-elements'
import { ActionConst } from 'react-native-router-flux';


import {
    fetchNewUser,
    getProfile,
    fetchDeleteUser
} from '../actions';

import styles from '../styles'

mapStateToProps = (state) => ({
     profile: state.profileReducer.profile
});

mapDispatchToProps = (dispatch) => ({
    getProfile: (profileID) => { dispatch(getProfile(profileID)); },
    fetchNewUser: (newUser) => { dispatch(fetchNewUser(newUser)); },
    fetchDeleteUser: (dUser) => { dispatch(fetchDeleteUser(dUser)); }
});

class DietaryRestriction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: this.props.checked ? this.props.checked : false};

        this.checkActive = () => {
            return this.state.checked ? "#EA4C2F" : "#000"
        }
    }

    _toggleDR = function(d) {
        this.props.onPress();
        this.setState({checked: !this.state.checked})
    }

    render() {
        return(
            <TouchableOpacity style={{marginRight: 10, alignItems: "center"}} onPress={() => {this._toggleDR(this.props.name)}}>
                {/*<Row size={10}>*/}
                    <Text style={{color: this.checkActive()}}>{this.props.name}</Text>
                {/*</Row>*/}

                {/*<Row size={90}>*/}
                    <Image source={this.props.img} style={{flex: 1, width: 50,height: 50,resizeMode: 'contain', tintColor: this.checkActive()}}/>
                {/*</Row>*/}
            </TouchableOpacity>
        )
    }
}


class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        const selectedUser = this.props.profile.users[this.props.userIndex];
        let drs = {};
        selectedUser.dr.forEach((d) => {
            drs[d] = true;
        });
        this.state = {first: selectedUser.first, last: selectedUser.last, drs: drs};
    }

    componentDidMount() {
        Actions.refresh({renderRightButton: this.renderRightButton});
    }


    processNewUser = function() {
        // Takes JSON object with “accountId”, “subUserId”, “first”, “last”, and “dr”
        var newUser = {
            "accountId": this.props.profile.accountId,
            "subUserId": this.props.userIndex,
            "first": this.state.first,
            "last": this.state.last,
            "dr": Object.keys(this.state.drs)
        };

        // THIS IS THE CORRECT WAY TO NAVIGATE BACK TO LISTS - https://stackoverflow.com/questions/42429213

        this.props.fetchNewUser(newUser);
        setTimeout(() => {
            Actions.pop();
            Actions.profiles();
        }, 250);
    }

    renderRightButton = () => {
        return (
            <TouchableHighlight onPress={() => {this.processNewUser()}}>
                <Text style={styles.rightButton}>Save</Text>
            </TouchableHighlight>
        );
    }

    render() {
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

        console.log(this.props.userIndex);
        return (
            <View style={styles.editProfileContainer}>
                <Grid>
                    <Row size={20}>
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
                        <Text style={{fontWeight: 'bold'}}>Dietary restrictions (allergy-based)</Text>
                    </Row>
                    <Row size={20}>
                        <ScrollView horizontal={true} style={{backgroundColor: '#F9F9F9', padding: 5}}>
                            {drs.map((d, i) => (
                                <DietaryRestriction key={d.name} name={d.name} img={d.img}
                                    onPress={() => {_toggleDR(d.name)}} checked={this.state.drs[d.name]}/>
                            ))}
                        </ScrollView>
                    </Row>

                    <Row size={55}>

                    </Row>
                </Grid>
                {/*TODO for some reason the button disappears after new user added*/}
                {
                    this.props.userIndex != 0 ?
                        <Button
                        title='DELETE USER'
                        backgroundColor="#EA4C2F"
                        onPress={() => {
                            AlertIOS.prompt(
                                'Are you sure?',
                                'Press ok to delete user',
                                [
                                {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                                {text: 'OK', onPress: () => {
                                    var deleteData = {
                                        "accountId": this.props.profile.accountId,
                                        "subUserId": this.props.userIndex
                                    };

                                    this.props.fetchDeleteUser(deleteData);
                                    setTimeout(() => {
                                        Actions.pop();
                                        Actions.profiles();
                                    }, 250);
                                }},
                                ],
                                'default'
                                );
                            }}/> : <Text>{this.props.userIndex}</Text>
                }

            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
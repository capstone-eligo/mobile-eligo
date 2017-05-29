import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, TouchableHighlight, Image, AlertIOS} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {List, ListItem, Avatar, Grid, Row, Col, Button} from 'react-native-elements';
import DietaryRestriction from './dietaryRestriction';

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


class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        const selectedUser = this.props.profile.users[this.props.userIndex];
        let drs = {};
        if (selectedUser.dr) {
            selectedUser.dr.forEach((d) => {
                drs[d] = true;
            });
        }
        this.state = {
            first: selectedUser.first,
            last: selectedUser.last,
            drs: drs,
            pic: selectedUser.image
        };
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
            "dr": Object.keys(this.state.drs),
            "image": this.state.pic
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

    openImagePicker = () => {
        var ImagePicker = require('react-native-image-picker');

        var options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            },
            quality: 0,
            allowsEditing: true,
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // let source = { uri: response.uri };

                let source = 'data:image/jpeg;base64,' + response.data;
                this.setState({pic: source})
            }
        });
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

        return (
            <View style={styles.editProfileContainer}>
                <Grid>
                    <Row size={20}>
                        <Col size={25}>
                            <Avatar
                                large
                                rounded
                                title={this.state.first.substring(0, 1) + this.state.last.substring(0, 1)}
                                source={this.state.pic && this.state.pic != "no image" ? {uri: this.state.pic} : null}
                                onPress={this.openImagePicker}
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
                            }}/> : <Text></Text>
                }

            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
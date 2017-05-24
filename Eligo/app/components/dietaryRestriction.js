import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

export default class DietaryRestriction extends React.Component {
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
                <Text style={{color: this.checkActive()}}>{this.props.name}</Text>
                <Image source={this.props.img} style={{flex: 1, width: 50,height: 50,resizeMode: 'contain', tintColor: this.checkActive()}}/>
            </TouchableOpacity>
        )
    }
}
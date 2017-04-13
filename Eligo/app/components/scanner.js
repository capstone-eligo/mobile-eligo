import React from 'react';
import { View, Text, TextInput, TouchableHighlight, TouchableOpacity, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { addToCount } from '../actions';

import styles from '../styles'
import Camera from 'react-native-camera'

mapStateToProps = (state) => ({ count: state.countReducer.count });

mapDispatchToProps = (dispatch) => ({
    addCount: (count) => {
        dispatch(addToCount(count));
    },
});

class Scanner extends React.Component {
    // showBarcode(data, bounds) {
    //     AlertIOS.alert(
    //         'Barcode recognized',
    //         data.data)
    
    //     // this.props.navigation.navigate('Results', {barcode: data.data})
    // } 
    
    render() {
        const { count, addCount } = this.props;

        const showBarcode = (data, bounds) => { addCount(data.data); }

        console.log(this.props.count);
        return(
            <View style={ styles.cameraContainer }>
                <TouchableOpacity
                    style={ styles.welcomeButton }>
                    <Text>Barcode scanner</Text>
                </TouchableOpacity>

                <Camera 
                    ref={(cam) => {this.camera = cam;}}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    onBarCodeRead={showBarcode.bind(this)}>
                </Camera>
            </View>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
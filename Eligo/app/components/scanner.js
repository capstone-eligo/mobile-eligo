import React from 'react';
import { View, Text, TextInput, TouchableHighlight, TouchableOpacity, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { addBarcode } from '../actions';

import styles from '../styles'
import Camera from 'react-native-camera'

mapStateToProps = (state) => ({ barcodes: state.barcodeReducer.barcodes });

mapDispatchToProps = (dispatch) => ({
    addBarcode: (barcode) => {
        dispatch(addBarcode(barcode));
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
        const { barcodes, addBarcode } = this.props;

        const showBarcode = (data, bounds) => { addBarcode(data.data); }

        return(
            <View style={ styles.cameraContainer }>
                <TextInput
                    style={styles.cameraInput}
                    placeholder="Search by Product Name/Barcode"
                />

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
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
    constructor(props) {
        super(props);
        this.state = {showCamera: true}
    }

    render() {
        const { barcodes, addBarcode } = this.props;

        const showBarcode = (data, bounds) => {
            this.setState({showCamera: false})
            addBarcode(data.data);

            Actions.results();
        }

        const showBarcodeTest = () => {
            Actions.results();
        }

        return(
            <View style={ styles.cameraContainer }>
                <TextInput
                    style={styles.cameraInput}
                    onChangeText={showBarcodeTest}
                    placeholder="Search by Product Name/Barcode"
                />

                {this.state.showCamera && <Camera
                    ref={(cam) => {this.camera = cam;}}
                    style={styles.preview}
                    onFocusChanged={() => {}}
                    defaultOnFocusComponent={true}
                    aspect={Camera.constants.Aspect.fill}
                    onBarCodeRead={showBarcode.bind(this)}>
                </Camera>}
            </View>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
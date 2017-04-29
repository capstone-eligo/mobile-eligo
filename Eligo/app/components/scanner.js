import React from 'react';
import { View, Text, TextInput, TouchableHighlight, TouchableOpacity, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { fetchBarcode } from '../actions';

import styles from '../styles'
import Camera from 'react-native-camera'

mapStateToProps = (state) => ({ barcodes: state.barcodeReducer.barcodes });

mapDispatchToProps = (dispatch) => ({
    fetchBarcode: (barcode) => {
        dispatch(fetchBarcode(barcode));
    },
});

class Scanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showCamera: true}
    }

    render() {
        const { barcodes, fetchBarcode } = this.props;

        const scanBarcode = (data, bounds) => {
            this.setState({showCamera: false})
            fetchBarcode(data.data);

            Actions.results();
        }

        const scanBarcodeTest = () => {
            Actions.results();
            fetchBarcode('posts');
        }

        const scanAgain = () => {this.setState({showCamera: true})};

        return(
            <View style={ styles.cameraContainer }>
                <TextInput
                    style={styles.cameraInput}
                    onChangeText={scanBarcodeTest}
                    placeholder="Search by barcode number"
                />

                {this.state.showCamera && <Camera
                    ref={(cam) => {this.camera = cam;}}
                    style={styles.preview}
                    onFocusChanged={() => {}}
                    defaultOnFocusComponent={true}
                    aspect={Camera.constants.Aspect.fill}
                    onBarCodeRead={scanBarcode.bind(this)}>
                </Camera>}

                {!this.state.showCamera &&
                <View style={styles.showCameraContainer}>
                    <TouchableOpacity onPress={scanAgain}>
                        <Text>Scan another</Text>
                    </TouchableOpacity>
                </View>
                }
            </View>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
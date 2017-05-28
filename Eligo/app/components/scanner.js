import React from 'react';
import { View, Text, TextInput, TouchableHighlight, TouchableOpacity, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

import { fetchBarcode } from '../actions';

import styles from '../styles'
import Camera from 'react-native-camera'

mapStateToProps = (state) => ({ barcodes: state.barcodeReducer.barcodes, profile: state.profileReducer.profile });

mapDispatchToProps = (dispatch) => ({
    fetchBarcode: (barcode, accountId) => {
        dispatch(fetchBarcode(barcode, accountId));
    },
});

class Scanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showCamera: true}
    }

    componentDidMount() {
        Actions.refresh({renderRightButton: this.renderRightButton});
    }

    showHistory = function() {
        if (this.props.profile.history) {
            Actions.history({
                history: this.props.profile.history,
                parseBarcode: this.props.fetchBarcode,
                accountId: this.props.profile.accountId
                });
        } else {
            AlertIOS.alert(
                'No history',
                'Scan a product to create a history!'
            );
        }
    }

    renderRightButton = () => {
        return (
            <TouchableHighlight onPress={() => {this.showHistory()}}>
                <Text style={styles.rightButton}>History</Text>
            </TouchableHighlight>
        );
    }

    render() {
        const { barcodes, fetchBarcode } = this.props;
        const { accountId } = this.props.profile;

        const scanBarcode = (data, bounds) => {
            this.setState({showCamera: false})
            fetchBarcode(data.data, accountId);

            Actions.results();
        }

        const scanBarcodeTest = () => {
            fetchBarcode('038000356216', accountId);
            Actions.results();
        }

        const scanAgain = () => {this.setState({showCamera: true})};

        return(
            <View style={ styles.cameraContainer }>
                <TextInput
                    style={styles.cameraInput}
                    onSubmitEditing={scanBarcodeTest}
                    returnKeyType="done"
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
                    <Button title="Scan another" backgroundColor="#44B8AE" onPress={scanAgain}/>
                </View>
                }
            </View>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
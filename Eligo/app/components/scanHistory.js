import React from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, List, ListItem } from 'react-native-elements';

import styles from '../styles'
// import Camera from 'react-native-camera'

mapStateToProps = (state) => ({});

mapDispatchToProps = (dispatch) => ({
    // fetchBarcode: (barcode, accountId) => {
    //     dispatch(fetchBarcode(barcode, accountId));
    // },
});

class ScanHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Object.keys(this.props.history).forEach((h, i) => {
        //     let product = this.props.history[h];

        //     let date = new Date(product.dateTime);
        //     console.log(date);
        // });

        const revHistory = Object.keys(this.props.history).reverse();

        return(
            <View style={ styles.container }>
                <ScrollView>
                    <List
                        containerStyle={{
                        marginBottom: 20,
                        marginTop: 0
                    }}>
                        {
                            revHistory.map((h, i) => {

                            const product = this.props.history[h];
                            const time = new Date(product.dateTime);
                            const timeString = `${time.getMonth() + 1}/${time.getDate()} - ${time.getHours()}:${(time.getMinutes()<10?'0':'') + time.getMinutes()}`;
                            return (
                                <ListItem
                                    key={product.name + '_history' + i}
                                    title={product.name}
                                    subtitle={timeString}
                                    onPress={() => {
                                        this.props.parseBarcode(product.upc, this.props.accountId, this.props.compare ? true : false);

                                        if (this.props.compare) {
                                            {/*Actions.results({moveToTab: 3});*/}
                                            Actions.pop();
                                        } else {
                                            Actions.results();
                                        }
                                    }}/>
                            )
                        })}

                    </List>
                </ScrollView>
            </View>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScanHistory);
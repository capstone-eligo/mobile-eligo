import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking, Image} from 'react-native';
import {Card, Divider, Button, Row, Col, Icon} from 'react-native-elements'

import {Actions} from 'react-native-router-flux';

import styles from '../styles'

export default class OnboardOne extends React.Component {
    render() {
        const cardDividerStyle = {height: 0}
        const cardTitleStyle = {textAlign: 'left', marginBottom: 0, color: '#FFF'}
        const cardContainerStyle = {backgroundColor: '#44B8AE', borderWidth: 0, shadowRadius: 0, shadowColor: '#44B8AE'}
        const cardTextStyle = {color: '#FFF'}

        return(
            <View style={{flex: 1, backgroundColor:'#44B8AE'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
                    <Image source={require('../img/eligo_4_tp.png')} style={{width: 2689 / 20, height: 1704 / 20}}/>
                </View>

                <ScrollView style={{marginTop: 5}}>
                    <Card title="Step 1: Add restrictions"
                        dividerStyle={cardDividerStyle}
                        titleStyle={cardTitleStyle}
                        containerStyle={cardContainerStyle}>

                        <Row>
                            <Col size={20}>
                                <Icon
                                size={45}
                                name='create'
                                color='#fff'/>
                            </Col>
                            <Col size={80}>
                                <Text style={cardTextStyle}>Input dietary restrictions for yourself and friends as well as family members</Text>
                            </Col>
                        </Row>
                    </Card>

                    <Card title="Step 2: Scan products"
                        dividerStyle={cardDividerStyle}
                        titleStyle={cardTitleStyle}
                        containerStyle={cardContainerStyle}>
                        <Row>
                            <Col size={20}>
                                <Icon
                                size={45}
                                name='crop-free'
                                color='#fff'/>
                            </Col>
                            <Col size={80}>
                                <Text style={cardTextStyle}>Scan food products and get an overview of the product’s nutritional contents</Text>
                            </Col>
                        </Row>
                    </Card>

                    <Card title="Step 3: See conficts"
                        dividerStyle={cardDividerStyle}
                        titleStyle={cardTitleStyle}
                        containerStyle={[cardContainerStyle, {marginBottom: 20}]}>
                        <Row>
                            <Col size={20}>
                                <Icon
                                size={45}
                                name='local-dining'
                                color='#fff'/>
                            </Col>
                            <Col size={80}>
                                <Text style={cardTextStyle}>Immediately see what conflicts with the dietary restriction(s) of someone you are shopping for</Text>
                            </Col>
                        </Row>
                    </Card>

                    <Button
                        buttonStyle={{backgroundColor: '#B1D25E'}}
                        fontWeight="bold"
                        title='Create your profile now!'
                        onPress={() => {Actions.addUser({initialSetup: true})}}/>
                </ScrollView>

                <View style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
                    <Text style={{fontSize:12, color: '#fff', textAlign: 'center'}}>
                        By creating an account, you agree to our
                        <Text style={{color: '#A9DBD7'}} onPress={() => {Actions.terms()}}> Terms and Agreements</Text> and
                        <Text style={{color: '#A9DBD7'}} onPress={() => {Actions.privacy()}}> Privacy policy</Text>
                    </Text>
                </View>
            </View>
      );
    }
}

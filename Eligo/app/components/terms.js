import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Button, Avatar, Grid, Row, Col, ButtonGroup} from 'react-native-elements'

import {Actions} from 'react-native-router-flux';
import { ActionConst } from 'react-native-router-flux';


import styles from '../styles'

export default class Terms extends React.Component {

    render() {
        return(
            <ScrollView style={styles.container}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur lobortis at ante at tempor. Nulla maximus, sapien
                    vehicula accumsan aliquam, neque urna mattis lorem, ut rhoncus
                    enim nunc eget erat. Aliquam quis viverra enim. Phasellus at
                    augue condimentum, imperdiet dui ut, vestibulum est. Suspendisse
                    interdum sit amet metus porta elementum. Etiam gravida, tortor
                    nec dictum maximus, massa tortor fermentum magna, ac vehicula
                    elit arcu vel neque. Sed aliquet porttitor neque, quis facilisis
                    leo auctor non. Suspendisse erat magna, pretium ut tincidunt
                    sit amet, iaculis at neque. Phasellus in dignissim velit.
                    Morbi ultrices ligula nec tempor pharetra. Cras imperdiet
                    posuere nunc, vel feugiat ante vestibulum eu. Nullam at laoreet
                    dui. Mauris justo purus, condimentum sed eros nec, suscipit
                    feugiat neque. Nam aliquam fermentum cursus.</Text>
            </ScrollView>
      );
    }
}

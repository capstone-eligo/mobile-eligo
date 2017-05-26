import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Button, Avatar, Grid, Row, Col, ButtonGroup} from 'react-native-elements'

import {Actions} from 'react-native-router-flux';

import styles from '../styles'

export default class Privacy extends React.Component {

    render() {
        return(
            <ScrollView style={styles.container}>
                <Text>Last updated on May 26, 2017.</Text>
                <Text></Text>

            <Text>Thank you for choosing to use Eligo (“we” “us” “our” or “Eligo”)!</Text>
            <Text></Text>

            <Text>This is our privacy policy.</Text>
            <Text></Text>
            

            <Text>Eligo is committed to protecting your privacy. This Privacy Policy applies to the Eligo App 
                and Content  (collectively the "Services”) and governs data collection and usage. By using the 
                Services, you consent to the data practices described in this statement.</Text>
                <Text></Text>

            <Text>By submitting personally identifiable information (“PII”) through our Services, you agree 
                to the terms of this Privacy Policy and you expressly consent to the processing of your PII in 
                accordance with our Privacy Policy.</Text>
                <Text></Text>

            <Text style={{fontWeight: 'bold'}}>COLLECTION AND USE OF YOUR INFORMATION</Text>
            <Text>Activity and log data. We automatically store information related to your use of the Services. 
                We also log the products you scan, view, and other actions you perform while using the Services. 
                We use this type of information to administer the Services and provide the highest possible level 
                of service to you. We also use this information in the aggregate to perform statistical analyses 
                of user behavior and characteristics in order to measure interest in and use of the various areas 
                of the Services.</Text>
                <Text></Text>

            <Text>Facebook. While your information is used to create an Eligo account, Eligo will not post to your 
                Facebook and will only use Facebook as a means for authentication into the Eligo service.</Text>
                <Text></Text>

            <Text>Feedback. You should feel free to give us feedback, register a complaint, or ask questions about 
                the Services. We may store your communications, including any personal information you include in 
                them, so that we can effectively respond to you.</Text>
                <Text></Text>

            <Text style={{fontWeight: 'bold'}}>ADDITIONAL MATTERS</Text>
            <Text>Legal Disclaimer. We reserve the right to disclose your PII as required by law and when we believe 
                that disclosure is necessary to protect our rights (or those of our Services users) and/or to comply 
                with a judicial proceeding, court order, or legal process served on our Services.</Text>
                <Text></Text>

            <Text>Affiliates. Although we currently do not have a parent company, any subsidiaries, joint ventures, 
                or other companies under a common control (collectively, "Affiliates"), we may in the future. If 
                another company acquires our company or our assets, that company will possess the PII collected by 
                it and us and will assume the rights and obligations regarding your PII as described in this Privacy 
                Policy.</Text>
                <Text></Text>

            <Text>Disclosure to Third Party Service Providers. We may share your PII with potential third party service 
                providers to provide you with the Services. Except as otherwise stated in this Privacy Policy, these 
                third party service providers are required not to use your PII other than to provide the services 
                requested by us. You expressly consent to the sharing of your PII with our service providers for the 
                sole purpose of providing services to you.</Text>
                <Text></Text>

            <Text>Marketing. We do not share your PII with third parties for promotional purposes.</Text>
            <Text></Text>

            <Text style={{fontWeight: 'bold'}}>DATA RETENTION </Text>
            <Text>We will retain your information for as long as your account is active or as needed to provide you 
                services. If you wish to cancel your account or request that we no longer use your information to provide 
                you services contact us at eligoteam@gmail.com. We will retain and use your information as necessary to 
                comply with our legal obligations, resolve disputes, and enforce our agreements.</Text>
                <Text></Text>

            <Text style={{fontWeight: 'bold'}}>SECURITY</Text>
            <Text>The security of your PII is important to us. We follow generally accepted industry standards to protect 
                the personally identifiable information submitted to us, both during transmission and once we receive 
                it. No method of transmission over the Internet, or method of electronic storage, is perfectly secure, 
                however. Therefore, while we strive to use commercially acceptable means to protect your PII, we cannot 
                guarantee its absolute security.</Text>
                <Text></Text>

            <Text style={{fontWeight: 'bold'}}>CHANGES IN THIS PRIVACY POLICY</Text>
            <Text>If we decide to change our privacy practices, we will post those changes to this Privacy Policy and 
                other places we deem appropriate so that you are aware of what information we collect, how we use it, and 
                under what circumstances, if any, we disclose it.</Text>
                <Text></Text>

            <Text>We reserve the right to modify this Privacy Policy at any time, so please review it frequently. 
                If we change how we use your personally identifiable information, we will notify you here, by email, 
                or by means of a notice on our home page.</Text>
                <Text></Text>

            <Text style={{fontWeight: 'bold'}}>QUESTIONS</Text>
            <Text>Any questions about this Privacy Policy should be addressed to teameligo@gmail.com.</Text>
            </ScrollView>
      );
    }
}
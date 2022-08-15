import React from "react";
import {View, Text, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#2196F3'
    },
    text: {
        fontSize: 25,   
        textAlign: 'center',
        color: '#fff'
    }
});


const Header = ({title}) => {
    return (
        <View style={styles.header} >
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}



export default Header;
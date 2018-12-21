import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>MoviePedia</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        backgroundColor:'#2980b9',
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 26,
        fontFamily: 'Colourbars-Bold',
        letterSpacing: 4
    }
});

export default header;
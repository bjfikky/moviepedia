import React from 'react';
import {View, StyleSheet, Text} from 'react-native'


const MovieCard = () => {
    return (
        <View style={styles.cardContainer}>
            <Text>Movie Card</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    cardContainer: {
        padding: 5
    }
});

export default MovieCard;
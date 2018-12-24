import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native'


const MovieCard = () => {
    return (
        <View style={styles.cardContainer}>
            <View>
                <Image style={styles.cover} source={{uri: 'https://via.placeholder.com/300'}}/>
            </View>

            <View style={styles.movieDetails}>
                <Text style={styles.movieTitle}>Movie Title</Text>
                <Text>Release Date: Dec 23, 2018</Text>
                <Text>Rating:</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    cardContainer: {
        padding: 5,
        flexDirection: 'row',
        borderWidth: 0.5,
        marginBottom: 8,
        marginTop: 8,
        borderColor: '#2980b9',
        borderRadius: 10
    },
    cover: {
        height: 100,
        width: 100
    },
    movieDetails: {
        flexDirection: 'column',
        marginHorizontal: 10
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: '600'
    }
});

export default MovieCard;
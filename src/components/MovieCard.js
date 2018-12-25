import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native'
import moment from 'moment'


const MovieCard = (props) => {
    return (
        <View style={styles.cardContainer}>
            <View>
                <Image style={styles.cover} source={{uri: `https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`}}/>
            </View>

            <View style={styles.movieDetails}>
                <Text style={styles.movieTitle}>{props.movie.title}</Text>
                <Text>Release Date: {formatDate(props.movie.release_date)}</Text>
                <Text>Rating:</Text>
            </View>
        </View>
    );
};


const formatDate = (unformattedDate) => {
    let m = moment(unformattedDate, 'YYYY-MM-DD');
    return m.format('MMM DD, YYYY')
}


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
        width: 100,
        resizeMode: 'center'
    },
    movieDetails: {
        flexDirection: 'column',
        marginHorizontal: 10,
        flex: 1
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: '600',
        width: '100%'
    }
});

export default MovieCard;
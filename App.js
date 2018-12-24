import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, SafeAreaView, View, ScrollView, ListView} from 'react-native';
import axios from 'axios';

import Header from './src/components/Header'
import SearchBar from './src/components/SearchBar'
import MovieCard from './src/components/MovieCard'


export default class App extends Component<Props> {
    state = {
        movies: []
    };


    componentWillMount() {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=28a429a8859ea5b4c73798bec5c54fd0')
            .then(response => {
                this.setState({movies: response.data.results});
            })
    }

    render() {
        return (
            <Fragment>
                <SafeAreaView style={{ flex:0, backgroundColor: '#2980b9'}} />
                <SafeAreaView style={styles.container}>

                        <Header/>

                        <SearchBar/>

                        <View style={styles.moviesList}>
                            <Text style={styles.listTitle}>
                                Trending Movies:
                            </Text>

                            <ScrollView>
                                {this.renderMovieCard()}
                            </ScrollView>
                        </View>

                </SafeAreaView>
            </Fragment>
        );
    }


    renderMovieCard = () => {
        return this.state.movies.map((movie, index) => {
            console.log(movie)
            return (
                <MovieCard key={index} movie={movie}/>
            )
        })
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        width: '100%'
    },
    listTitle: {
        fontSize: 22,
        marginVertical: 10,
    },
    moviesList: {
        paddingHorizontal: 7,
        flex: 1
    }
});

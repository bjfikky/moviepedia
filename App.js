import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';

import Header from './src/components/Header'
import SearchBar from './src/components/SearchBar'


export default class App extends Component<Props> {
    render() {
        return (
            <Fragment>
                <SafeAreaView style={{ flex:0, backgroundColor: '#2980b9'}} />
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Header/>
                        <SearchBar/>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    }
});

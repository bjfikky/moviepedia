import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'

const SearchBar = () => {
    return (
        <View>
            <TextInput style={styles.searchInput} placeholder={'Movie Title'}/>
        </View>
    );
};


const styles = StyleSheet.create({
    searchInput: {
        borderColor: '#2980b9',
        borderWidth: 1,
        height: 45,
        fontSize: 20,
        padding: 5,
        marginLeft: 7,
        marginRight: 7,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10
    }
})

export default SearchBar;
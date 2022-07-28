import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { UserContext } from '../../store/store'

export default function MyPageScreen (props) {
    const context = useContext(UserContext)

    useEffect(() => {

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View>
              <Text>{`useContext:token:${context.state.token}`}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth:0.5
    },
    title: {
        fontSize: 24,
    },
})

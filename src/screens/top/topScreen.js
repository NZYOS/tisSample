import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { UserContext } from '../../store/store'

export default function TopScreen(props) {
    const context = useContext(UserContext)
    const [tenantList, setTenantList] = useState([])

    useEffect(() => {
        setTenantList(['tenant1','tenant2','tenant3','tenant4','tenant5'])
    }, [])

    const renderItem = ({ item }) => {    
        return (
          <Item
            item={item}
            onPress={() => {props.navigation.navigate('tenantDetailScreen',{tenant:item})}}
          />
        );
      };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tenantList}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
            <View>
              <Text>{`useContext:token:${context.state.token}`}</Text>
            </View>
        </SafeAreaView>
    );
}

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.item]}>
        <Text style={[styles.title]}>{item}</Text>
      </View> 
    </TouchableOpacity>
  );

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

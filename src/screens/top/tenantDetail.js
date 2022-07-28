import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

export default function TenantDetailScreen(props) {
    const { tenant } = props.route.params;
    const [couponList, setCouponList] = useState([])

    useEffect(() => {
      setCouponList(['coupon1','coupon2','coupon3','coupon4','coupon5'])
    }, [])

    const renderItem = ({ item }) => {    
        return (
          <Item
            item={item}
            onPress={() => {}}
          />
        );
      };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tenantName}>
              <Text style={styles.title}>{'店舗名:'}</Text>
              <Text style={styles.title}>{tenant}</Text>
            </View>
            <FlatList
                data={couponList}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
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
    tenantName: {
      flexDirection:'row',
      paddingHorizontal:16,
    },
})

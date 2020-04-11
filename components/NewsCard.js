import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NewsCard = (props) => {

    const styles = StyleSheet.create({
        container: {
            width: "98%",
            height: 50,
            backgroundColor: props.item.authenticity?"rgba(49,158,50,0.5)":'rgba(236,36,21,0.5)',
            marginBottom: 5,
            alignSelf: "center",
            borderRadius: 5,
        },
        text:{
            paddingHorizontal: 5,
            fontSize: 18,
        },
    })

    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View>
                <Text style={styles.text} numberOfLines={1}>{props.item.news}</Text>
                <Text style={[styles.text, {fontSize: 14}]}>Date Recorded: {props.item.date}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default NewsCard
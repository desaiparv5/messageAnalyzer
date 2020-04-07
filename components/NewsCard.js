import React, {useEffect} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NewsCard = (props) => {

    const styles = StyleSheet.create({
        container: {
            width: "98%",
            height: 50,
            backgroundColor: props.item.authenticity?'rgba(236,36,21,0.5)':"rgba(49,158,50,0.5)",
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
            <Text style={styles.text} numberOfLines={2}>{props.item.news}</Text>
        </TouchableOpacity>
    );
}
export default NewsCard
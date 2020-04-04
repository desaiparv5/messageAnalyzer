import React, {useEffect} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NewsCard = (props) => {

    useEffect(()=>{
        //console.log(props)
    },[])

    const styles = StyleSheet.create({
        container: {
            width: "98%",
            height: 50,
            backgroundColor: props.item.authenticity?"red":"green",
            marginBottom: 5,
            alignSelf: "center",
        },
        text:{
            paddingHorizontal: 5,
        },
    })

    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.text} numberOfLines={2}>{props.item.news}</Text>
        </TouchableOpacity>
    );
}
export default NewsCard
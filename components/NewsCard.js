import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const NewsCard = (props) => {

    const[newsItem,setNewsItem] = useState(props.item)

    useEffect(()=>{
    },[])

    return(
        <TouchableOpacity onPress={props.onPress}>
            {props.item.authenticity==null?
                <VoteCard news={newsItem.news} date={newsItem.date} real={newsItem.real} fake={newsItem.fake} />:
                <AuthenticCard news={newsItem.news} date={newsItem.date} authenticity={newsItem.authenticity} />
            }
        </TouchableOpacity>
    );
}

const VoteCard = (props) => {
    const endx = props.real/(props.real+props.fake)
    return(
        <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: endx, y: 0}}
            locations={[endx, 1]}
            colors={['rgba(49,158,50,0.5)', 'rgba(236,36,21,0.5)']}
            style={styles.container}>
                <Text style={styles.text} numberOfLines={1}>{props.news}</Text>
                <Text style={[styles.text, {fontSize: 14}]}>Date Recorded: {props.date}</Text>
        </LinearGradient>
    )
}

const AuthenticCard = (props) => {
    return(
        <View style={[styles.container, {backgroundColor: props.authenticity?'rgba(49,158,50,0.5)':'rgba(236,36,21,0.5)'}]}>
            <Text style={styles.text} numberOfLines={1}>{props.news}</Text>
            <Text style={[styles.text, {fontSize: 14}]}>Date Recorded: {props.date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "98%",
        height: 50,
        marginBottom: 5,
        alignSelf: "center",
        borderRadius: 5,
    },
    text:{
        paddingHorizontal: 5,
        fontSize: 18,
    },
})

export default NewsCard
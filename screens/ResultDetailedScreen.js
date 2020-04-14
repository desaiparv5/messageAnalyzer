import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResultDetailedScreen = ({route, navigation}) => {

    const[newsItem, setNewsItem] = useState({})

    useEffect(()=>{
        setNewsItem(route.params.news)
    },[])

    return(
        <View style={styles.container}>
            {/* <View style={styles.fakeContainer}>
                <Text style={[styles.fakeTextStyles, {color: newsItem.authenticity?"green":"red"}]}>{newsItem.authenticity?"Real":"Fake"}</Text>
            </View> */}
            <View style={styles.dateContainer}>
                <Text style={styles.textStyles}>Recorded on date: {newsItem.date}</Text>
            </View>
            <View style={styles.newsContainer}>
                <Text style={styles.textStyles}>News:</Text>
                <Text style={styles.textStyles}>{newsItem.news}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        borderWidth: 1,
        borderColor: 'gray'
    },
    dateContainer: {},
    fakeContainer:{},
    textStyles: {
        fontSize: 16,
    },
    container: {
        paddingTop: 5,
        paddingHorizontal: 10,
    },
    fakeTextStyles: {
        fontWeight: 'bold',
        fontSize: 30
    },
})

export default ResultDetailedScreen
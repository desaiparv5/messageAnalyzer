import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const ResultDetailedScreen = ({route, navigation}) => {

    const[newsItem, setNewsItem] = useState({})

    useEffect(()=>{
        setNewsItem(route.params.news)
    },[])

    return(
        <View>
            <Text>{newsItem.news}</Text>
            <Text>First seen on date: {newsItem.dateAdded}</Text>
            <Text>Fake che? {newsItem.authenticity?"Haa fake che":"Naa fake nathi"}</Text>
        </View>
    )
}
export default ResultDetailedScreen
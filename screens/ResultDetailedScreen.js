import React from 'react'
import { View, Text } from 'react-native'

const ResultDetailedScreen = ({route, navigation}) => {
    return(
        <View>
            <Text>{route.params.news.news}</Text>
            <Text>First seen on date: {route.params.news.dateAdded}</Text>
            <Text>Fake che? {route.params.news.authenticity?"Haa fake che":"Naa fake nathi"}</Text>
        </View>
    )
}
export default ResultDetailedScreen
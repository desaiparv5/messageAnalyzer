import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ContributionScreen = ({navigation}) => {

    const [languageList, setLanguageList] = useState([])

    const getLanguages = async() => {
        await setLanguageList([
            {"key":"en", "language":"English"},
            {"key":"gu", "language":"ગુજરાતી"},
            {"key":"hi", "language":"हिन्दी"},
            {"key":"es", "language":"Española"},
            {"key":"kn", "language":"ಕನ್ನಡ"},
            {"key":"ma", "language":"मराठी"},
            {"key":"ch", "language":"中文"},
            {"key":"ml", "language":"മലയാളം"},
            {"key":"pj", "language":"ਪੰਜਾਬੀ"},
            {"key":"tl", "language":"தமிழ்"},
        ])
    }

    useEffect(()=>{
        getLanguages()
    },[])

    return(
        <View style={styles.container}>
            <Text style={{paddingLeft: 5,fontSize: 24, paddingVertical: 15, color: '#064789', fontWeight: "bold", borderBottomWidth: 1}}>
                Choose your language
            </Text>
            <FlatList 
                data={languageList}
                keyExtractor={item=>item.key}
                renderItem={({item, index, separators})=>{
                    return (<ListItem key={index} item={item} onPress={()=>{navigation.navigate('ShowNews', {key:item.key})}} />)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ebf2fa',
        flex: 1,
        justifyContent: "center",
    },
    Item: {
        paddingLeft: 5,
        height: 60,
        borderBottomWidth: 1,
        justifyContent: "center",
    }
})

const ListItem = (props) => {
    return(
        <TouchableOpacity
            onPress={props.onPress} 
            style={styles.Item}>
            <Text style={{fontSize: 20,}}>{props.item.language}</Text>
        </TouchableOpacity>
    )
}

export default ContributionScreen
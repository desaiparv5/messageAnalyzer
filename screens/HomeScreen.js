import React, {useState, useEffect} from 'react';
import {
  View,
  AppState,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {Icon} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast';

const HomeScreen = ({navigation}) => {
  const [copiedText, setCopiedText] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isActive, setIsActive] = useState(AppState.currentState);
  const [textInput, setTextInput] = useState('');
  const [keyBoardVisible, setKeyBoardVisible] = useState(false);

  const fetchClipboard = async () => {
    var text = await Clipboard.getString();
    setCopiedText(text);
  };

  const handleStateChange = nextAppState => {
    if (nextAppState === 'active') {
      fetchClipboard();
    } else if (nextAppState === 'background') {
      setIsActive(nextAppState);
    }
  };

  const keyBoardDown = () => {
    setKeyBoardVisible(false);
  };

  const keyBoardUp = () => {
    setKeyBoardVisible(true);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyBoardUp,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyBoardDown,
    );
    setIsActive(AppState.currentState);
    AppState.addEventListener('change', handleStateChange);
    fetchClipboard();

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.manualContainer}>
        <TextInput
          style={styles.InputBox}
          onChangeText={text => {
            setTextInput(text);
          }}
          value={textInput}
          placeholder="Or enter keywords here"
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            if (textInput.trim() === '') {
              setTextInput('');
              Toast.show('Please enter keywords');
            } else {
              navigation.navigate('ResultsScreen', {
                query: textInput.trim(),
                keywords: true,
              });
            }
          }}>
          <Icon name="send" type="material" size={26} color="#273469" />
        </TouchableOpacity>
      </View>
      <Text>Search from your Clipboard</Text>
      <ScrollView style={styles.clipBoard}>
        <Text>{copiedText}</Text>
      </ScrollView>
      {keyBoardVisible ? null : (
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            if (copiedText.trim() === '') {
              Toast.show('Nothing to search!!!');
            } else {
              navigation.navigate('ResultsScreen', {
                query: copiedText,
                keywords: false,
              });
            }
          }}>
          <Icon name="search" type="material" size={42} color="#EBF2FA" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  clipBoard: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'gray',
    width: '98%',
  },
  searchButton: {
    justifyContent: 'center',
    backgroundColor: '#273469',
    alignItems: 'center',
    position: 'absolute',
    height: 80,
    bottom: 5,
    width: 80,
    borderRadius: 40,
  },
  manualContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
  },
  InputBox: {
    width: '89%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  sendButton: {
    width: '11%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

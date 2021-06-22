import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';

class PostOrEditGuide extends React.Component {
  state = {
    email: '',
    password: ''
  }
  
  render() {
    return (
      <View>
       <Text>PostOrEditGuide</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  
});

export default PostOrEditGuide;

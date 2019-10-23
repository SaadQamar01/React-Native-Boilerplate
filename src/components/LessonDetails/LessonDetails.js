import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {View} from 'react-native';
import styles from './styles';

export default class CourseList extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>Course List</Text>
      </View>
    );
  }
}

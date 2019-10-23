import React, {Component} from 'react';
import {Button} from 'native-base';
import {View, Text} from 'react-native';
import styles from './styles';

export default class CourseDetails extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Button onPress={() => this.props.goLessonDes()} style={styles.about}>
          <Text style={styles.buttonText}>Go to Lesson description</Text>
        </Button>
      </View>
    );
  }
}

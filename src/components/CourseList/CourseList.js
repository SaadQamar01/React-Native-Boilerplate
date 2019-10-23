import React, {Component} from 'react';
import {Button, Tabs, Tab} from 'native-base';
import {View, Text} from 'react-native';
import styles from './styles';

export default class CourseList extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={{width: '80%', height: 300}}>
          <Tabs>
            <Tab heading="Courses">
              <View style={styles.content}>
                <Text>Courses</Text>
                <Button onPress={() => this.props.goCourseDes()}>
                  <Text style={styles.buttonText}>
                    Go to Course description
                  </Text>
                </Button>
              </View>
            </Tab>
            <Tab heading="MyCourses">
              <View style={styles.content}>
                <Text>My Courses</Text>
                <Button onPress={() => this.props.goCourseDes()}>
                  <Text style={styles.buttonText}>
                    Go to Course description
                  </Text>
                </Button>
              </View>
            </Tab>
          </Tabs>
        </View>
      </View>
    );
  }
}

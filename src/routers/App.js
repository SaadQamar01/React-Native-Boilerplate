import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CourseListContainer from './../containers/CourseListContainer';
import CourseDetailsContainer from './../containers/CourseDetailsContainer';
import LessonDetailsContainer from './../containers/LessonDetailsContainer';

const AppNavigator = createStackNavigator({
  CourseList: {
    screen: CourseListContainer,
    navigationOptions: {
      header: null,
    },
  },
  CourseDetails: {
    screen: CourseDetailsContainer,
    navigationOptions: () => ({
      title: 'Course Details',
    }),
  },
  LessonDetails: {
    screen: LessonDetailsContainer,
    navigationOptions: () => ({
      title: 'Lesson Details',
    }),
  },
});

export default createAppContainer(AppNavigator);

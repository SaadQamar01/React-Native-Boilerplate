import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators} from '../store/actions/index';
import {bindActionCreators} from 'redux';
import CourseDetails from './../components/CourseDetails/CourseDetails';

class CourseDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goLessonDes = () => {
    this.props.navigation.navigate('LessonDetails');
  };

  render() {
    return (
      <CourseDetails
        navigation={this.props.navigation}
        goLessonDes={this.goLessonDes}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseDetailsContainer);

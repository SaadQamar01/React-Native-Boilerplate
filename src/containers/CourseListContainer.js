import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators} from '../store/actions/index';
import {bindActionCreators} from 'redux';
import CourseList from './../components/CourseList/CourseList';

class CourseListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goCourseDes = () => {
    this.props.navigation.navigate('CourseDetails');
  };

  render() {
    return (
      <CourseList
        navigation={this.props.navigation}
        goCourseDes={this.goCourseDes}
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
)(CourseListContainer);

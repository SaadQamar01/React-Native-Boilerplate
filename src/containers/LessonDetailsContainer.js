import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators} from '../store/actions/index';
import {bindActionCreators} from 'redux';
import LessonDetails from './../components/LessonDetails/LessonDetails';

class LessonDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <LessonDetails navigation={this.props.navigation} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LessonDetailsContainer);

import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Loading from '../components/Loading/Loading';
import {connect} from 'react-redux';
// import {ActionCreators} from './../store/actions/index';
// import {bindActionCreators} from 'redux';
// import * as ActionTypes from './../store/actions/ActionTypes';

class LoadingContainer extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
    this.props.navigation.navigate(this.props.auth.token ? 'App' : 'Login');
  }
  render() {
    return <Loading navigation={this.props.navigation} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(ActionCreators, dispatch);
// };

export default connect(
  mapStateToProps,
  null,
)(LoadingContainer);

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import App from './AppNavigator';
import Loading from '../containers/LoadingContainer';
import Login from '../containers/LoginContainer';

const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    App: App,
    Login: Login,
  },
  {
    initialRouteName: 'Loading',
  },
);
export default createAppContainer(RootStack);

import React from 'react';
import {Provider} from 'react-redux';
import App from './routers/App';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import store from './store/index';
import {YellowBox} from 'react-native';

let persistor = persistStore(store);
YellowBox.ignoreWarnings([
  'Warning: Async Storage has been extracted from react-native core',
]);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;

import { registerRootComponent } from 'expo';

import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RealmProvider } from '@realm/react';
import { store } from './Redux/Store';
import persistStore from 'redux-persist/es/persistStore';
import MealSaved from './Local/SavedItem';
const persistor = persistStore(store)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const MainApp = () => {
    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            <RealmProvider schema={[MealSaved]}>
                <App/>
            </RealmProvider>
        </PersistGate>
    </Provider>
}
registerRootComponent(MainApp);

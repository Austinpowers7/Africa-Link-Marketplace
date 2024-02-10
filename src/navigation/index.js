import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';

import MainTabNavigator from './MainTabNavigator';


// Wrapping the App in a React Native Stack Navigator

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: 'whitesmoke'}}}>
        <Stack.Screen name='Homepage' component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
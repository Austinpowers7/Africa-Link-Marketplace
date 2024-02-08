import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplementedScreen from "../screens/NotImplementedScreen";
import Menu from "../screens/Menu";
import {Ionicons, Entypo } from'@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
   return (
     <Tab.Navigator initialRouteName="MENU"
        screenOptions={{
            tabBarStyle: { backgroundColor: 'whitesmoke' },
            headerStyle: { backgroundColor: 'whitesmoke' },
        }}
      >
       <Tab.Screen 
         name="Home" 
         component={NotImplementedScreen} 
         options={{ 
           tabBarIcon: ({ color, size}) => (
             <Ionicons name="home-outline" size={size} color={color} />
           ),
       }} 
       />
       <Tab.Screen 
         name="MENU" 
         component={Menu} 
         options={{ 
            tabBarIcon: ({ color, size}) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
        }} 
        />
       <Tab.Screen 
         name="Cart" 
         component={NotImplementedScreen} 
         options={{ 
            tabBarIcon: ({ color, size}) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
        }} 
        />
       <Tab.Screen 
         name="Account" 
         component={NotImplementedScreen} 
         options={({navigation}) => ({ 
            tabBarIcon: ({ color, size}) => (
              <Ionicons name="person-circle-sharp" size={size} color={color} />
            ),
            headerRight: () => (
                <Entypo
                onPress={() => navigation.navigate('Contacts')}
                name="new-message"
                size={18}
                color={"royalblue"}
                style={{ marginRight: 15 }}
                />
            ),
        })} 
        />
     </Tab.Navigator>
   )
}

export default MainTabNavigator;
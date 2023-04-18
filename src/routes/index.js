import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { StackRoutes } from "./stackRoute";
import { Favorites } from "../pages/favorites";

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#121212',

                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen 
                name="HomeTab"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused) { return <Ionicons name="home" color="#000" size={size} /> }
                        
                        return <Ionicons name="home" color={color} size={size} /> 
                    }
                }}
            >
            </Tab.Screen>
            <Tab.Screen 
                name="FavoritesTab" 
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused) { return <Ionicons name="heart" color="#ff4141" size={size} /> }
                        
                        return <Ionicons name="heart-outline" color={color} size={size} /> 
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}
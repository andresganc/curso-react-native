
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

// Tabs
import Favorites from '../screens/Favorites.jsx'
import TopRestaurants from '../screens/Top'
import Search from '../screens/Search'
import Account from '../screens/Account'
import Restaurants from '../screens/Restaurants'

// Stacks
import StackNavFavorites from './stack-nav-favorites'
import StackNavTop from './stack-nav-top'
import StackNavSearch from './stack-nav-search'
import StackNavAccount from './stack-nav-account'
import StackNavRestaurants from './stack-nav-restaurants'

const Tab = createBottomTabNavigator()

export default function Navigation() {

    const screenOptions = (route, color) => {
        let iconName

        switch (route.name) {

            case 'restaurants':
                iconName = 'compass-outline'
                break;

            case 'favorites':
                iconName = 'heart-outline'
                break;
                
            case 'top':
                iconName = 'star-outline'
                break;

            case 'search':
                iconName = 'magnify'
                break;

            case 'account':
                iconName = 'home-outline'
                break;
        
        }

        return(
            <Icon 
                type='material-community'
                name={iconName}
                size={22}
                color={color}
            />
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='restaurants'
                tabBarOptions={{
                    inactiveTintColor: '#a17dc3',
                    activeTintColor: '#4424B4'
                }}
                screenOptions={ ({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                }) }
                tabBarBackground='#424242'
            >
                <Tab.Screen 
                    name='restaurants'
                    component={StackNavRestaurants}
                    options={{ title: "Restaurante" }}
                />
                <Tab.Screen 
                    name='favorites'
                    component={StackNavFavorites}
                    options={{ title: "Favoritos" }}
                />
                <Tab.Screen 
                    name='top'
                    component={StackNavTop}
                    options={{ title: "Top 5" }}
                />
                <Tab.Screen 
                    name='search'
                    component={StackNavSearch}
                    options={{ title: "Buscar" }}
                />
                <Tab.Screen 
                    name='account'
                    component={StackNavAccount}
                    options={{ title: "Cuenta" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

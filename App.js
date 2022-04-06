import React, { Component} from 'react';

/* Importamos os recursos necessarios para nossa navegação */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons'

/* Importamos nossas páginas criadas para inserir dentro da navegação */
import Home from './src/pages/Home';
import LES from './src/pages/LES';
import VOEC from './src/pages/VOEC';
import LNS from './src/pages/LNS';


/* Criamos nosso navegador com a variavel Stack */
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  LES: {
    name: 'ios-heart-outline'
  },
  VOEC: {
    name: 'ios-heart-outline'
  },
  LNS: {
    name: 'ios-heart-outline'
  }
};

function App() {
  return(
    /* Abre container da navegação */
    <NavigationContainer>
      {/* Insere a navegação Stack dentro container */}
      <Tab.Navigator
         screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        })  }
      >


          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="VOEC" component={VOEC} />
          <Tab.Screen name="LES" component={LES} />
          <Tab.Screen name="LNS" component={LNS} />


        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './screens/login.screen';
import Listing from './screens/listing.screen';
import Detail from './screens/detail.screen';

const routes = {
  Login:{
    screen: Login,
    navigationOptions:{
      title:'Landing Screen'
    }
  },
  Listing:{
    screen: Listing,
    title:'Listing',
    navigationOptions:{
      title:'listing Screen'
    }
  },
  Detail:{
    screen: Detail,
    navigationOptions:{
      title:'Detail Screen'
    }
  }
}


StackNavigator(routes,{
  initialRouteName:'Login'
})







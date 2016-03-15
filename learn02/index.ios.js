/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import SimpleButton from './Components/SimpleButton';
import NoteScreen from './Components/NoteScreen';
import HomeScreen from './Components/HomeScreen';

var NavigationBarRouteMapper = {
     LeftButton: function(route, navigator, index, navState) {
       switch (route.name) {
         case 'createNote':
           return (
             <SimpleButton
               onPress={() => navigator.pop()}
               customText='Back'
              />
            );
        default:
           return null;
       }
     },
     RightButton: function(route, navigator, index, navState) {
        switch (route.name) {
          case 'home':
            return (
              <SimpleButton
                onPress={() => {
                  navigator.push({
                    name: 'createNote'
                  });
                }}
                customText='Create Note'
              />
            );
            break;
          default:
            return null;
        }
     },
     Title: function(route, navigator, index, navState) {
       switch (route.name) {
         case 'home':
           return (
             <Text>React Notes</Text>
           );
           break;
         case 'createNote':
           return(
             <Text>Create Note</Text>
           );
           return;
       }
     }
};
class learn02 extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
       case 'home':
         return (
            <HomeScreen />
        );
       case 'createNote':
         return (
             <NoteScreen />
         );
     }
  }
  render() {
    return (
      <Navigator
         initialRoute={{name: 'home'}}
         renderScene={this.renderScene}
         navigationBar={
           <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
           />
         }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

});

AppRegistry.registerComponent('learn02', () => learn02);

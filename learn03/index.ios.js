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
  Navigator,
  StatusBarIOS
} from 'react-native';

import SimpleButton from './Components/SimpleButton';
import NoteScreen from './Components/NoteScreen';
import HomeScreen from './Components/HomeScreen';
import _ from 'lodash';
var NavigationBarRouteMapper = {
     LeftButton: function(route, navigator, index, navState) {
       switch (route.name) {
         case 'createNote':
           return (
             <SimpleButton
               onPress={() => navigator.pop()}
               customText='Back'
               style={styles.navBarLeftButton}
               textStyle={styles.navBarButtonText}
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
                style={styles.navBarRightButton}
                textStyle={styles.navBarButtonText}
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
             <Text style={styles.navBarTitleText}>React Notes</Text>
           );
           break;
         case 'createNote':
           return(
             <Text style={styles.navBarTitleText}>Create Note</Text>
           );
           return;
       }
     }
};
class learn03 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          selectedNote: { title: '', body: '', id: ''},
          notes: {
              1: {title: 'Note 1', body: 'Body 1', id: 1},
              2: {title: 'Note 2', body: 'Body 2', id: 2}
          }
      };
      StatusBarIOS.setStyle('light-content');
    }

    updateNote(note) {
        var newNotes = Object.assign({}, this.state.notes);
        newNotes[note.id] = note;
        this.setState({notes:newNotes});
    }

    renderScene(route, navigator) {
        switch (route.name) {
           case 'home':
             return (
                <HomeScreen
                    navigator= { navigator }
                    notes= { _.toArray(this.state.notes)  }
                    onSelectNote={ (note) => navigator.push({name:"createNote", note: note}) }
                />
            );
           case 'createNote':
             return (
                 <NoteScreen
                     note={route.note || this.state.selectedNote}
                     onChangeNote={(note) => this.updateNote(note)}
                 />
             );
         }
    }

    render() {
        return (
          <Navigator
             initialRoute={{name: 'home'}}
             renderScene={ this.renderScene.bind(this) }
             navigationBar={
               <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper}
                style={ styles.navBar }
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
    alignItems: 'center'
  },
  navBar: {
    backgroundColor: '#5B29C1',
    borderBottomColor: '#48209A',
    borderBottomWidth: 1
  },
  navBarTitleText: {
    color: '#FFF',
    fontSize:16,
    fontWeight: '500',
    marginVertical: 9
  },
  navBarLeftButton: {
    paddingLeft: 10
  },
  navBarRightButton: {
    paddingRight: 10
  },
  navBarButtonText: {
    color: '#EEE',
    fontSize: 16,
    marginVertical:10
  }
});

AppRegistry.registerComponent('learn03', () => learn03);

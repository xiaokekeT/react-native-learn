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
  StatusBarIOS,
  AsyncStorage
} from 'react-native';
import SimpleButton from './Components/SimpleButton';
import NoteScreen from './Components/NoteScreen';
import HomeScreen from './Components/HomeScreen';
import _ from 'lodash';

const NavigationBarRouteMapper = {
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
                name: 'createNote',
                note: {
                  id: new Date().getTime(),
                  title: '',
                  body: '',
                  isSaved: false
                }
              });
            }}
            customText='Create Note'
            style={styles.navBarRightButton}
            textStyle={styles.navBarButtonText}
          />
        );
      case 'createNote': 
        if (route.note.isSaved) {
          return (
            <SimpleButton
              onPress={() => {
                navigator.props.onDeleteNote(route.note);
                navigator.pop();
               }}
              customText='Delete'
              style={styles.navBarRightButton}
              textStyle={styles.navBarButtonText}
            />
          );
        } else {
          return null;
        }
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
      case 'createNote':
        return(
          <Text style={styles.navBarTitleText}>{route.note ?
            route.note.title : 'Create Note'}</Text>
        );
    }
  }
};

class learn03 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedNote: {},
        notes: {}
      };
      StatusBarIOS.setStyle('light-content');
      this.loadNotes();
    }
    
    async loadNotes() {
       try {
         var notes = await AsyncStorage.getItem("@ReactNotes:notes");
         if (notes !== null) {
           this.setState({notes:JSON.parse(notes)})
         }
       } catch (error) { 
          console.log('AsyncStorage error: ' + error.message);
       }
    }
    
    async saveNotes(notes) {
       try {
         await AsyncStorage.setItem("@ReactNotes:notes", JSON.stringify(notes));
       } catch (error) {
         console.log('AsyncStorage error: ' + error.message);
       } 
    }

    updateNote(note) {
      var newNotes = Object.assign({}, this.state.notes);
      note.isSaved = true;
      newNotes[note.id] = note;
      this.setState({notes:newNotes});
      this.saveNotes(newNotes)
    }

    deleteNote(note) {
      var newNotes = Object.assign({}, this.state.notes);
      delete newNotes[note.id];
      this.setState({notes:newNotes});
      this.saveNotes(newNotes);
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
            onDeleteNote={(note) => this.deleteNote(note)}
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

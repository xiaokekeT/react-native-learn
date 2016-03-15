import React, {
     StyleSheet,
     TextInput,
     View
   } from 'react-native';

export default class NoteScreen extends React.Component {
     render () {
       return (
         <View style={styles.container}>
            <TextInput ref="title"
                autoFocus={true}
                placeholder="Untitled"
                onEndEditing={ (text)=>{ this.refs.body.focus() } }
                style={ styles.title} />
            <TextInput ref="body" placeholder="Start typing" multiline={true} style={ styles.body} />
         </View>
       );
    }
}
var styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 64
     },
     title: {
       height: 40
     },
     body: {
       flex:1
     }
 });
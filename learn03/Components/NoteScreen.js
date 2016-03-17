import React, {
     StyleSheet,
     TextInput,
     View
   } from 'react-native';

export default class NoteScreen extends React.Component {

   render () {
     return (
       <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
                ref="title"
                autoFocus={true}
                placeholder="Untitled"
                onEndEditing={ (text)=>{ this.refs.body.focus() } }
                style={ [styles.textinput,styles.title] }
                value={ this.props.title }
            />
          </View>
          <View style={[styles.inputContainer, styles.bodyFlex]}>
            <TextInput
                ref="body"
                placeholder="Start typing"
                multiline={true}
                textAlignVertical="top"
                underlineColorAndroid="transparent"
                style={ [styles.textinput,styles.body] }
                value={ this.props.body }
            />
          </View>
       </View>
     );
  }
}
var styles = StyleSheet.create({
     container: {
       flex: 1,
       marginTop: 64
     },
     title: {
       height: 40
     },
     body: {
       flex:1,
     },
     textInput: {
       flex:1,
       fontSize: 16
     },
     inputContainer: {
       margin: 20,
       borderBottomColor: '#9E7CE3',
       borderBottomWidth: 1,
     },
     bodyFlex: {
       flex: 1
     }
 });
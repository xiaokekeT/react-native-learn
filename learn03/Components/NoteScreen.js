import React, {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default class NoteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        note: this.props.note || {}
    }
  }

  updateNote(title, body) {
    const note = Object.assign(this.state.note, {
        title,
        body
    });
    this.props.onChangeNote(note);
    this.setState(note);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
              ref="title"
              autoFocus={true}
              placeholder="Untitled"
              onEndEditing={ (text)=>{ this.refs.body.focus() } }
              style={ [styles.textinput,styles.title] }
              value={ this.state.note.title || ''}
              onChangeText = {(title)=> this.updateNote(title, this.state.note.body)}
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
              value={ this.state.note.body || ''}
              onChangeText = {(body)=> this.updateNote(this.state.note.title, body)}
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
    flex: 1
  },
  textInput: {
    flex: 1,
    backgroundColor: "#F60",
    fontSize: 16
  },
  inputContainer: {
    borderBottomColor: "#9E7CE3",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginTop: 10,
    marginLeft: 10
  },
  bodyFlex: {
    padding: 5,
    flex: 1
  }
});